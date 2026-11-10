import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"

const buttonText = { idle: "Copy", copied: "Copied!", failed: "Copy failed" }

export function CodeBox({ command }: { command: string }) {
  const [status, setStatus] = useState<keyof typeof buttonText>("idle")
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setStatus("copied")
    } catch {
      setStatus("failed")
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus("idle"), 2000)
  }

  return (
    <div className="flex items-center gap-2 rounded-lg border bg-muted/60 py-1.5 pr-1.5 pl-3">
      <code className="min-w-0 flex-1 overflow-x-auto font-mono text-sm whitespace-pre">
        {command}
      </code>
      <Button type="button" variant="outline" size="sm" onClick={copy} aria-live="polite">
        {buttonText[status]}
      </Button>
    </div>
  )
}
