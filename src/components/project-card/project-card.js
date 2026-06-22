window.createProjectCard = function createProjectCard(project) {
  const demoLink = project.demoUrl
    ? `<a class="text-link" href="${project.demoUrl}">Live Demo</a>`
    : '<span class="text-link" aria-disabled="true">Demo Soon</span>';

  return `
    <article class="card project-card">
      <div class="card-stripe"></div>
      <h3 class="card-heading">${project.title}</h3>
      <p class="card-text">${project.description}</p>
      <ul class="tech-list" aria-label="Technologies used">
        ${project.technologies.map((tech) => `<li class="badge">${tech}</li>`).join('')}
      </ul>
      <div class="card-actions">
        <a class="text-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>
        ${demoLink}
      </div>
    </article>
  `;
};
