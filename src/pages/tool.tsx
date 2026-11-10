import type { ReactNode } from "react"
import { ShieldAlert, TriangleAlert } from "lucide-react"
import { Link, useParams } from "react-router-dom"

import { InstallGuide } from "@/components/install-guide"
import { CautionBadge, CostBadge, OutLink } from "@/components/labels"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { formatDate, getCategory, getTool } from "@/data"
import { NotFoundPage } from "@/pages/not-found"

function Fact({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="grid gap-0.5 border-b py-2 sm:grid-cols-[11rem_1fr] sm:gap-4">
      <dt className="text-sm font-medium">{term}</dt>
      <dd className="text-sm">{children}</dd>
    </div>
  )
}

export function ToolPage() {
  const { slug } = useParams()
  const tool = getTool(slug)

  if (!tool) return <NotFoundPage />

  const category = getCategory(tool.category)

  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{tool.name}</h1>
        <p>{tool.description}</p>
        <div className="flex flex-wrap gap-1.5">
          <CostBadge tool={tool} />
          {tool.caution && <CautionBadge />}
        </div>
      </div>

      {tool.caution && (
        <Alert>
          <TriangleAlert aria-hidden="true" />
          <AlertTitle>Use with caution</AlertTitle>
          <AlertDescription>{tool.caution}</AlertDescription>
        </Alert>
      )}

      <dl className="border-t">
        {category && (
          <Fact term="Category">
            <Link to={`/category/${category.slug}`} className="underline underline-offset-4">
              {category.name}
            </Link>
          </Fact>
        )}
        <Fact term="Licence">{tool.licence}</Fact>
        <Fact term="Official link">
          <span className="flex flex-wrap gap-x-4 gap-y-1">
            <OutLink href={tool.officialRepo}>GitHub repo</OutLink>
            {tool.officialSite && <OutLink href={tool.officialSite}>Official site</OutLink>}
          </span>
        </Fact>
        <Fact term="Last update">
          {formatDate(tool.lastUpdate.date)} ({tool.lastUpdate.detail})
        </Fact>
        {tool.replaces && <Fact term="Paid tool it replaces">{tool.replaces}</Fact>}
      </dl>

      <Alert>
        <ShieldAlert aria-hidden="true" />
        <AlertTitle>Safety note</AlertTitle>
        <AlertDescription>{tool.safetyNote}</AlertDescription>
      </Alert>

      {tool.guide && <InstallGuide guide={tool.guide} />}
    </article>
  )
}
