# Build log

This is my record of how I used AI (Claude Code) to build this site. Each stage says what was built, what was checked, and what changed and why.

## Stage 0: Plan

- **Built:** nothing yet. The AI read the "GitHub" tab of my spreadsheet (read only) and proposed a plan, 5 tools and 2 install guides.
- **Checked:** I reviewed the plan and answered its questions. It pointed out that Joplin and SiYuan are both Notes, so 5 tools can only cover 4 categories.
- **Changed:** I decided to accept 4 categories. I removed "last checked" dates and asked for GitHub's real release or commit date instead. I also ruled out putting Joplin's Linux download-and-run script in a copy box.

## Stage 1: Project setup

- **Built:** Vite, React, TypeScript, Tailwind and shadcn/ui using their official install steps, plus HashRouter routes and a shared header and footer.
- **Checked:** the first `npm run build` failed because a security policy on my computer blocked a compiled file used by Vite 8. After the change below the build passed and all four routes opened locally.
- **Changed:** moved to Vite 7, whose files the policy allows, without changing the policy. Removed the optional oxlint checker for the same reason. Removed the Geist web font that shadcn added and used system fonts, because the site must load smoothly on a low-spec laptop.

## Stage 2: First deploy

- **Built:** a GitHub Actions workflow using the official Pages actions.
- **Checked:** the first run built the site but failed at publishing, with the message that Pages was not enabled. I set Settings > Pages > Source to GitHub Actions.
- **Changed:** updated the actions to their newest versions after the first run gave a deprecation warning.

## Stage 3: Tool data and pages

- **Built:** `src/data/tools.json` with 5 tools, and the Home, Category and Tool pages that read from it.
- **Checked:** opened the pages locally and compared the wording with my spreadsheet. Every official link returned a working page.
- **Changed:** "Last update" comes from each official GitHub repo, not my sheet. SiYuan, Jan and Zotero differ from my sheet, so the site shows GitHub's date.
