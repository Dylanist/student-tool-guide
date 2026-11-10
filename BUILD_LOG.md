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
- **Changed:** updated the actions to their newest versions after the first run gave a deprecation warning. Five runs failed because GitHub had not created the Pages site, even though Source showed GitHub Actions. Saving "Deploy from a branch" once and switching back to GitHub Actions created it.

## Stage 3: Tool data and pages

- **Built:** `src/data/tools.json` with 5 tools, and the Home, Category and Tool pages that read from it.
- **Checked:** the AI opened the pages locally and confirmed that every official link returned a working page. The wording was copied from my spreadsheet, and I still need to read it through myself.
- **Changed:** "Last update" comes from each official GitHub repo, not my sheet. SiYuan, Jan and Zotero differ from my sheet, so the site shows GitHub's date.

## Stage 4: Install guides

- **Built:** Marp CLI and Joplin guides with numbered steps, Tabs, Copy buttons, a Requirements toggle, Source links and screenshot placeholders.
- **Checked:** the AI compared the commands with the official Marp and Node.js pages, then tested the toggle, tabs and Copy button locally.
- **Changed:** the Linux steps for Joplin and Node.js link to the official pages, with no script in a copy box. Joplin's Linux command downloads and runs a script, which is what my Explainer warns about.

## Stage 5: Hover grid and size check

- **Built:** one Aceternity hover-effect grid on category pages, restyled to match shadcn/ui, with a plain fade.
- **Checked:** the hover layer appears and goes away, no page scrolls sideways at phone width, and the build is 497 KB in total. The main page download is about 123 KB compressed (115 KB JavaScript, 7.5 KB CSS, 0.4 KB HTML).
- **Changed:** the grid added 35 KB of compressed JavaScript, so it now loads only on category pages. I could not test the real clipboard or the reduced-motion setting in the AI's preview browser.
