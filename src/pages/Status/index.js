window.createStatusPage = function createStatusPage() {
  const buildInfo = window.getBuildInfo();

  return `
    <div class="site-shell">
      ${window.createNavbar()}
      <main class="status-panel">
        <p class="section-label">Status Page</p>
        <h1 class="page-title">System Status</h1>
        <p class="status-badge">Healthy</p>
        <p class="form-note">This page mirrors a simple production health view.</p>
        <section class="card" aria-label="Build and environment information">
          <div class="card-stripe"></div>
          <div class="status-list">
            <div class="status-row">
              <span>Status</span>
              <strong>Healthy</strong>
            </div>
            <div class="status-row">
              <span>Version</span>
              <strong>${buildInfo.version}</strong>
            </div>
            <div class="status-row">
              <span>Built</span>
              <strong>${buildInfo.buildDate}</strong>
            </div>
            <div class="status-row">
              <span>Commit Hash</span>
              <strong>${buildInfo.commitHash}</strong>
            </div>
            <div class="status-row">
              <span>Environment</span>
              <strong>${buildInfo.environment}</strong>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
};
