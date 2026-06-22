const fallbackBuildInfo = {
  version: 'Not set',
  buildDate: 'Not set',
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
