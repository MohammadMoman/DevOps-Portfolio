import { execFileSync } from 'node:child_process';

const files = [
  'scripts/start.js',
  'scripts/write-build-info.js',
  'scripts/server.js',
  'scripts/lint.js',
  'scripts/test.js',
  'src/main.js',
  'src/status.js',
  'src/utils/build-info.js',
  'src/components/ui/build-info.js',
  'src/pages/Status/index.js',
];

for (const file of files) {
  execFileSync(process.execPath, ['--check', file], { stdio: 'inherit' });
}

console.log('Lint checks passed.');
