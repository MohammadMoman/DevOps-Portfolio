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
        ${window.portfolioProjects.map(window.createProjectCard).join('')}
      </div>
    </section>
  `;
};
