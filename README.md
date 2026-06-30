# Template Vercel

Next.js consulting site for Sam Wilk with an About page, project links, and a Resend-backed contact form.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in the values:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=samwilk1898@gmail.com
CONTACT_FROM_EMAIL="Sam Wilk Consulting <onboarding@resend.dev>"
```

3. Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Contact form

The form lives in `src/app/_components/ContactForm` and submits through the server action in `src/app/_serverless/contactActions.js`.
