window.createBlogSection = function createBlogSection() {
  return `
    <section class="section" id="learning">
      <div class="section-header">
        <p class="section-label">Learning Log</p>
        <h2 class="section-title">What I have learnt and done</h2>
        <p class="section-copy">
          A simple checkbox-style learning log that shows what I have already
          practised and what I am still working through.
        </p>
      </div>
      <div class="cards-grid">
        ${window.learningPosts.map(window.createBlogCard).join('')}
      </div>
    </section>
  `;
};
