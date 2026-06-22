import { writeFileSync } from 'node:fs';

const version = process.env.APP_VERSION || 'Not set';
const environment = process.env.APP_ENVIRONMENT || 'Development';
const buildDate = process.env.APP_BUILD_DATE || 'Not set';
const commitHash = process.env.APP_COMMIT_SHA || 'local';

const content = `window.__BUILD_INFO__ = {
  version: '${escapeValue(version)}',
  buildDate: '${escapeValue(buildDate)}',
  commitHash: '${escapeValue(commitHash)}',
  environment: '${escapeValue(environment)}',
};
`;

writeFileSync(new URL('../src/config/build-info.js', import.meta.url), content);

function escapeValue(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}
