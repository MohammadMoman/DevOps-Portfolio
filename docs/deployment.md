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
- Use `.github/workflows/deploy.yml` to build, push, and deploy on `main`

## Placeholder Secrets

- `AZURE_CREDENTIALS`
- `AZURE_ACR_LOGIN_SERVER`
- `AZURE_ACR_USERNAME`
- `AZURE_ACR_PASSWORD`
- `AZURE_ACR_REPOSITORY`
- `AZURE_WEBAPP_NAME`
- `AZURE_RESOURCE_GROUP`
- `APP_VERSION`
- `APP_ENVIRONMENT`
- `APP_BUILD_DATE`
- `APP_COMMIT_SHA`

## Notes

Deployment is automated for `main` through GitHub Actions, but the Azure
resources still need to be created and connected with secrets.
