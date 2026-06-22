window.createBuildInfo = function createBuildInfo() {
  const buildInfo = window.getBuildInfo();

  return `
    <aside class="build-info" aria-label="Build information">
      <span>Version: ${buildInfo.version}</span>
      <span>Environment: ${buildInfo.environment}</span>
      <span>Built: ${buildInfo.buildDate}</span>
      <span>Commit: ${buildInfo.commitHash}</span>
    </aside>
  `;
};
