# Publish this AMAX landing page on Replit

This branch is deliberately framework-free. It has no dependencies, build process, database, secrets, or environment variables. You do not need Replit Agent to import, preview, or publish it.

## 1. Import the repository

Paste this repository URL into Replit's **GitHub Repo URL** field:

```text
https://github.com/WEB3X100/amax-vacations-vietnam-2027
```

Replit imports a repository's default branch first. This landing page intentionally lives on a separate branch, so open **Shell** after the import and run:

```sh
git fetch origin
git switch codex/amax-vacations-collection-landing
```

This is a normal Git operation and does not use Replit Agent tokens.

## 2. Preview

Press **Run**. The checked-in `.replit` file starts Python's dependency-free static server on port `3000`. Replit should open the site in Preview automatically.

If the Run command was replaced during import, set the Workflow command to:

```sh
python3 -m http.server 3000 --bind 0.0.0.0
```

## 3. Publish

1. Select **Publish**.
2. Choose **Static**.
3. Set the public directory to `/` (the repository root).
4. Leave the build command empty.
5. Choose the public app name/subdomain and publish.

The site does not require an Autoscale or Reserved VM deployment. It does not require Secrets.

## 4. Share and collect feedback

Share the resulting `https://<your-name>.replit.app` URL with the team. Replit's published URL is stable; the `replit.dev` preview URL is temporary.

## Updating the Replit copy later

After new commits are pushed to this branch, open Shell and run:

```sh
git pull --ff-only origin codex/amax-vacations-collection-landing
```

Preview the changes, then publish again to update the public snapshot.
