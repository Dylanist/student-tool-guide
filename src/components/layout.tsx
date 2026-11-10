import { useEffect } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"

import { Separator } from "@/components/ui/separator"
import { categories } from "@/data"
import { cn } from "@/lib/utils"

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    "rounded-sm text-sm underline-offset-4 hover:underline",
    isActive ? "font-semibold text-foreground underline" : "text-muted-foreground",
  )
}

function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-4 py-4">
        <Link to="/" className="w-fit rounded-sm leading-tight">
          <span className="block font-semibold">
            Open-Source Research and Digital Curation
          </span>
          <span className="block text-sm text-muted-foreground">A Student Guide</span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-x-4 gap-y-1">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              to={`/category/${category.slug}`}
              className={navClass}
            >
              {category.name}
            </NavLink>
          ))}
          <NavLink to="/learn" className={navClass}>
            Explainer
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-4xl px-4 pb-6">
      <Separator className="mb-4" />
      <p className="text-sm text-muted-foreground">
        Every link goes to a tool's official repo or site. Check the official page
        before you install anything.
      </p>
    </footer>
  )
}

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
