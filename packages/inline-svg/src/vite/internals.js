import fs from 'fs';
import path from 'path';

/**
 * @param {string} dir
 * @returns {string[]}
 */
function findSvgRecursively(dir) {
	/** find all svg files in provided directory */
	const files = fs
		.readdirSync(dir)
		.map((f) => path.join(dir, f))
		.filter((f) => {
			const stat = fs.statSync(f);
			if (stat.isDirectory()) return true;
			if (stat.isFile()) return f.endsWith('.svg');
			return false;
		});
	/** find all svg files in sub directories */
	const directories = files.filter((f) => fs.statSync(f).isDirectory());
	const subFiles = directories.flatMap(findSvgRecursively);
	return [...files, ...subFiles];
}

/**
 * @param {import('../preprocessor/internals').ResolvedSources} sources
 * @param {string} out - output path
 */
export function generateSourceTyping(sources, out) {
	try {
		const { local, dirs } = sources;
		const directories = [...local.directories, ...dirs.flatMap((d) => d.directories)];
		/** @type {Set<string>} */
		const svgs = new Set();
		for (const dir of directories) {
			const files = findSvgRecursively(dir);
			for (const file of files) {
				const svg = path.relative(dir, file).replace('.svg', '');
				svgs.add(`'${svg}'`);
			}
		}
		const nonTyped = ['`./${string}`', '`../${string}`'].join('\n\t| ');
		const typing = Array.from(svgs).join('\n\t| ');
		let source = '/** DO NOT EDIT! This file is generated by @svelte-put/inline-svg vite plugin */\n\n';
		source += `export type Source = \n\t${nonTyped}\n\t| ${typing};\n`;

		fs.writeFileSync(out, source);
	} catch (error) {
		console.error('[vite-plugin-svelte-preprocess-inline-svg]', error);
	}
}

/**
 *
 * @param {string} file
 * @param {string[]} extensions
 * @returns {boolean}
 */
export function matchFileExtension(file, extensions) {
	return extensions.some((ext) => file.endsWith(ext));
}
