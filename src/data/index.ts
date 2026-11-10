import data from "./tools.json"

export type CostLabel = "open-source" | "freemium" | "proprietary"

export interface LinkInfo {
  label: string
  url: string
}

/** One idea per step. Before a command, say what it does and where to run it. */
export interface GuideStep {
  text: string
  /** Copied word for word from the official docs. Shown in a box with a Copy button. */
  command?: string
  link?: LinkInfo
  /** Caption for a screenshot that has not been added yet. */
  screenshot?: string
}

export interface GuidePlatform {
  os: string
  steps: GuideStep[]
}

/** Use `steps` when every computer follows the same steps, `platforms` for tabs. */
export interface GuideBlock {
  steps?: GuideStep[]
  platforms?: GuidePlatform[]
}

export interface Guide extends GuideBlock {
  title: string
  requirements: string[]
  requirementsGuide: GuideBlock
  source: LinkInfo
}

export interface Tool {
  slug: string
  name: string
  category: string
  description: string
  costLabel: CostLabel
  costLabelText: string
  licence: string
  officialRepo: string
  officialSite?: string
  lastUpdate: {
    /** Written as YYYY-MM-DD. */
    date: string
    detail: string
  }
  safetyNote: string
  /** Only for tools marked "Use with caution" in the spreadsheet. */
  caution?: string
  replaces?: string
  guide?: Guide
}

export interface Category {
  slug: string
  name: string
}

const site = data as { categories: Category[]; tools: Tool[] }

export const tools = site.tools

/** Only categories that have at least one tool appear on the site. */
export const categories = site.categories.filter((category) =>
  tools.some((tool) => tool.category === category.slug),
)

export function getCategory(slug: string | undefined) {
  return categories.find((category) => category.slug === slug)
}

export function getTool(slug: string | undefined) {
  return tools.find((tool) => tool.slug === slug)
}

export function getToolsInCategory(slug: string) {
  return tools.filter((tool) => tool.category === slug)
}

export function formatDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
}
