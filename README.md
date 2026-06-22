# Moman | DevOps Portfolio

A static developer portfolio for Mohammad Moman. The site keeps the original
blue, sci-fi inspired visual identity while adding a cleaner project structure,
DevOps-focused content, build metadata, Docker support, and a simple status
page.

## Pages

- `index.html` - Home, projects, learning log, and contact sections
- `status.html` - Static health page for CI/CD and deployment demos
- `aboutme.html` - Existing personal about page retained from the original site

## Structure

- `src/components/` - Small reusable UI and layout renderers
- `src/data/` - Static project and learning entries
- `src/pages/` - Page and section composition
- `src/styles/` - Shared visual system
- `src/utils/` - Build metadata helper
- `scripts/` - CI-friendly helper scripts
- `docs/architecture.md` - Simple architecture diagram

## Run Locally

1. Copy `.env.example` to `.env`
2. Fill in the values you want to show in the UI
3. Run `docker compose up`

The site will be available at `http://localhost:3000`.

## Build Information

The site reads build values from `window.__BUILD_INFO__`, defined in
`src/config/build-info.js`.

Expected values:

- `version`
- `buildDate`
- `commitHash`
- `environment`

For CI/CD demos, the metadata file is generated from environment variables.
When running the build script directly, set:

```powershell
$env:APP_VERSION = "v1.0.0"
$env:APP_BUILD_DATE = "2026-06-22T00:00:00Z"
$env:APP_COMMIT_SHA = "a1b2c3d"
$env:APP_ENVIRONMENT = "Production"
node .\scripts\write-build-info.js
```

On GitHub Actions, the workflow passes `github.sha` into `APP_COMMIT_SHA`.

## Deployment Flow

```text
GitHub
  ↓
GitHub Actions
  ↓
Docker Build
  ↓
Azure Container Registry
  ↓
Azure App Service
  ↓
Live Website
```

## CD Setup

Deployment runs from [`.github/workflows/deploy.yml`](/c:/Users/moman.mohammad/Desktop/Demi/.github/workflows/deploy.yml)
when changes land on `main`.

You will need these repository secrets in GitHub:

- `AZURE_CREDENTIALS`
- `AZURE_ACR_LOGIN_SERVER`
- `AZURE_ACR_USERNAME`
- `AZURE_ACR_PASSWORD`
- `AZURE_ACR_REPOSITORY`
- `AZURE_WEBAPP_NAME`
- `AZURE_RESOURCE_GROUP`

The workflow builds a Docker image, pushes it to Azure Container Registry, and
then tells Azure App Service to run the new image.
