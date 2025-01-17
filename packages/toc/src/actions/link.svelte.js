import { on } from 'svelte/events';

import { ATTRIBUTES } from '../constants.js';

/**
 * @param {import('../toc.svelte.js').Toc} toc
 * @returns {import('./actions').TocLinkAction}
 */
export function createTocLinkAction(toc) {
	// eslint-disable-next-line no-undef
	let activeAttributes = $derived.by(() => {
		const attributes = toc.config.observe.link.activeAttribute;
		if (typeof attributes === 'boolean') {
			if (attributes === false) return [];
			else return [ATTRIBUTES.linkActive];
		} else if (Array.isArray(attributes)) {
			return attributes;
		} else {
			return [attributes];
		}
	});

	return function(node, tocItem) {
		// initial safe keep
		const initialHref = node.href;
		const initialTextContent = node.textContent;

		/** @type {string} */
		let tocItemId;

		function handleClick() {
			if (toc.root && tocItemId) {
				toc.root.setAttribute(
					ATTRIBUTES.observeThrottled,
					toc.config.observe.link.throttleOnClick.toString(),
				);
				toc.root.setAttribute(ATTRIBUTES.observeActiveId, tocItemId);
			}
		}

		function resolveAttributes() {
			tocItemId = node.href.split('#')[1] ?? '';
			if (tocItem) {
				tocItemId = typeof tocItem === 'string' ? tocItem : tocItem.id;
				if (!initialHref) {
					node.href = `#${tocItemId}`;
				}
				if (!initialTextContent && tocItem && typeof tocItem !== 'string') {
					node.textContent = tocItem?.text;
				}
			}
			node.setAttribute(ATTRIBUTES.linkFor, tocItemId);
		}

		resolveAttributes();

		/** @type {undefined | (() => void)} */
		let off;

		// eslint-disable-next-line no-undef
		$effect(() => {
			if (toc.config.observe.link.enabled && toc.config.observe.link.throttleOnClick) {
				off = on(node, 'click', handleClick);
			}
		});

		// eslint-disable-next-line no-undef
		$effect(() => {
			if (toc.config.observe.link.enabled) {
				for (const attribute of activeAttributes) {
					node.toggleAttribute(attribute, toc.activeItem?.id === tocItemId);
				}
			}
		});

		return {
			update(newTocItem) {
				if (newTocItem) tocItem = newTocItem;
				resolveAttributes();
			},
			destroy() {
				off?.();
			},
		};
	};
}

