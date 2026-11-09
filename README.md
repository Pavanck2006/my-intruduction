# MyPortfolio

A frontend-only personal portfolio built with React, Vite, custom CSS, Framer Motion, and Lucide icons.

## Project structure

```text
my-portfolio/
  frontend/   React + Vite application
  backend/    Reserved for future backend work
  .gitignore
  README.md
```

## Run locally

Run all frontend commands from the `frontend` folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build (also from `frontend`):

```bash
npm run build
npm run preview
```

Run the project linter with `npm run lint`.

## Customize

- Replace “Your Name” and the example contact email (`hello@example.com`) with your own details.
- Add your real profile photo as `public/profile.jpg` and your PDF as `public/resume.pdf`. The photo area shows an explicit asset reminder until the image is present; the resume link downloads the PDF once it is added.
- The project previews and social/source links are intentionally placeholders; connect them to your real projects and profile URLs.
- The contact form uses browser validation and displays a local demo confirmation. It does not send or store submissions.
- No personal photograph or resume is generated or included.

This project has no backend, database, authentication, or external API integration.
