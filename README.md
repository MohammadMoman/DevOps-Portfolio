# Moman | DevOps Portfolio

A static developer portfolio for Mohammad Moman. The site keeps the original
blue, sci-fi inspired visual identity while adding a cleaner project structure,
DevOps-focused content, build metadata, Docker support, and a simple status
page.

## Pages

- `index.html` - Home, projects, learning log, and contact sections
- `status.html` - Static health page for CI, build, and release demos
- `aboutme.html` - Existing personal about page retained from the original site

## Structure

- `src/components/` - Small reusable UI and layout renderers
- `src/data/` - Static project and learning entries
- `src/pages/` - Page and section composition
- `src/styles/` - Shared visual system
- `src/utils/` - Build metadata helper
- `scripts/` - CI-friendly helper scripts
- `docs/architecture.md` - Simple architecture diagram
- `docs/code-snippets.md` - Explained code snippets from the project
- `docs/deployment.md` - Azure release notes and workflow overview

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

## CI Flow

```text
GitHub
  ↓
GitHub Actions
  ↓
Docker Build
  ↓
Build verification artifact
  ↓
Ready for review
```

## CD Flow

```text
GitHub push to main
  ↓
GitHub Actions deploy workflow
  ↓
Build metadata generation
  ↓
Docker image build and push
  ↓
Azure App Service update
  ↓
Live website
```

The CD workflow is documented in [`.github/workflows/deploy.yml`](/c:/Users/moman.mohammad/Desktop/Demi/.github/workflows/deploy.yml).
It is included for demonstration purposes. If Azure credentials and resources
are not available, the workflow still shows what the deployment path would look
like.

## What I Learned

This project started as a portfolio and became a DevOps demo. The main things I
learned were:

- how to keep the website simple while still making the delivery process more
  professional
- how to inject build metadata from environment variables instead of hardcoding
  values
- how to wire a static site into Docker without turning it into a large app
- how to make GitHub Actions readable for someone who is still learning CI/CD
- how to document the deployment path even when I do not have all the Azure
  resources available
- how to explain the implementation with code snippets instead of relying on
  screenshots
- how to keep the README useful as both project documentation and interview
  preparation

## Implementation Notes

This section explains the most important parts of the project in plain language.
The goal is not to show off clever code. The goal is to make the deployment
story easy to understand.

### Build metadata generation

```javascript
const version = process.env.APP_VERSION || 'Not set';
const environment = process.env.APP_ENVIRONMENT || 'Development';
const buildDate = process.env.APP_BUILD_DATE || 'Not set';
const commitHash = process.env.APP_COMMIT_SHA || 'local';
```

This is the core idea behind the build info files. The site reads values from
the environment instead of hardcoding them. That makes the same code work for
local development, CI, and a future deployment environment.

### Why the metadata matters

The portfolio is still a simple static website, but the metadata makes it feel
closer to a real release:

- `version` tells you what build is running
- `environment` tells you whether it is local, development, or production
- `buildDate` tells you when the artifact was generated
- `commitHash` links the site back to the exact Git commit

That combination is useful for debugging and for interview demos because it
shows the deployment is traceable.

### CI Docker build

```yaml
- name: Build Docker image
  run: docker build -t portfolio:${{ github.sha }} .
```

This proves the repository can generate a container image on every commit. The
image itself is not heavily optimized because the project is intentionally
simple and readable.

### Why Docker is included

Docker is here for two reasons:

- it shows how a static app can still participate in a real deployment flow
- it gives CI something concrete to build, test, and eventually push

Even though the site is static, packaging it in Docker is a useful DevOps
exercise.

### CD handoff

```yaml
- name: Update Azure App Service container
  uses: azure/CLI@v2
```

This is the step that would switch the live site to the new image if the Azure
resources and secrets were available. The repository keeps this workflow in
place so the intended release path is documented, even if the real Azure
subscription is not available yet.

### Why keep the CD workflow if Azure is unavailable?

It helps the project in three ways:

- it shows what the release process would be
- it gives interviewers a realistic deployment example to discuss
- it makes the repository feel like a project that is ready to grow

### Local Docker startup

```yaml
services:
  portfolio:
    build:
      context: .
    ports:
      - "3000:3000"
```

This keeps local development easy. There is no extra orchestration layer and no
unnecessary abstraction.

## Code Snippets

See [docs/code-snippets.md](/c:/Users/moman.mohammad/Desktop/Demi/docs/code-snippets.md)
for the annotated snippets that explain how the project works.
