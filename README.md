# AMAX Vacations — Landing Page Versions

The `main` branch preserves the original Vietnam 2027 cinematic landing page.

The `codex/amax-vacations-collection-landing` branch contains a separate static AMAX Vacations destination-catalogue concept: six priority destinations, destination filtering, dedicated detail pages and WhatsApp conversion. It intentionally uses no live inventory, checkout engine or build tooling.

`index.html` is the entry point. The six shareable destination pages live in `destinations/`. No build step is required.

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/` after starting the server.

## Replit

This branch includes a dependency-free `.replit` run command and a step-by-step [Replit import and Static Publishing guide](REPLIT_SETUP.md). No Replit Agent setup, package installation, database, secrets, or build command is required.
