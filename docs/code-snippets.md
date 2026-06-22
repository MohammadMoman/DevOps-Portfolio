# Code Snippets

This page collects the most important snippets from the project and explains
what each one is doing.

## 1. Build metadata source

```javascript
const version = process.env.APP_VERSION || 'Not set';
const environment = process.env.APP_ENVIRONMENT || 'Development';
const buildDate = process.env.APP_BUILD_DATE || 'Not set';
const commitHash = process.env.APP_COMMIT_SHA || 'local';
```

This is the heart of the metadata feature. Instead of hardcoding version
values, the app reads them from the environment so CI/CD can inject the current
build information.

## 2. Metadata rendered in the UI

```javascript
window.createBuildInfo = function createBuildInfo() {
  const buildInfo = window.getBuildInfo();

  return `
    <aside class="build-info" aria-label="Build information">
      <span>Version: ${buildInfo.version}</span>
      <span>Environment: ${buildInfo.environment}</span>
      <span>Built: ${buildInfo.buildDate}</span>
      <span>Commit: ${buildInfo.commitHash}</span>
    </aside>
  `;
};
```

This is intentionally small and subtle. It shows the values without taking over
the page design.

## 3. CI build step

```yaml
- name: Build Docker image
  run: docker build -t portfolio:${{ github.sha }} .
```

This proves the repository can create a container image on every commit, which
is a useful artifact for later deployment.

## 4. Deployment handoff

```yaml
- name: Update Azure App Service container
  uses: azure/CLI@v2
```

This is the point where the workflow would tell Azure App Service to use the
new image. The repo includes it as a demonstration of the CD path.

## 5. Local Docker startup

```yaml
services:
  portfolio:
    build:
      context: .
    ports:
      - "3000:3000"
```

This is the simplest possible compose file for a static portfolio. It keeps the
project easy to run locally with `docker compose up`.
