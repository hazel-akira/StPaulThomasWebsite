// src/components/FloatingActions.tsx
//import React from 'react'
//import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export const Floating  = () => (
  <>
    {/* Enroll button (fixed, bouncing) */}
    <div className="fixed bottom-8 left-10 z-50 animate-bounce">
      <a
        href="https://enquireto.pioneergroupofschools.co.ke/main/register?school=stpaulthomasacademy.co.ke"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-20 h-20 fix  sm:bottom-
          bg-[#74d1f6] text-white
          hover:bg-[#093057] hover:text-white
          shadow-lg rounded-full
          flex items-center justify-center
          text-center text-sm font-extrabold font-serif
          transition-colors
        "
        title="Enroll Today"
      >
        Enroll Today
      </a>
    </div>

    {/* Scroll-to-top button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="
        fixed bottom-15 right-4 z-50
        sm:bottom-10 md:bottom-14 sm:right-10
        bg-[#74d1f6]  backdrop-blur-md
        w-10 h-10 rounded-full
        hover:bg-opacity-40
        flex items-center justify-center
        transition
      "
      aria-label="Scroll to top"
    >
      <ArrowUp className="text-white" size={20} />
    </button>
  </>
)
