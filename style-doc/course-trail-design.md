# Course Trail: Design and CSS Learning Plan

A dark, developer-style design for the Week 11 Course Catalog. It is a learning project: every visual feature is chosen to practise one specific CSS concept.

> The assignment says the design is your own. `design/design-reference.html` is a layout guide only. This document defines our own look.

---

## 1. Design concept

- **Mood:** dark "terminal / trail" theme with one bright accent.
- **Core idea:** each level has its own colour, used consistently everywhere (badge, card edge, detail underline). Students can tell a course's level at a glance.
- **Distinct features** (vs. the reference):
  1. Dark theme driven by CSS variables.
  2. Cards with a coloured left border based on level.
  3. Large faded decoration in the card corner (`::after`).
  4. Navbar with a sliding underline on hover and active.
  5. Detail page: two columns on wide screens, one column on small screens.
  6. Topics shown as a numbered timeline (CSS counters).

## 2. Design tokens (`variables.css`)

| Token | Suggested value | Purpose |
|---|---|---|
| `--bg` | `#0f172a` | page background |
| `--surface` | `#1e293b` | navbar, cards |
| `--border` | `#334155` | borders, dividers |
| `--text` | `#e2e8f0` | main text |
| `--muted` | `#94a3b8` | secondary text |
| `--accent` | `#38bdf8` | active nav, links, focus |
| `--beginner` | `#34d399` | Beginner level colour |
| `--intermediate` | `#a78bfa` | Intermediate level colour |
| `--radius` | `12px` | rounded corners |
| `--shadow` | `0 8px 24px rgba(0,0,0,.35)` | hover elevation |

Values are suggestions. Change them freely, since the point is that you change them in one place only.

## 3. Class naming (BEM)

`block__element--modifier`. Keep selectors flat (one class) so specificity stays low. No IDs, no `!important`.

| Area | Classes |
|---|---|
| Navbar | `navbar`, `navbar__logo`, `navbar__links`, `navbar__link` (`.active` is added by `NavLink`) |
| Hero | `hero`, `hero__eyebrow`, `hero__title`, `hero__subtitle` |
| Section | `section`, `section__header`, `section__title`, `section__count` |
| Grid and card | `grid`, `card`, `card__top`, `card__title`, `card__meta`, `card__arrow` |
| Badge | `badge`, `badge--beginner`, `badge--intermediate` |
| Detail | `detail`, `detail__eyebrow`, `detail__title`, `detail__duration`, `detail__desc`, `back-btn` |
| Topics | `topics__title`, `topics__list`, `topics__item` |
| Not found / empty | `not-found`, `not-found__code`, `not-found__title`, `not-found__text`, `not-found__btn`, `empty` |

JSX must use these class names before styling. Note `badge--beginner` with a double dash. The current JSX uses a single dash and needs updating.

## 4. Concepts by feature

| Feature | CSS concepts practised |
|---|---|
| Theme variables | `:root`, `var()`, fallback values, why tokens beat hard-coded values |
| Level colour | Scoped custom properties: `.badge--beginner { --level: var(--beginner); }`, inheritance |
| Card layout | Flexbox column, `gap`, `margin-top: auto` |
| Course grid | Grid, `repeat(auto-fill, minmax(240px, 1fr))` |
| Card hover | `transition`, `transform`, `box-shadow`, `:hover` |
| Nav underline slide | `::after`, `position: relative/absolute`, `transform: scaleX()`, `transform-origin` |
| Sticky navbar | `position: sticky; top: 0; z-index` |
| Detail two-column | Grid with `grid-template-columns: 2fr 1fr`, `@media` collapse |
| Topic timeline | `counter-reset`, `counter-increment`, `::before { content: counter() }`, `border-left` |
| Page widths | `max-width` + `margin: 0 auto`, `clamp()` for fluid type |
| Back button | `inline-flex`, `cursor`, `font-family: inherit` |
| 404 / empty | flex centring, hierarchy, `min-height` |
| Accessibility | `:focus-visible`, colour contrast, `prefers-reduced-motion` |

## 5. Build stages

Each stage ends with something visible. Stop after any stage if you need to.

| # | Stage | Concepts | Done when |
|---|---|---|---|
| 0 | Align JSX with class names | BEM | Classes in section 3 exist in JSX |
| 1 | Foundation: fonts, reset, variables, body | `box-sizing`, `:root`, `var()` | Page is dark with the chosen font |
| 2 | Navbar | flexbox, `:hover`, compound selector `.navbar__link.active` | Active link is highlighted |
| 3 | Hero and section wrappers | `max-width`, `margin: auto`, `rem`, typography | Content is centred with a clear hierarchy |
| 4 | Grid and cards | grid, box model | Cards in a responsive grid |
| 5 | Level colours | scoped custom properties | Beginner and Intermediate differ on card and badge |
| 6 | Hover polish | `transition`, `transform` | Cards lift on hover |
| 7 | Detail page | typography, `line-height`, readable width | Detail page reads well |
| 8 | Topic timeline | CSS counters, `::before` | Numbered vertical timeline |
| 9 | Nav slide underline and sticky navbar | positioning, `transform` | Underline animates, navbar stays on top |
| 10 | Responsive | `@media`, `clamp()` | Detail collapses to one column on mobile |
| 11 | 404 and empty states | centring | Both states look finished |
| 12 | Accessibility pass | `:focus-visible`, `prefers-reduced-motion` | Keyboard focus visible, motion respects the setting |

## 6. Working method

1. Change one thing at a time.
2. Experiment in browser DevTools (F12) first, then copy what works.
3. Use the box-model view in Inspect to understand spacing.
4. Learn the main ideas, not every property: box model, flexbox, grid, positioning, variables, media queries.
5. Commit to git after each stage.
6. Workflow per stage: read the concept, write the CSS yourself, ask for a review.

## 7. Optional challenges

- **Light/dark toggle:** `data-theme` attribute on `<html>` with two variable sets.
- **Duration bar:** a thin bar per card using `style={{ "--weeks": 4 }}` and `width: calc(var(--weeks) * 10%)`.

## 8. Progress log

| Stage | Status | Notes |
|---|---|---|
| 0 | ☐ | |
| 1 | ☐ | |
| 2 | ☐ | |
| 3 | ☐ | |
| 4 | ☐ | |
| 5 | ☐ | |
| 6 | ☐ | |
| 7 | ☐ | |
| 8 | ☐ | |
| 9 | ☐ | |
| 10 | ☐ | |
| 11 | ☐ | |
| 12 | ☐ | |

## 9. Housekeeping

- Rename `src/styles/.variables.css` to `variables.css` (a leading dot hides the file).
- In `style.css`, `@import "./variables.css";` must be the first rule.
- Add the font `<link>` tags (for example Inter) to `index.html`.
- Optional: add an "All Courses" `NavLink to="/" end` so `/` doesn't match every route.
