import md5 from 'md5';

/**
 * Builds a {@link https://ui-avatars.com | UIAvatar } url
 * @param {string | import('./types.public').UIAvatarOptions} input - name for UIAvatar or object of options
 * @returns {string} the constructed UIAvatar URL
 */
export function uiAvatar(input) {
	let output = '';
	if (typeof input === 'string') {
		output = `https://ui-avatars.com/api/?name=${input}`;
	} else {
		const { name, ...options } = input;
		output = `https://ui-avatars.com/api/?name=${name}`;

		for (const [parameter, value] of Object.entries(options)) {
			output += `&${parameter}=${value.toString()}`;
		}
	}

	return output;
}

/**
 * Builds a {@link https://en.gravatar.com/site/implement/images | Gravatar } url
 * @param {string | import('./types.public').GravatarOptions} input - email for Gravatar or object of options
 * @returns {string} the constructed Gravatar URL
 */
export function gravatar(input) {
	let email = '';
	/** @type {Omit<import('./types.public').GravatarOptions, 'email'>} */
	let options = {};
	if (typeof input === 'string') {
		email = input;
	} else {
		({ email, ...options } = input);
	}
	const hash = md5(email.trim().toLowerCase());

	let output = `https://www.gravatar.com/avatar/${hash}?`;
	for (const [parameter, value] of Object.entries(options)) {
		output += `&${parameter.charAt(0)}=${value.toString()}`;
	}

	return output;
}

