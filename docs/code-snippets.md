# Code Snippets

This page collects the most important snippets from the project and explains
what each one is doing.

## 1. Build metadata source

```javascript
const version = process.env.APP_VERSION || 'Local build';
const environment = process.env.APP_ENVIRONMENT || 'Development';
const buildDate = process.env.APP_BUILD_DATE || 'Local development';
const commitHash = process.env.APP_COMMIT_SHA || 'local';
```

This is the heart of the metadata feature. Instead of hardcoding version
values, the app reads them from the environment so CI/CD can inject the current
build information.

That choice matters because it keeps the application portable:

- local runs can use fallback values
- GitHub Actions can inject real commit and build data
- a future deployment platform can override the same values without changing
  the code

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

It also keeps the main portfolio focused on content while still making the
build information visible.

## 3. CI build step

```yaml
- name: Build Docker image
  run: docker build -t portfolio:${{ github.sha }} .
```

This proves the repository can create a container image on every commit, which
is a useful artifact for later deployment.

It also means I can point to a real build artifact when explaining the project
instead of only talking about theory.

## 4. Deployment handoff

```yaml
- name: Update Azure App Service container
  uses: azure/CLI@v2
```

This is the point where the workflow would tell Azure App Service to use the
new image. The repo includes it as a demonstration of the CD path.

Even if Azure is not connected, the workflow still communicates the intended
production flow clearly.

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

## 6. Build info write script

```javascript
const content = `window.__BUILD_INFO__ = {
  version: '${escapeValue(version)}',
  buildDate: '${escapeValue(buildDate)}',
  commitHash: '${escapeValue(commitHash)}',
  environment: '${escapeValue(environment)}',
};
`;
```

This tiny script generates the file that the site reads at runtime. It is a
small example of build-time automation, which is one of the main lessons from
this project.

## 7. Status page data source

```javascript
const buildInfo = window.getBuildInfo();
```

The status page uses the same metadata as the home page. That keeps the
information consistent and avoids having two different sources of truth.
