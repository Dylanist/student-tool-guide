import { HashRouter, Route, Routes } from "react-router-dom"

import { Layout } from "@/components/layout"
import { CategoryPage } from "@/pages/category"
import { HomePage } from "@/pages/home"
import { LearnPage } from "@/pages/learn"
import { NotFoundPage } from "@/pages/not-found"
import { ToolPage } from "@/pages/tool"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:slug" element={<CategoryPage />} />
          <Route path="tool/:slug" element={<ToolPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
