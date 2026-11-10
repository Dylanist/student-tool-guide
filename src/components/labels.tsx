import type { ReactNode } from "react"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { Tool } from "@/data"
import { cn } from "@/lib/utils"

const costStyles: Record<Tool["costLabel"], string> = {
  "open-source": "bg-label-open",
  freemium: "bg-label-paid",
  proprietary: "bg-label-paid",
}

export function CostBadge({ tool }: { tool: Pick<Tool, "costLabel" | "costLabelText"> }) {
  return (
    <Badge className={cn("border-transparent text-foreground", costStyles[tool.costLabel])}>
      {tool.costLabelText}
    </Badge>
  )
}

export function OutLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 underline underline-offset-4"
    >
      {children}
      <ExternalLink aria-hidden="true" className="size-3" />
    </a>
  )
}

export function CautionBadge() {
  return <Badge variant="outline">Use with caution</Badge>
}
