import type { ReactNode } from "react"
import { Link } from "react-router-dom"

import { CautionBadge, CostBadge } from "@/components/labels"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { categories, getToolsInCategory } from "@/data"

function LabelRow({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[13rem_1fr] sm:items-center">
      <dt>{label}</dt>
      <dd className="text-muted-foreground">{children}</dd>
    </div>
  )
}

export function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Student tool guide</h1>
        <p>
          A curated, plain-English archive of free, open-source and selected free
          proprietary tools for students.
        </p>
      </div>

      <section aria-labelledby="categories-heading" className="space-y-3">
        <h2 id="categories-heading" className="text-lg font-semibold">
          Categories
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {categories.map((category) => {
            const items = getToolsInCategory(category.slug)
            return (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className="block rounded-xl"
              >
                <Card size="sm" className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {items.map((tool) => tool.name).join(", ")}
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      <section aria-labelledby="labels-heading">
        <Card size="sm" className="bg-muted/40">
          <CardHeader>
            <CardTitle>
              <h2 id="labels-heading">How to read a tool card</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2 text-sm">
              <LabelRow
                label={<CostBadge tool={{ costLabel: "open-source", costLabelText: "Open-source" }} />}
              >
                The code is public under an open-source licence.
              </LabelRow>
              <LabelRow
                label={<CostBadge tool={{ costLabel: "freemium", costLabelText: "Freemium / paid features" }} />}
              >
                Free to start, but some features need payment.
              </LabelRow>
              <LabelRow
                label={<CostBadge tool={{ costLabel: "proprietary", costLabelText: "Proprietary" }} />}
              >
                Free to use, but the code is not open.
              </LabelRow>
              <LabelRow label={<CautionBadge />}>
                Useful, but read the warning on its page first.
              </LabelRow>
              <LabelRow label={<span className="font-medium">Last update</span>}>
                The latest release or commit on the tool's official GitHub repo.
              </LabelRow>
            </dl>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
