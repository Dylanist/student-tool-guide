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

export function CautionBadge() {
  return <Badge variant="outline">Use with caution</Badge>
}
