window.createBlogCard = function createBlogCard(post) {
  const statusLabel = post.done ? 'Done' : 'In Progress';
  const statusClass = post.done ? 'check-item done' : 'check-item in-progress';

  return `
    <article class="card blog-card">
      <div class="card-stripe"></div>
      <p class="meta-label">${post.date}</p>
      <div class="${statusClass}">
        <span class="check-box" aria-hidden="true">${post.done ? '✓' : '—'}</span>
        <span>${statusLabel}</span>
      </div>
      <h3 class="card-heading">${post.title}</h3>
      <p class="card-text">${post.summary}</p>
    </article>
  `;
};
