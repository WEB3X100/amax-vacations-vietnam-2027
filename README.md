# AMAX Vacations — Landing Page Versions

The `main` branch preserves the original Vietnam 2027 cinematic landing page.

The `codex/amax-vacations-collection-landing` branch contains a separate static AMAX Vacations package-catalogue concept: country discovery, package previews, WhatsApp conversion and a lead enquiry form. It intentionally uses no live inventory or checkout engine.

`index.html` is the entry point. No build step is required.

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/` after starting the server.
