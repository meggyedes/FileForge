# FileForge

A modern responsive file-conversion website built with **Next.js App Router, TypeScript, Tailwind**, and a separately deployable **Node / Express** conversion backend.

## Features

- Responsive tool directory with dark/light mode.
- Browser-only Corrupted File Generator supporting PDF, DOCX, XLSX, PPTX, JPG, PNG, ZIP, MP3, MP4 and TXT, six corruption modes, up to 100 MB.
- Nine conversion tools: Word → PDF, PDF → Word (text-first, formatting may differ), Excel → PDF, PowerPoint → PDF, JPG → PNG, PNG → PDF, PDF → JPG, merge PDF, compress image.
- Upload validation with signature checks, temporary processing, Cloudflare Turnstile, per-IP rate limit, no persistent file storage.

## GitHub Pages

The site is configured for **https://meggyedes.github.io/FileForge/**.

1. In the repository, go to **Settings → Pages**.
2. Set **Build and deployment → Source: GitHub Actions**.
3. Trigger the **Deploy FileForge to GitHub Pages** workflow (or push to main).
4. After a successful action, open the URL above.

GitHub Pages hosts **only the static frontend**. The Corrupted File Generator needs no backend and runs entirely in the browser. Converter pages require a separately hosted API.

## Local frontend

```sh
cd web
npm install
npm run dev
```

Visit http://localhost:3000. Generator tests: `npm test`.

## Backend (Docker)

Requires Docker with Compose and a trusted HTTPS reverse proxy or hosting service.

1. Configure environment variables in a local, uncommitted `.env`: `FRONTEND_ORIGIN=https://meggyedes.github.io`, `TURNSTILE_SECRET_KEY`, and a 32+ character random `INTERNAL_WORKER_TOKEN`.
2. Run `docker compose up --build -d`.
3. Terminate HTTPS on a reverse proxy and forward requests to local gateway port 8080.
4. In GitHub repo Settings → Secrets and variables → Actions → Variables, set `API_URL=https://your-api-domain.example` and `TURNSTILE_SITE_KEY=your-turnstile-site-key` (Cloudflare Turnstile site must be configured for the GitHub Pages origin). Then rerun the Pages workflow.

Gateway checks file signatures, size and Turnstile before sending uploads to a non-public worker. Jobs are isolated in random temporary directories, removed after processing, and stale directories are pruned after 30 minutes. The worker's Docker network has no outbound connectivity by default, and the Docker config applies non-root users, read-only file systems, memory/CPU restrictions and dropped capabilities.

**PDF → Word note:** This implementation reconstructs an editable DOCX from extracted PDF text; it will not preserve complex layouts.

**Testing:** Frontend unit tests are included, backend validation tests are included. Full end-to-end conversion coverage, compatibility with all real-world files, production security review, and Lighthouse 90+ certification remain pending.

## Security checklist

- [ ] Configure and test real Cloudflare Turnstile keys
- [ ] Host gateway behind HTTPS
- [ ] Configure secure, secret worker token
- [ ] Confirm frontend CORS origin matches deployment
- [ ] Validate converter output against adversarial documents
- [ ] Verify load, timeout, rate limit, memory and CPU caps
- [ ] Set up error monitoring without storing file contents
- [ ] Test data retention and tmp cleanup
- [ ] Monitor dependency vulnerabilities
- [ ] Verify privacy and terms against actual hosting provider practices

For testing software, QA, and demos only.
