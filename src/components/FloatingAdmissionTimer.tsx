import React, { useEffect, useMemo, useState } from "react";
import { XMarkIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

type Props = {
  target: string | Date;
  start?: string | Date;
  ctaText?: string;
  ctaHref?: string;
  storageKey?: string;
  heading?: string;
};

function useBumpOnChange<T>(value: T, duration = 220) {
  const [bump, setBump] = useState(false);
  useEffect(() => {
    setBump(true);
    const t = setTimeout(() => setBump(false), duration);
    return () => clearTimeout(t);
  }, [value, duration]);
  return bump;
}

function useCountdown(targetDate: Date) {
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = targetDate.getTime() - now.getTime();
  const clamped = Math.max(diff, 0);
  const days = Math.floor(clamped / 86400000);
  const hours = Math.floor((clamped % 86400000) / 3600000);
  const minutes = Math.floor((clamped % 3600000) / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  return { days, hours, minutes, seconds, expired: diff <= 0 };
}

const pad2 = (n: number) => n.toString().padStart(2, "0");

const FloatingAdmissionTimer: React.FC<Props> = ({
  target,
  start,
  ctaText = "Apply Now",
  ctaHref = "/grade10",
  storageKey = "g10-admissions-timer-closed",
  heading = "Grade 10 admissions close in",
}) => {
  const { pathname } = useLocation();
  if (pathname === "/") return null; // don’t show on homepage

  const targetDate = useMemo(() => (target instanceof Date ? target : new Date(target)), [target]);
  const startDate = useMemo(() => (start ? (start instanceof Date ? start : new Date(start)) : null), [start]);
  const { days, hours, minutes, seconds, expired } = useCountdown(targetDate);
  const secBump = useBumpOnChange(seconds);

  // Closed state persists per tab
  const [closed, setClosed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(storageKey) === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (closed) sessionStorage.setItem(storageKey, "1");
      else sessionStorage.removeItem(storageKey);
    } catch {}
  }, [closed, storageKey]);

  if (expired) return null;

  return (
    <div className="sticky bottom-0 z-50 w-full px-2 sm:px-2 bg-white/90 shadow-inner" aria-live="polite">
      <style>{`
        @keyframes pulseTick {
          0%{transform:scale(1);opacity:1}
          40%{transform:scale(1.12);opacity:.95}
          100%{transform:scale(1);opacity:1}
        }
        .animate-pulseTick { animation: pulseTick 220ms ease-out; }
      `}</style>

      {closed ? (
        // Reopen button
        <div className="mx-auto w-full max-w-[72rem] px-3 sm:px-5 py-2 flex justify-center">
          <button
            onClick={() => setClosed(false)}
            className="flex items-center gap-2 rounded-full bg-black text-white px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg hover:brightness-110 transition text-xs sm:text-sm"
            aria-expanded="false"
            title="Show Grade 10 admissions timer"
          >
            <span className="font-bold">Grade 4-6 admissions</span>
            <ChevronUpIcon className="w-4 sm:w-5 h-5" />
          </button>
        </div>
      ) : (
        // Full timer
        <div className="mx-auto w-full max-w-[72rem] px-3 sm:px-5 py-2">
          <div className="w-full max-w-7xl">
            {/* progress bar */}
            <div
              className="h-1 w-full"
              style={{
                background:
                  startDate != null
                    ? `linear-gradient(90deg,#df8811 ${Math.min(
                        100,
                        Math.max(0, ((Date.now() - startDate.getTime()) / (targetDate.getTime() - startDate.getTime())) * 100)
                      )}%, black ${Math.min(
                        100,
                        Math.max(0, ((Date.now() - startDate.getTime()) / (targetDate.getTime() - startDate.getTime())) * 100)
                      )}%)`
                    : "linear-gradient(90deg,#74d1f6,#df8811,#277291)",
              }}
            />

            <div className="px-3 sm:px-5 py-2 sm:py-3 flex flex-wrap items-center gap-x-3 gap-y-2">
              {/* Title */}
              <div className="flex items-center gap-2 min-w-[10ch] order-1">
                <span className="text-[10px] sm:text-xs font-bold uppercase text-[#13365E]">Admissions : </span>
                <span className="hidden sm:inline text-sm uppercase font-bold text-[#0f1b2b]">{heading}</span>
              </div>

              {/* Countdown */}
              <div className="order-3 sm:order-2 flex items-center gap-2 sm:gap-3 text-[#0f1b2b] flex-1 min-w-[240px]">
                <Pill label="Days" value={days} />
                <Sep />
                <Pill label="Hours" value={hours} />
                <Sep />
                <Pill label="Minutes" value={minutes} />
                <Sep />
                <Pill label="Seconds" value={seconds} emphasize bump={secBump} />
              </div>

              {/* CTA */}
              <a
                href={ctaHref}
                className="order-2 sm:order-3 ml-auto inline-flex items-center justify-center rounded-full bg-[#85a7c9]/90 px-4 py-2 text-black text-sm font-semibold hover:bg-[#c8740e]/60 transition whitespace-nowrap w-full sm:w-auto"
              >
                {ctaText}
              </a>

              {/* Close button */}
              <div className="order-4 flex items-center ml-0 sm:ml-1">
                <button
                  onClick={() => setClosed(true)}
                  className="p-2 rounded-md hover:bg-gray-100 text-gray-600"
                  title="Close"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

           
          </div>
        </div>
      )}
    </div>
  );
};

/* UI bits */
const Pill: React.FC<{ label: string; value: number; emphasize?: boolean; bump?: boolean }> = ({
  label,
  value,
  emphasize,
  bump,
}) => (
  <div
    className={`flex flex-col items-center justify-center px-2 sm:px-3 py-1 rounded-xl ${
      emphasize ? "bg-[#df8811] text-black" : "bg-[#85a7c9] text-black"
    } text-xs sm:text-sm font-bold`}
  >
    <span className={`tabular-nums leading-none text-base sm:text-lg ${bump ? "animate-pulseTick" : ""}`}>
      {pad2(value)}
    </span>
    <span className="uppercase text-[9px] sm:text-[10px] opacity-90 leading-tight">{label}</span>
  </div>
);

const Sep = () => <span className="w-px h-6 bg-gray-300/80" />;

export default FloatingAdmissionTimer;
