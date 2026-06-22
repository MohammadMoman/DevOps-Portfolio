const fallbackBuildInfo = {
  version: 'Local build',
  buildDate: new Date().toISOString(),
  commitHash: 'local',
  environment: 'Development',
};

window.getBuildInfo = function getBuildInfo() {
  const injected = window.__BUILD_INFO__ || {};

  return {
    version: injected.version || fallbackBuildInfo.version,
    buildDate: injected.buildDate || fallbackBuildInfo.buildDate,
    commitHash: injected.commitHash || fallbackBuildInfo.commitHash,
    environment: injected.environment || fallbackBuildInfo.environment,
  };
};

window.formatBuildDate = function formatBuildDate(value) {
  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(parsed);
};
