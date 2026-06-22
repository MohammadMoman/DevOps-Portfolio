# Troubleshooting

## Docker Will Not Start

- Make sure Docker Desktop is running
- Check that port `3000` is free
- Rebuild the image with `docker compose up --build`

## Build Metadata Looks Wrong

- Check the environment variables passed into the build or container
- Confirm `APP_VERSION`, `APP_ENVIRONMENT`, `APP_BUILD_DATE`, and
  `APP_COMMIT_SHA`

## CI Fails on GitHub

- Look at the lint step first
- Then check the test step
- Finally check the Docker build step

## Local Development

Open `index.html` directly or run the project through Docker with
`docker compose up`.
