// src/hooks/use-mobile.ts
import { useState, useEffect } from 'react'

/**
 * Returns true when the viewport width is under the given breakpoint.
 * @param breakpointPx the maximum width in pixels for “mobile” (default: 768)
 */
export function useMobile(breakpointPx = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.innerWidth < breakpointPx : false
  )

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < breakpointPx)
    }

    window.addEventListener('resize', onResize)
    // set initial state in case SSR → hydration mismatch
    onResize()

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [breakpointPx])

  return isMobile
}
