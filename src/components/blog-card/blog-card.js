window.createBlogCard = function createBlogCard(post) {
  return `
    <article class="card blog-card">
      <div class="card-stripe"></div>
      <p class="meta-label">${post.date}</p>
      <h3 class="card-heading">${post.title}</h3>
      <p class="card-text">${post.summary}</p>
      <ul class="tech-list" aria-label="Topics">
        ${post.tags.map((tag) => `<li class="badge">${tag}</li>`).join('')}
      </ul>
    </article>
  `;
};
