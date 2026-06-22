# CI/CD

The workflow in `.github/workflows/ci.yml` is intentionally simple.

## Pipeline Steps

1. Check out the code
2. Install dependencies
3. Run lint checks
4. Run tests
5. Build the production metadata file
6. Build the Docker image

## Why This Exists

The main goal is to prove that every push can produce a deployable artifact.
That makes the project useful in interviews and easy to extend later.

## Expected Result

- Broken code fails the workflow
- Healthy code produces a Docker image
- The image can be promoted to Azure later
