import { readFileSync } from 'node:fs';

const requiredFiles = ['index.html', 'status.html', 'architecture.html', 'src/config/build-info.js'];

for (const file of requiredFiles) {
  readFileSync(file, 'utf8');
}

const buildInfo = readFileSync('src/config/build-info.js', 'utf8');

if (!buildInfo.includes('window.__BUILD_INFO__')) {
  throw new Error('Build info file was not generated correctly.');
}

console.log('Basic checks passed.');
