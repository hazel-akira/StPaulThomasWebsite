// src/components/ui/chart.tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";
import type { TooltipProps } from "recharts";
import { cn } from "../../lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = { config: ChartConfig }
const ChartContext = React.createContext<ChartContextProps | null>(null)
function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error("useChart must be used within a <ChartContainer />")
  return ctx
}

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs " +
            "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground " +
            "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 " +
            "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border " +
            "[&_.recharts-dot[stroke='#fff']]:stroke-transparent " +
            "[&_.recharts-layer]:outline-none " +
            "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border " +
            "[&_.recharts-radial-bar-background-sector]:fill-muted " +
            "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted " +
            "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border " +
            "[&_.recharts-sector[stroke='#fff']]:stroke-transparent " +
            "[&_.recharts-sector]:outline-none " +
            "[&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartStyle: React.FC<{ id: string; config: ChartConfig }> = ({
  id,
  config,
}) => {
  const entries = Object.entries(config).filter(
    ([, c]) => c.color !== undefined || c.theme !== undefined
  )
  if (!entries.length) return null

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${entries
  .map(([key, cfg]) => {
    const color =
      cfg.theme?.[theme as keyof typeof cfg.theme] ?? cfg.color
    return color ? `  --color-${key}: ${color};` : ""
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

// *** TOOLTIP
export const ChartTooltip = RechartsPrimitive.Tooltip

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  TooltipProps<number, string> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: "line" | "dot" | "dashed"
    nameKey?: string
    labelKey?: string
  }
>(
  (
    {
      nameKey,
      labelKey,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      labelClassName,
      ...rest
    },
    ref
  ) => {
    const { config } = useChart()
    // Recharts TooltipProps does not guarantee these props exist, so extract only what is safe.
    const {
      labelFormatter,
      
    } = rest

    // Get the rest of the props safely from rest as any
    const active = (rest as any).active
    const label = (rest as any).label
    const className = (rest as any).className
    // We'll use type assertion to satisfy TypeScript.

    const payload = (rest as any).payload as Array<any> | undefined

    if (!active || !payload || !payload.length) return null

    // render the tooltip header
    const tooltipHeader = React.useMemo(() => {
      if (hideLabel) return null
      const first = payload[0]
      const key = `${labelKey ?? first.dataKey ?? first.name ?? "value"}`
      const cfg = getPayloadConfigFromPayload(config, first, key)
      const text =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label ?? label
          : cfg?.label

      if (!text) return null
      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(text, payload)}
          </div>
        )
      }
      return <div className={cn("font-medium", labelClassName)}>{text}</div>
    }, [active, payload, hideLabel, label, labelFormatter, labelClassName, config, labelKey])

    const nestLabel = payload.length === 1 && indicator !== "dot"

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel && tooltipHeader}
        <div className="grid gap-1.5">
          {payload.map((item, idx) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`
            const cfg = getPayloadConfigFromPayload(config, item, key)
            const dotColor = item.payload?.fill ?? item.color
            return (
              <div
                key={item.dataKey + idx}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2",
                  indicator === "dot" && "items-center"
                )}
              >
                {/* indicator dot/line */}
                {!hideIndicator && !cfg?.icon && (
                  <div
                    className={cn(
                      "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent":
                          indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed",
                      }
                    )}
                    style={{
                      "--color-bg": dotColor,
                      "--color-border": dotColor,
                    } as React.CSSProperties}
                  />
                )}

                {/* value + label */}
                {item.value !== undefined && item.name ? (
                  typeof config?.formatter === "function"
                    ? (config.formatter as (
                        value: any,
                        name: string,
                        item: any,
                        idx: number,
                        payload: any
                      ) => React.ReactNode)(
                        item.value,
                        item.name,
                        item,
                        idx,
                        item.payload
                      )
                    : null
                ) : (
                  <div
                    className={cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    )}
                  >
                    {nestLabel && tooltipHeader}
                    <span className="text-muted-foreground">
                      {cfg?.label ?? item.name}
                    </span>
                    {item.value !== undefined && (
                      <span className="font-mono font-medium tabular-nums text-foreground">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)
ChartTooltipContent.displayName = "ChartTooltipContent"

// *** LEGEND
export const ChartLegend = RechartsPrimitive.Legend

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: any[]
    verticalAlign?: "top" | "bottom" | "middle"
    hideIcon?: boolean
    nameKey?: string
  }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart()
  if (!payload?.length) return null

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey ?? item.dataKey ?? "value"}`
        const cfg = getPayloadConfigFromPayload(config, item, key)
        return (
          <div key={item.value} className="flex items-center gap-1.5">
            {cfg?.icon && !hideIcon ? (
              <cfg.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{ backgroundColor: item.color }}
              />
            )}
            {cfg?.label}
          </div>
        )
      })}
    </div>
  )
})
ChartLegendContent.displayName = "ChartLegendContent"

// *** HELPERS
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) return undefined
  const inner =
    "payload" in (payload as any) && typeof (payload as any).payload === "object"
      ? (payload as any).payload
      : undefined

  let cfgKey = key
  if (key in (payload as any) && typeof (payload as any)[key] === "string") {
    cfgKey = (payload as any)[key]
  } else if (
    inner &&
    key in inner &&
    typeof inner[key as keyof typeof inner] === "string"
  ) {
    cfgKey = inner[key as keyof typeof inner] as string
  }

  return cfgKey in config
    ? config[cfgKey]
    : (config[key] as ChartConfig[string] | undefined)
}

