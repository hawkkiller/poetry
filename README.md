# Commonplace

A quiet, Markdown-first archive for poems and pieces worth returning to.

## Add a poem

Create a Markdown file in `src/content/poems/`. The filename becomes the URL.

```md
---
title: "Poem title"
author: "Author name"
year: 1924
tags: [memory, night]
source: "https://example.com/original-source"
comment: "An optional personal note about why this stayed with me."
favorite: false
order: 4
---

The poem goes here.
Keep its original line breaks.
```

`title` and `author` are required. Everything else is optional. The build will
report a clear error if frontmatter does not match the collection schema.

Use plain Markdown unless a piece genuinely needs embedded components. This
keeps the collection readable outside the website and easy to move elsewhere.

## Develop

```bash
npm install
npm run dev
npm run build
```
