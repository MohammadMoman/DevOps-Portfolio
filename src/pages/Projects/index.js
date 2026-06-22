window.createProjectsSection = function createProjectsSection() {
  return `
    <section class="section" id="projects">
      <div class="section-header">
        <p class="section-label">Projects</p>
        <h2 class="section-title">DevOps portfolio work</h2>
        <p class="section-copy">
          A focused set of projects that show the bridge between frontend craft, cloud fundamentals,
          infrastructure-as-code, and deployment thinking.
        </p>
      </div>
      <div class="cards-grid">
        ${window.portfolioProjects.slice(0, 1).map(window.createProjectCard).join('')}
        <article class="card project-card project-card-coming-soon">
          <div class="card-stripe"></div>
          <p class="coming-soon-badge">IN DEVELOPMENT</p>
          <p class="meta-label">More work is coming</p>
          <h3 class="card-heading">More projects soon</h3>
          <p class="card-text">
            I am still building out the rest of this portfolio.
            More DevOps, cloud, and infrastructure work will appear here as each project takes shape.
          </p>
          <p class="coming-soon-note">Next up: cloud builds, infrastructure, and deployment experiments.</p>
        </article>
      </div>
    </section>
  `;
};
