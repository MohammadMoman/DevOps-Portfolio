window.createProjectCard = function createProjectCard(project) {
  const isPlaceholder = project.title === 'IN PROGRESS';
  const demoLink = project.demoUrl
    ? `<a class="text-link" href="${project.demoUrl}">Live Demo</a>`
    : '';
  const githubLink = project.githubUrl
    ? `<a class="text-link" href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>`
    : '';

  return `
    <article class="card project-card">
      <div class="card-stripe"></div>
      <h3 class="card-heading">${project.title}</h3>
      ${isPlaceholder ? '' : `<p class="card-text">${project.description}</p>`}
      ${isPlaceholder ? '' : `<ul class="tech-list" aria-label="Technologies used">
        ${project.technologies.map((tech) => `<li class="badge">${tech}</li>`).join('')}
      </ul>`}
      ${isPlaceholder ? '' : `<div class="card-actions">
        ${githubLink}
        ${demoLink}
      </div>`}
    </article>
  `;
};
