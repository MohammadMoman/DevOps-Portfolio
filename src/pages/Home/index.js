window.createHomePage = function createHomePage() {
  return `
    <div class="site-shell">
      ${window.createNavbar()}
      <main>
        <section class="hero" id="home">
          <div class="char-wrap">
            <div class="floor-glow"></div>
            <img src="./Moman.png" alt="Moman fighter character" onerror="this.style.display='none'" />
          </div>
          <div class="hero-content">
            <p class="hero-kicker">Hi, I'm Moman.</p>
            <h1 class="name">MOHAMMAD MOMAN</h1>
            <div class="divider">
              <div class="div-line"></div>
              <div class="div-dot"></div>
              <div class="div-line"></div>
            </div>
            <p class="hero-intro">
              Aspiring DevOps Engineer building a portfolio around cloud fundamentals,
              infrastructure-as-code, containers, and deployment pipelines.
            </p>
            <div class="actions">
              <a class="button" href="#projects">View Projects</a>
              <a class="button secondary" href="https://github.com/MohammadMoman" target="_blank" rel="noreferrer">GitHub</a>
              <a class="button secondary" href="https://www.linkedin.com/in/moman-mohammad-25748540b/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
        ${window.createProjectsSection()}
        ${window.createBlogSection()}
      </main>
      <footer class="site-footer">
        <p>Built by Moman for DevOps practice, portfolio growth, and future CI/CD demos.</p>
        ${window.createBuildInfo()}
      </footer>
    </div>
  `;
};
