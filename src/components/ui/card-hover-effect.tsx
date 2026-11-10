// From Aceternity UI (ui.aceternity.com/components/card-hover-effect), adapted:
// - uses React Router links so it works with HashRouter
// - takes shadcn cards as children instead of its own dark cards
// - fades in place instead of sliding, and loads a smaller part of Motion
// - stays still for anyone who has asked their device to reduce motion
import { useState, type ReactNode } from "react"
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

export const HoverEffect = ({
  items,
  className,
}: {
  items: { link: string; children: ReactNode }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()
  const duration = reduceMotion ? 0 : 0.15

  return (
    <LazyMotion features={domAnimation} strict>
      <div className={cn("grid grid-cols-1 sm:grid-cols-2", className)}>
        {items.map((item, idx) => (
          <Link
            to={item.link}
            key={item.link}
            className="relative block h-full w-full rounded-2xl p-1.5"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <m.span
                  aria-hidden="true"
                  className="absolute inset-0 block h-full w-full rounded-2xl bg-muted"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration } }}
                  exit={{ opacity: 0, transition: { duration } }}
                />
              )}
            </AnimatePresence>
            <div className="relative h-full">{item.children}</div>
          </Link>
        ))}
      </div>
    </LazyMotion>
  )
}
