# Architecture

```text
GitHub push
  ↓
GitHub Actions CI
  ↓
Build metadata generation
  ↓
Docker image build
  ↓
CI artifact ready for review
```

## Application Layout

- `index.html` renders the main portfolio
- `status.html` renders the health/status page
- `src/config/build-info.js` is generated from environment variables
- `src/components/ui/build-info.js` shows the metadata on the site
- `src/pages/Status/index.js` shows the status page values
- `scripts/server.js` serves the static files in production

## Goal

This repository is still a static website. The DevOps story comes from the
build and validation process around it. The release workflow is documented for
demonstration even if the Azure resources are not available.
