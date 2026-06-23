const architectureBadges = ['Docker', 'GitHub Actions', 'Azure Container Registry', 'Azure App Service', 'CI/CD'];

const architectureStages = [
  {
    title: 'GitHub Repository',
    text: 'Source control, version history, and the trigger point for every deployment.',
  },
  {
    title: 'GitHub Actions',
    text: 'Automated build, metadata generation, Docker image creation, and deployment workflow.',
  },
  {
    title: 'Azure Container Registry',
    text: 'Private container registry used to store versioned Docker images.',
  },
  {
    title: 'Azure App Service',
    text: 'Linux-based container hosting that pulls the latest image and serves the live portfolio.',
  },
  {
    title: 'Live Website',
    text: 'Production environment displaying the latest deployed version.',
  },
];

const deploymentSteps = [
  'Developer pushes to main',
  'GitHub Actions workflow starts',
  'Build metadata generated',
  'Docker image built',
  'Image pushed to Azure Container Registry',
  'Azure App Service updated',
  'Container restarted',
  'Live website updated',
];

const metadataCards = [
  { label: 'Environment', value: 'Production' },
  { label: 'Version', value: 'v1.0.0' },
  { label: 'Commit', value: 'a1b2c3d' },
  { label: 'Build Date', value: '2026-06-23' },
];

const releaseNotes = [
  {
    title: 'Dockerised the site',
    text: 'The portfolio now runs in a container so the build is repeatable and portable.',
  },
  {
    title: 'Added GitHub Actions CI/CD',
    text: 'Pushes to main trigger automated validation, metadata generation, and image builds.',
  },
  {
    title: 'Prepared Azure deployment',
    text: 'The workflow is wired to push to ACR and update App Service with the latest image.',
  },
  {
    title: 'Built a status page',
    text: 'The project includes a visible health-style page with version and build metadata.',
  },
];

window.createArchitecturePage = function createArchitecturePage() {
  return `
    <div class="site-shell">
      ${window.createNavbar()}
      <main>
        <section class="hero architecture-hero">
          <div class="hero-content architecture-hero-content">
            <p class="hero-kicker">Engineering View</p>
            <h1 class="name architecture-title">
              <span>Architecture</span>
              <span>Delivery Pipeline</span>
            </h1>
            <div class="divider">
              <div class="div-line"></div>
              <div class="div-dot"></div>
              <div class="div-line"></div>
            </div>
            <p class="hero-intro">
              A high-level view of how this portfolio is built, packaged, and deployed using Docker,
              GitHub Actions, and Azure.
            </p>
            <div class="badge-row" aria-label="Architecture technologies">
              ${architectureBadges.map((badge) => `<span class="badge">${badge}</span>`).join('')}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">Architecture Diagram</p>
            <h2 class="section-title">Release path</h2>
            <p class="section-copy">
              The pipeline starts in GitHub, moves through CI/CD in GitHub Actions, stores images in
              Azure Container Registry, and deploys to Azure App Service before reaching the live website.
            </p>
            <div class="architecture-actions">
              <a class="button" href="./docs/architecture.svg" target="_blank" rel="noreferrer">Open SVG Diagram</a>
              <a class="button secondary" href="./docs/architecture.md" target="_blank" rel="noreferrer">Read Notes</a>
            </div>
          </div>
          <div class="pipeline-flow" aria-label="Architecture flow">
            ${architectureStages.map((stage, index) => `
              <article class="card pipeline-card">
                <div class="card-stripe"></div>
                <p class="meta-label">Stage ${index + 1}</p>
                <h3 class="card-heading">${stage.title}</h3>
                <p class="card-text">${stage.text}</p>
              </article>
              ${index < architectureStages.length - 1 ? '<div class="pipeline-arrow" aria-hidden="true">↓</div>' : ''}
            `).join('')}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">Release Notes</p>
            <h2 class="section-title">How the project evolved</h2>
            <p class="section-copy">
              A short history of the main improvements that turned this from a portfolio site into a
              DevOps demonstration project.
            </p>
          </div>
          <div class="cards-grid release-notes-grid">
            ${releaseNotes.map((note) => `
              <article class="card release-note-card">
                <div class="card-stripe"></div>
                <h3 class="card-heading">${note.title}</h3>
                <p class="card-text">${note.text}</p>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">System Components</p>
            <h2 class="section-title">What powers the site</h2>
          </div>
          <div class="cards-grid architecture-grid">
            ${architectureStages.map((stage) => `
              <article class="card">
                <div class="card-stripe"></div>
                <h3 class="card-heading">${stage.title}</h3>
                <p class="card-text">${stage.text}</p>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">Deployment Flow</p>
            <h2 class="section-title">How a release moves</h2>
          </div>
          <div class="timeline-list">
            ${deploymentSteps.map((step, index) => `
              <div class="timeline-item">
                <div class="timeline-marker">${String(index + 1).padStart(2, '0')}</div>
                <p>${step}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">Build Metadata</p>
            <h2 class="section-title">Deployment traceability</h2>
            <p class="section-copy">
              Build metadata is injected during CI/CD and gives me a simple way to trace which version is
              running, when it was built, and which commit produced it.
            </p>
          </div>
          <div class="cards-grid metadata-grid">
            ${metadataCards.map((item) => `
              <article class="card metadata-card">
                <div class="card-stripe"></div>
                <p class="meta-label">${item.label}</p>
                <h3 class="card-heading">${item.value}</h3>
              </article>
            `).join('')}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">Why I Built It</p>
            <h2 class="section-title">The learning goal</h2>
          </div>
          <article class="card architecture-statement">
            <div class="card-stripe"></div>
            <p class="card-text">
              This portfolio began as a simple website and evolved into a hands-on DevOps learning project.
              I wanted practical experience with containers, CI/CD, build metadata, and cloud deployment.
              The goal was not only to build a portfolio, but also to understand the entire path from git push
              to a live release.
            </p>
          </article>
        </section>
      </main>
    </div>
  `;
};
