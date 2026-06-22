# Deployment

This project is set up to show a simple DevOps flow from GitHub to a running
website.

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

## Planned Azure Setup

- Store the Docker image in Azure Container Registry
- Deploy the image to Azure App Service
- Pass `APP_VERSION`, `APP_ENVIRONMENT`, `APP_BUILD_DATE`, and
  `APP_COMMIT_SHA` as app settings or secrets

## Placeholder Secrets

- `AZURE_CREDENTIALS`
- `AZURE_CONTAINER_REGISTRY_NAME`
- `AZURE_WEBAPP_NAME`
- `AZURE_RESOURCE_GROUP`
- `APP_VERSION`
- `APP_ENVIRONMENT`
- `APP_BUILD_DATE`
- `APP_COMMIT_SHA`

## Notes

Deployment is not automated yet. The repository is only prepared for a future
release step.
