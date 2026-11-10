import { Link } from "react-router-dom"

import { CautionBadge, CostBadge } from "@/components/labels"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate, type Tool } from "@/data"

export function ToolGrid({ items }: { items: Tool[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((tool) => (
        <Link key={tool.slug} to={`/tool/${tool.slug}`} className="block rounded-xl">
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
        </Link>
      ))}
    </div>
  )
}
