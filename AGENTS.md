# Poetry archive rules

## Original text only

- Store every poem exactly once, in its original language.
- Never create, generate, or add a translated version of a poem.
- Do not translate a poem's title, author name, or body for the EN/RU interface.
- Preserve the original wording, punctuation, stanza breaks, indentation, and capitalization.
- Do not silently correct or rewrite the poem. If the supplied text may contain an error, ask before changing it.

## Language behavior

- EN/RU switches the website interface only. It must not switch or translate poem content.
- Russian is the default interface at `/` and `/poems/...`; English lives under `/en` and `/en/poems/...`.
- Both interface languages must show the same library of original-language poems.
- `originalLanguage` describes the language of the poem and powers the language filter.
- Localize interface copy and displayed tag labels in code, not by duplicating poem files.

## Content model

- Keep one Markdown file with frontmatter per poem under `src/content/poems/<author-slug>/<poem-slug>.md`.
- The author folder and filename define the public URL: `/poems/<author-slug>/<poem-slug>`.
- Use a stable `translationKey` as the poem identifier even though translations are not stored.
- Tags in frontmatter are stable language-neutral keys; translate their visible labels through `src/i18n.ts`.
- A poem may optionally define `image` and `imageAlt` for its visual identity. Store images separately under `src/assets/poems/<author-slug>/` and never crop them in the poem layout.
- Keep one author profile at `src/content/authors/<author-slug>.md`. Its Markdown body may contain a short biography; frontmatter may define `sortName`, `lifespan`, `facts`, `photo`, and `photoAlt`. Use `sortName` for surname-first alphabetical ordering. Store portrait assets under `src/assets/authors/`.
- Author profiles are listed at `/authors` and `/en/authors`; an individual profile lives at `/authors/<author-slug>` and `/en/authors/<author-slug>`.
- Personal comments may use the language chosen by the site owner and must remain clearly separate from the poem text.
