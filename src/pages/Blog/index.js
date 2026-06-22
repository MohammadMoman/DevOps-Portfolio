window.createBlogSection = function createBlogSection() {
  return `
    <section class="section" id="learning">
      <div class="section-header">
        <p class="section-label">Learning Log</p>
        <h2 class="section-title">Short technical write-ups</h2>
        <p class="section-copy">
          Lightweight notes for the concepts I am practising. No CMS, no drama, just static
          entries that can grow as the portfolio grows.
        </p>
      </div>
      <div class="cards-grid">
        ${window.learningPosts.map(window.createBlogCard).join('')}
      </div>
    </section>
  `;
};
