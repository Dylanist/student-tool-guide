import { useParams } from "react-router-dom"

import { ToolGrid } from "@/components/tool-grid"
import { getCategory, getToolsInCategory } from "@/data"
import { NotFoundPage } from "@/pages/not-found"

export function CategoryPage() {
  const { slug } = useParams()
  const category = getCategory(slug)

  if (!category) return <NotFoundPage />

  const items = getToolsInCategory(category.slug)

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{category.name}</h1>
        <p className="text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "tool" : "tools"}
        </p>
      </div>
      {/* The search and filter controls can go here. */}
      <ToolGrid items={items} />
    </div>
  )
}
