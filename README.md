<p align="center">
  <a href='http://makeapullrequest.com'><img alt='PRs Welcome' src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields'/></a>
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/plantoncloud/planton.ai"/>
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/plantoncloud/planton.ai"/>
  <img alt="GitHub closed pull requests" src="https://img.shields.io/github/issues-pr-closed/plantoncloud/planton.ai"/>
</p>

# planton.ai — Website, docs, and blog

This is the repository for the planton.ai website. It contains:

- All written content and visuals for the public website: product pages, docs, blog, case studies, tutorials, and marketing pages
- File system–based content for docs and blog (Markdown/MDX) alongside the components, templates, and logic used to render them
- All the components, styling, and configurations used to run the site as an application

## Table of contents
- [Quick start](#quick-start)
- [Advanced setup](#advanced-setup)
- [Contributing](#contributing)
 - [Cursor rules for docs](#cursor-rules-for-docs)
 - [Cursor rules for pull requests](#cursor-rules-for-pull-requests)

## Quick start

1. **Pre-installation**

    Install Node.js (≥ 18). If you use `nvm`, run `nvm use` in the repo to switch to the recommended version. Enable Yarn (Berry) via Corepack.

    ```bash
    node -v   # should be >= 18
    corepack enable  # enables Yarn 4 from packageManager field
    ```

2.  **Start developing**

    Clone the repo and navigate into the directory:

    ```bash
    git clone git@github.com:plantoncloud/planton.ai.git && cd planton.ai
    ```

    Install dependencies and start the dev server (Next.js):

    ```bash
    yarn
    yarn dev
    ```

    Your site is now running at `http://localhost:3000`.

3.  **Open the source code and start editing!**

    Content lives under `content/` and app code under `src/`. Changes in most files hot-reload automatically.

## Advanced setup

### Scripts

```bash
# Lint
yarn lint

# Build for production
yarn build

# Start production server (after build)
yarn start
```

### Content model

- Docs: Markdown files under `public/docs/**`
- Blog: MD/MDX under `public/blog/**`
- Static assets: `public/`
- Media (images, videos): See Media management below

The app uses file system–based routing and content rendering. To add a new page:
1) Create a Markdown/MDX file under `public/docs` or `public/blog`
2) Include frontmatter (e.g., `title`, `description` for docs; `title`, `date`, `author`, `tags` for blog)
3) Run `yarn dev` and navigate to the route

### Project structure

- `src/app/docs/**`: Docs routes and components
- `src/app/blog/**`: Blog routes and components
- `src/app/components/**`: Shared UI components
- `src/lib/**`: Utilities for parsing/reading content

## Contributing

We <3 contributions big and small. In priority order (although everything is appreciated):

- Open a PR
  - Follow the [Quick start](#quick-start) to run the site locally
  - For basic content edits, navigate to the file in GitHub and click the edit icon (pencil)
- Open an issue for bugs or content ideas: `https://github.com/plantoncloud/planton.ai/issues/new`

Guidelines:
- Keep content changes focused and include a brief summary in the PR description
- For docs/blog posts, prefer copy-pastable examples and reference exact file paths or commands where possible

## Cursor rules for docs

We use Cursor as a native part of our workflow for writing docs and blog posts. To make this transparent and repeatable, we maintain rule files under:

```
.cursor/rules/docs/
  00-docs-style.mdc     # Style and tone guide for docs/blogs
  01-docs-sources.mdc   # Source-of-truth and referencing guide
  03-docs-media.mdc     # Media and screenshot URL requirements
```

How to use (in Cursor Chat):
- `@docs-style`: Apply the docs/blog style and tone (voice, IA, frontmatter templates)
- `@docs-sources`: Ground content in source code across repos (Project Planton legoblocks, Planton Cloud APIs and services, CLI-first flows)
- `@docs-media`: Ensure all images use Cloudflare R2 URLs (https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/)

Why we do this: we want our documentation to be accurate, humble, and useful. That means grounding every page in real code (protobufs, IaC, backend/CLI), and writing in a reader-first tone. The rules above encode that process so contributors can open PRs with confidence.


## Cursor rules for pull requests

We also automate PR creation with Cursor rules. These live under:

```
.cursor/rules/pull-requests/
  generate-pr-info.mdc  # Ask-only: outputs a title and a Markdown body
  create-pr.mdc         # Action: creates/switches branch, commits, pushes, opens PR
```

How it works:
- `@pr-info` generates exactly two blocks:
  - First `text` block: Conventional Commit title with planton.ai-aware scope
    - Scopes: `website/app`, `website/lib`, `website/public`, `website/config`, `docs`, `blog`, `content/workspace`, `.cursor`, `repo`
  - Second `markdown` block: Description template with Summary/Context/Changes/etc.
- `@create-pr` uses that output and calls `tools/local-dev/create_pull_request.py` to:
  - Create or switch to a branch based on title
  - Commit changes if any are staged
  - Push the branch and open a PR with GitHub CLI (`gh`)

Quick usage (in Cursor Chat):
1. Run `@pr-info` to produce title and body
2. Run `@create-pr` to open the PR non-interactively

Prereqs:
- `gh` installed and authenticated (`gh auth status`)
- `python3` installed
- Writable `origin` remote

## Media management (images via Cloudflare R2)

We store screenshots and other image assets in Cloudflare R2 instead of baking them into the static Next.js export. This keeps the repo lean as the volume grows, gives us CDN-like delivery (with a custom domain soon), and lets us manage caching independently.

### Summary
- Author images locally under `content/media/images/` in this repo
- Sync images to Cloudflare R2 with `make sync-media` (uses `rclone`)
- Reference images in docs/blog via the public R2 URL (temporary dev URL now; custom domain coming)
- Keep a copy in-repo for now to aid local authoring and preview

### One-time setup
1. Install rclone
   ```bash
   brew install rclone
   ```
2. Configure the `r2` remote in `~/.config/rclone/rclone.conf` (ask an admin for credentials)
   ```ini
   [r2]
   type = s3
   provider = Cloudflare
   access_key_id = <from Cloudflare>
   secret_access_key = <from Cloudflare>
   endpoint = https://074755a78d8e8f77c119a90a125e8a06.r2.cloudflarestorage.com
   acl = private
   ```
   - Bucket: `planton-ai-media`
   - Public dev base URL: `https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/`

### Daily workflow
1. Add or update images under `content/media/images/`
2. Sync to R2:
   ```bash
   make sync-media
   ```
   This runs:
   ```bash
   rclone sync content/media/ r2:planton-ai-media --progress --transfers 8 --checkers 16 --s3-acl private
   ```
3. Reference images from docs/blog using the public URL:
   ```md
   ![Alt text](https://pub-524d21c5655e4da5b4cbb0b0e80a6a7e.r2.dev/images/my-screenshot.png)
   ```

### Conventions
- Filenames: lowercase, hyphens, contextual suffixes when helpful, e.g., `aws-credentials_123456789012_dev.png`
- Keep `content/media/` committed for now. We’ll revisit once the public endpoint is on a custom domain with caching configured.
- Videos: will be handled via Cloudflare Stream; a separate section will be added later.

### Troubleshooting
- Verify connectivity: `rclone tree r2:` or `rclone ls r2:planton-ai-media`
- 403/URL issues: confirm object path matches, and that the public dev gateway is enabled for the bucket/prefix.
- Long syncs: tune `--transfers`/`--checkers` in the Makefile target.

### Roadmap
- Move to a custom domain for R2 public access and enable caching headers.
- Optional helper to transform local paths to R2 URLs during authoring.

