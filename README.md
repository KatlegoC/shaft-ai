# Shaft AI

Marketing site for Shaft AI. Built with Next.js (App Router), TypeScript and Tailwind CSS. Pages are statically generated. The contact form is a server action.

## Requirements

- Node.js 20.19 or later (22 LTS is a safe choice)
- npm

## Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local` when you are ready to send enquiries and set the public URL. Both can stay as the example values while you work locally.

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production build, locally:

```bash
npm run build
npm start
```

## Edit the copy

Page text lives in typed constants under `content/`. Change the strings there; you do not need to touch the layout to rewrite a sentence.

| File | What it controls |
| --- | --- |
| `content/site.ts` | Company name, address, navigation, copyright, main call to action |
| `content/home.ts` | Home page |
| `content/solutions.ts` | Solutions page, including the build vs integrate table |
| `content/how-we-work.ts` | How we work |
| `content/architecture.ts` | Architecture and security |
| `content/about.ts` | About, founder cards, local skills |
| `content/contact.ts` | Contact page and form labels |

Before launch, replace:

- Founder names, roles, biographies and LinkedIn URLs in `content/about.ts`. Duplicate a card to add a person. Leave `linkedin` as `""` until you have a URL.
- `[CASE STUDY COMING SOON]` in `content/home.ts`

Do not add client names, testimonials, statistics or certification claims that the company does not hold. The architecture page states that ISO 27001 and SOC 2 are in progress, not achieved.

## Replace the drawings

Equipment art is in `public/images/`:

- `lhd-loader.svg` — underground load-haul-dump loader
- `haul-truck.svg` — underground haul truck
- `decline-section.svg` — decline section

Swap in a photograph by replacing the file (or adding a `.jpg` / `.webp` and pointing `src`, `width`, `height` and `alt` at it in `content/home.ts`). Alt text should describe the picture.

## Contact form

The form posts to a [server action](app/contact/actions.ts). It checks name, company, role, email, phone and message.

To deliver mail, create a form at [Formspree](https://formspree.io) and set `FORMSPREE_FORM_ID` to the id in the form URL (`https://formspree.io/f/xxxxxxxx`).

- Locally, with no id set, a valid submission shows the success state and is not emailed. A note on the page says so. That note is stripped out of production builds.
- In production, with no id set, the visitor sees an error and the email address, so a message is not silently dropped.

## Deploy to Vercel

1. Push the repository to GitHub, GitLab or Bitbucket.
2. In Vercel, import the project. Framework preset: Next.js. No extra build settings.
3. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL` — the live origin, for example `https://www.example.co.za` (no trailing slash). This sets canonical URLs, Open Graph and `sitemap.xml`.
   - `FORMSPREE_FORM_ID` — the Formspree id.
4. Deploy. Vercel builds the static pages and hosts the server action for the form.

`robots.txt` and `sitemap.xml` are generated from `app/robots.ts` and `app/sitemap.ts`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
