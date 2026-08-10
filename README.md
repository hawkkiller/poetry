# Michael Lazebny's favorite poems

A quiet, Markdown-first archive for poems and pieces worth returning to.

Russian is the default interface at `/`. The English interface uses `/en`.

## Add a poem

Create one Markdown file for the original poem at
`src/content/poems/<author-slug>/<poem-slug>.md`. That structure produces a URL
such as `/poems/brodsky/odinochestvo`.

```md
---
originalLanguage: en
translationKey: poem-title
title: "Poem title"
author: "Author name"
year: 1924
tags: [memory, night]
image: "../../../assets/poems/author-slug/poem-title.webp"
imageAlt: "A concise description of the image"
source: "https://example.com/original-source"
comment: "An optional personal note about why this stayed with me."
favorite: false
order: 4
---

The poem goes here.
Keep its original line breaks.
```

`originalLanguage`, `translationKey`, `title`, and `author` are required. The
build will report a clear error if frontmatter does not match the collection
schema.

`originalLanguage` is `en` or `ru`. `translationKey` is a stable content identifier;
the author folder and Markdown filename define the URL.
Store the title, author, and poem exactly as they appear in the original language.
Do not add translated copies: EN/RU changes only the website interface. Use stable
tag keys from `src/i18n.ts`; the interface localizes their visible labels.

`image` and `imageAlt` are optional. Keep poem images separately in
`src/assets/poems/<author-slug>/`; the page displays them at their natural aspect
ratio without cropping.

## Add an author photo

Each author has a profile at `src/content/authors/<author-slug>.md`. Add an image
under `src/assets/authors/`, then reference it from the profile:

```md
---
name: "Author name"
sortName: "Surname"
lifespan: "1900–1980"
facts:
  - "A concise, verified fact about the author."
photo: "../../assets/authors/author-slug.webp"
photoAlt: "Portrait of Author name"
---

A short biographical paragraph in Markdown.
```

The biography, lifespan, facts, and photo are optional. Keep facts concise and
verify them against reliable literary or biographical sources.

Use plain Markdown unless a piece genuinely needs embedded components. This
keeps the collection readable outside the website and easy to move elsewhere.

## Develop

```bash
npm install
npm run dev
npm run build
```

## Deploy to Cloudflare

Pushes to `main` run `.github/workflows/deploy-cloudflare.yml`, build the Astro
site, and deploy `dist` as Cloudflare Workers Static Assets. The Worker name is
`michael-lazebny-poetry`.

Add these GitHub Actions repository secrets before the first deployment:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN`

The public production URL is configured as `https://poetry.lazebny.io` in
`astro.config.mjs`. Astro uses it to generate absolute canonical and
social-sharing URLs, including the `poetry-hero` Open Graph image.

The token should use Cloudflare's **Edit Cloudflare Workers** template and be
restricted to the account that will host the site. Never commit either value.
