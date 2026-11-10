import { CautionBadge, CostBadge } from "@/components/labels"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { formatDate, type Tool } from "@/data"

export function ToolGrid({ items }: { items: Tool[] }) {
  return (
    <HoverEffect
      className="-m-1.5"
      items={items.map((tool) => ({
        link: `/tool/${tool.slug}`,
        children: (
          <Card size="sm" className="h-full">
            <CardHeader>
              <CardTitle>{tool.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>{tool.description}</p>
              <div className="flex flex-wrap gap-1.5">
                <CostBadge tool={tool} />
                {tool.caution && <CautionBadge />}
              </div>
              <p className="text-muted-foreground">
                {tool.licence} · Last update {formatDate(tool.lastUpdate.date)}
              </p>
            </CardContent>
          </Card>
        ),
      }))}
    />
  )
}
