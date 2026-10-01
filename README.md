# konksi-guide

Pusat Panduan Konksi: a step-by-step guide site for the Konksi app, written for older and non-technical users. Built with Next.js 16 (App Router) and Tailwind CSS 4.

```bash
npm run dev     # http://localhost:3000
npm run build   # every guide page is pre-rendered (SSG)
npm run lint
```

## Editing content

All guide content lives in **`lib/guides-data.js`**. Add or change a guide there; pages, search, and the footer update automatically. Each step points at a simulated phone screen through two fields:

- `screen`: a screen key in `components/mockups/screens.jsx`
- `spot`: the id of the `<Spot>` (highlighted button) on that screen

## Structure

| Path | Purpose |
|---|---|
| `app/page.jsx` | Home: hero, search, role cards, how-to demo |
| `app/guide/[role]/page.jsx` | List of guides for one role (afiliator / pembeli) |
| `app/guide/[role]/[slug]/page.jsx` | Guide article |
| `components/ui/AppMockup.jsx` | Phone frame + pulsing spotlight; scrolls the screen so the spot is in view |
| `components/ui/MascotGuide.jsx` | Si Konk & Sisi with poses (`welcome`, `pointing`, `warning`, `success`, `shopping`, `money`, plus `discount`, `gift`, `coin`, `cheer`) or `poseForTopic()` |
| `components/mockups/screens.jsx` | Simulated konksi-app screens |
| `components/guide/*` | Step card, tips/warning callouts, read-aloud button, help card |
| `lib/speech.js` | Indonesian read-aloud (browser `speechSynthesis`) |

## Accessibility

- 18px body text, high contrast, and buttons at least 48px tall.
- "Perbesar Teks" button scales all text up to 125%. The choice is saved in the browser.
- "Dengarkan" button on every step reads the instructions aloud in Indonesian.
- Respects `prefers-reduced-motion`.
# konksi-guide
