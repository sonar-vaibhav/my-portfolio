# Base44 Dev Environment

## Project
Vite + React + TypeScript + Tailwind + shadcn/ui portfolio site (frontend only, no backend or database).

## Stack
- Vite 5 dev server on port 8080 (mapped to host 3000 in compose)
- React 18, react-router-dom, framer-motion, recharts, EmailJS for contact form
- Source bind-mounted at `/app`; `node_modules` in a named volume so host installs don't interfere

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
The container runs `npm install` then `vite --host 0.0.0.0 --port 8080` with live reload.

## Environment
- `.env` (committed) holds `VITE_EMAILJS_*` keys — these are client-side public keys, not secrets.
- `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` is passed through from the platform env so Vite accepts the preview's external hostname.

## Verification
- `curl http://localhost:3000/` returns 200 with the portfolio HTML.
- Dev server logs show `VITE v5.4.19 ready` and serves unhashed `/@vite/client` modules (live source, not a prebuilt bundle).
