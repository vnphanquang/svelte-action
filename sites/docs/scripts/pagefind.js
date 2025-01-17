import { rm } from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import * as pagefind from 'pagefind';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BUILD_PATH = path.resolve(__dirname, '../.svelte-kit/cloudflare');
const OUTPUT_PATH = path.resolve(__dirname, '../static/pagefind');

const { index } = await pagefind.createIndex();
await index.addDirectory({
	path: BUILD_PATH,
});

// write to static folder for development
await index.writeFiles({
	outputPath: OUTPUT_PATH,
});
// write to build directory for production
await index.writeFiles({
	outputPath: path.join(BUILD_PATH, 'pagefind'),
});

const EXCLUDE_PATHS = [
	'pagefind-highlight.js',
	'pagefind-modular-ui.css',
	'pagefind-modular-ui.js',
	'pagefind-ui.css',
	'pagefind-ui.js',
];
await Promise.allSettled(EXCLUDE_PATHS.map((f) => rm(path.join(OUTPUT_PATH, f))));
await Promise.allSettled(EXCLUDE_PATHS.map((f) => rm(path.join(path.join('pagefind'), f))));

// clean up once complete
await pagefind.close();
