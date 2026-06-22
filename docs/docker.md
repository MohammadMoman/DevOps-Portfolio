# Docker

This project uses a very small Docker setup so the site can run locally and in
CI.

## Files

- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`

## Local Run

```bash
docker compose up
```

The app is available on `http://localhost:3000`.

## Environment Variables

The container reads these values at startup:

- `APP_VERSION`
- `APP_ENVIRONMENT`
- `APP_BUILD_DATE`
- `APP_COMMIT_SHA`

If they are not set, the site still runs, but the metadata will show fallback
values.
