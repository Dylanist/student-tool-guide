const headings = [
  "What is a repo?",
  "How to read a licence",
  "How to tell if a project is maintained",
  "Warning signs of an unsafe download",
]

export function LearnPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Explainer</h1>
      {headings.map((heading) => (
        <h2 key={heading} className="text-lg font-semibold">
          {heading}
        </h2>
      ))}
    </div>
  )
}
