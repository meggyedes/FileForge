# FileForge

A GitHub Pages-ready Next.js frontend with a browser-only corrupted-file generator and separately deployable conversion API.

The project source has been prepared. GitHub Pages serves static frontend assets; LibreOffice conversions require a separate Docker service.

## Deployment

Enable **Settings → Pages → Build and deployment → GitHub Actions**. The frontend is configured for a `/FileForge` base path.

## Important

The browser-side generator is for testing software, QA and demos only. The Docker conversion backend is not hosted by GitHub Pages.
