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

const architectureSvgMarkup = `
<svg width="1200" height="600" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">

  <style>
    .box {
      fill: #111827;
      stroke: #38bdf8;
      stroke-width: 2;
      rx: 12;
      ry: 12;
    }

    .title {
      fill: #ffffff;
      font-size: 18px;
      font-family: Arial, sans-serif;
      font-weight: bold;
    }

    .text {
      fill: #cbd5e1;
      font-size: 14px;
      font-family: Arial, sans-serif;
    }

    .arrow {
      stroke: #38bdf8;
      stroke-width: 2;
      marker-end: url(#arrowhead);
    }
  </style>

  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect x="50" y="200" width="200" height="100" class="box"/>
  <text x="75" y="240" class="title">GitHub Repo</text>
  <text x="75" y="265" class="text">Main Branch</text>

  <rect x="320" y="200" width="250" height="100" class="box"/>
  <text x="345" y="240" class="title">GitHub Actions</text>
  <text x="345" y="265" class="text">CI/CD Pipeline</text>

  <rect x="650" y="100" width="250" height="100" class="box"/>
  <text x="675" y="140" class="title">Azure Container Registry</text>
  <text x="675" y="165" class="text">momanportfolioacr</text>

  <rect x="650" y="300" width="250" height="100" class="box"/>
  <text x="675" y="340" class="title">Azure App Service</text>
  <text x="675" y="365" class="text">moman-portfolio-app</text>

  <rect x="950" y="200" width="200" height="100" class="box"/>
  <text x="975" y="240" class="title">Live Website</text>
  <text x="975" y="265" class="text">Portfolio App</text>

  <line x1="250" y1="250" x2="320" y2="250" class="arrow"/>
  <line x1="570" y1="230" x2="650" y2="150" class="arrow"/>
  <line x1="570" y1="270" x2="650" y2="350" class="arrow"/>
  <line x1="900" y1="150" x2="950" y2="230" class="arrow"/>
  <line x1="900" y1="350" x2="950" y2="270" class="arrow"/>

</svg>`;

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
              <span>&amp; Delivery Pipeline</span>
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
          <div class="architecture-diagram-layout">
            <div class="section-header">
              <p class="section-label">Architecture Overview</p>
              <h2 class="section-title">Release path</h2>
              <p class="section-copy">
                The pipeline starts in GitHub, moves through CI/CD in GitHub Actions, stores images in
                Azure Container Registry, and deploys to Azure App Service before reaching the live website.
              </p>
              <div class="architecture-actions">
                <button class="button" type="button" data-open-architecture-diagram>Show Diagram</button>
                <button class="button secondary" type="button" data-open-architecture-notes>Read Notes</button>
              </div>
            </div>
          </div>
          <div class="pipeline-flow" aria-label="Architecture flow">
            ${architectureStages.map((stage, index) => `
              <div class="pipeline-step">
                <article class="card pipeline-card">
                  <div class="card-stripe"></div>
                  <p class="meta-label">Stage ${index + 1}</p>
                  <h3 class="card-heading">${stage.title}</h3>
                  <p class="card-text">${stage.text}</p>
                </article>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <p class="section-label">Project Evolution</p>
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
            <p class="section-label">Release Flow</p>
            <h2 class="section-title">How a release moves</h2>
          </div>
          <div class="timeline-list timeline-stepper timeline-zigzag">
            ${deploymentSteps.map((step, index) => `
              <div class="timeline-item ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}">
                <div class="timeline-marker">${String(index + 1).padStart(2, '0')}</div>
                <div class="timeline-copy">
                  <p class="timeline-step-label">Step ${String(index + 1).padStart(2, '0')}</p>
                  <p>${step}</p>
                </div>
              </div>
              ${index < deploymentSteps.length - 1 ? '<div class="timeline-connector" aria-hidden="true">↘</div>' : ''}
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
            <div class="architecture-actions">
              <a class="button secondary" href="./status.html">Open Status Page</a>
            </div>
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
            <p class="section-label">Why I Built This</p>
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
    <div class="architecture-modal" data-architecture-modal hidden aria-hidden="true">
      <div class="architecture-modal-backdrop" data-close-architecture-diagram></div>
      <div class="architecture-modal-panel" role="dialog" aria-modal="true" aria-labelledby="architecture-modal-title" tabindex="-1">
        <div class="architecture-modal-header">
          <div>
            <p class="meta-label">Architecture Diagram</p>
            <h2 id="architecture-modal-title" class="section-title architecture-modal-title">GitHub to Live Website</h2>
          </div>
          <button class="architecture-modal-close" type="button" aria-label="Close diagram" data-close-architecture-diagram>
            ×
          </button>
        </div>
        <p class="architecture-modal-copy">
          This diagram shows the delivery path from source control to the live Azure App Service instance.
        </p>
        <div class="architecture-modal-frame">
          ${architectureSvgMarkup}
        </div>
      </div>
    </div>
    <div class="architecture-modal" data-architecture-notes-modal hidden aria-hidden="true">
      <div class="architecture-modal-backdrop" data-close-architecture-notes></div>
      <div class="architecture-modal-panel architecture-notes-panel" role="dialog" aria-modal="true" aria-labelledby="architecture-notes-title" tabindex="-1">
        <div class="architecture-modal-header">
          <div>
            <p class="meta-label">Architecture Notes</p>
            <h2 id="architecture-notes-title" class="section-title architecture-modal-title">What the diagram means</h2>
          </div>
          <button class="architecture-modal-close" type="button" aria-label="Close notes" data-close-architecture-notes>
            ×
          </button>
        </div>
        <p class="architecture-modal-copy">
          These notes explain the same delivery path in plain language, covering the build, packaging,
          registry, and deployment pieces that sit behind the portfolio.
        </p>
        <div class="architecture-notes-list">
          <article class="card architecture-note-card">
            <div class="card-stripe"></div>
            <h3 class="card-heading">Build stage</h3>
            <p class="card-text">GitHub Actions generates build metadata and packages the site into a Docker image.</p>
          </article>
          <article class="card architecture-note-card">
            <div class="card-stripe"></div>
            <h3 class="card-heading">Registry stage</h3>
            <p class="card-text">The image is pushed to Azure Container Registry with the commit SHA as the tag.</p>
          </article>
          <article class="card architecture-note-card">
            <div class="card-stripe"></div>
            <h3 class="card-heading">Deployment stage</h3>
            <p class="card-text">Azure App Service pulls the new image, restarts the container, and serves the live site.</p>
          </article>
        </div>
      </div>
    </div>
  `;
};

window.setupArchitectureModal = function setupArchitectureModal() {
  const modal = document.querySelector('[data-architecture-modal]');
  const panel = document.querySelector('.architecture-modal-panel');
  const notesModal = document.querySelector('[data-architecture-notes-modal]');
  const notesPanel = document.querySelector('.architecture-notes-panel');
  const openButtons = document.querySelectorAll('[data-open-architecture-diagram]');
  const openNotesButtons = document.querySelectorAll('[data-open-architecture-notes]');
  const closeButtons = document.querySelectorAll('[data-close-architecture-diagram]');
  const closeNotesButtons = document.querySelectorAll('[data-close-architecture-notes]');

  if (!modal || !notesModal || !openButtons.length || !openNotesButtons.length || !closeButtons.length || !closeNotesButtons.length) {
    return;
  }

  const openModal = () => {
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    panel?.focus();
  };

  const closeModal = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const openNotesModal = () => {
    notesModal.hidden = false;
    notesModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    notesPanel?.focus();
  };

  const closeNotesModal = () => {
    notesModal.hidden = true;
    notesModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  openButtons.forEach((button) => button.addEventListener('click', openModal));
  openNotesButtons.forEach((button) => button.addEventListener('click', openNotesModal));
  closeButtons.forEach((button) => button.addEventListener('click', closeModal));
  closeNotesButtons.forEach((button) => button.addEventListener('click', closeNotesModal));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!modal.hidden) {
        closeModal();
      }
      if (!notesModal.hidden) {
        closeNotesModal();
      }
    }
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  notesModal.addEventListener('click', (event) => {
    if (event.target === notesModal) {
      closeNotesModal();
    }
  });
};
