import { ChevronDown } from "lucide-react"

import { CodeBox } from "@/components/code-box"
import { OutLink } from "@/components/labels"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Guide, GuideBlock, GuideStep } from "@/data"

function Steps({ steps }: { steps: GuideStep[] }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-sm">
      {steps.map((step) => (
        <li key={step.text} className="space-y-2 pl-1">
          <p>{step.text}</p>
          {step.link && <OutLink href={step.link.url}>{step.link.label}</OutLink>}
          {step.command && <CodeBox command={step.command} />}
          {step.screenshot && (
            <div className="rounded-lg border border-dashed p-4 text-center text-xs text-muted-foreground">
              Screenshot to add: {step.screenshot}
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

function Block({ block }: { block: GuideBlock }) {
  if (!block.platforms) return <Steps steps={block.steps ?? []} />

  return (
    <Tabs defaultValue={block.platforms[0].os} className="gap-3">
      <TabsList>
        {block.platforms.map((platform) => (
          <TabsTrigger key={platform.os} value={platform.os}>
            {platform.os}
          </TabsTrigger>
        ))}
      </TabsList>
      {block.platforms.map((platform) => (
        <TabsContent key={platform.os} value={platform.os}>
          <Steps steps={platform.steps} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

export function InstallGuide({ guide }: { guide: Guide }) {
  return (
    <section aria-labelledby="guide-heading" className="space-y-5">
      <Separator />
      <h2 id="guide-heading" className="text-lg font-semibold">
        {guide.title}
      </h2>

      <Collapsible className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-semibold">Requirements</h3>
          <CollapsibleTrigger asChild>
            <Button type="button" variant="outline" size="sm" className="group">
              How to install the requirements
              <ChevronDown
                aria-hidden="true"
                className="transition-transform group-data-[state=open]:rotate-180"
              />
            </Button>
          </CollapsibleTrigger>
        </div>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {guide.requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
        <CollapsibleContent>
          <div className="rounded-lg border p-4">
            <Block block={guide.requirementsGuide} />
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="space-y-3">
        <h3 className="font-semibold">Steps</h3>
        <Block block={guide} />
      </div>

      <p className="text-sm">
        Source: <OutLink href={guide.source.url}>{guide.source.label}</OutLink>
      </p>
    </section>
  )
}
