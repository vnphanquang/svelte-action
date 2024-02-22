import { ActionReturn, Action } from 'svelte/action';

/**
 * Additional attributes extended from `svelte-put/intersect`
 * @public
 *
 * @remarks
 * The ambient types for these extended attributes should be available automatically
 * whenever `svelte-put/intersect` is imported.
 *
 * ```html
 * <script lang="ts">
 *   import { intersect } from '@svelte-put/intersect';
 * </script>
 *
 * <!-- on:intersect, on:intersectonce should be typed -->
 * <div
 *   use:intersect
 *   on:intersect
 *   on:intersectonce
 * />
 * ```
 */
export interface IntersectAttributes {
	'on:intersect'?: (event: CustomEvent<IntersectDetail>) => void;
	'on:intersectonce'?: (event: CustomEvent<IntersectDetail>) => void;
}

/**
 * config behavior of `intersect`
 * @public
 *
 * @remarks
 *
 * parameters for `intersect` extends {@link https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver | IntersectionObserverInit }
 * (second parameter passed to IntersectionObserver constructor)
 */
export interface IntersectConfig extends IntersectionObserverInit {
	/** whether to activate the action. Default to `true` */
	enabled?: boolean;
}

/**
 * `detail` payload for `intersect` and `intersectonce` CustomEvent
 * @public
 */
export interface IntersectDetail {
	/** the IntersectionObserver itself */
	readonly observer: IntersectionObserver;
	/** list of IntersectionObserverEntry passed from IntersectionObserver callback */
	readonly entries: IntersectionObserverEntry[];
	/** scrolling direction */
	readonly direction: 'up' | 'down';
}

/**
 * parameter received from action input
 * @public
 */
export type IntersectParameter = IntersectConfig | undefined;

/** @public */
export type IntersectAction = Action<HTMLElement, IntersectParameter, IntersectAttributes>;

/** @public */
export type IntersectActionReturn = ActionReturn<IntersectParameter, IntersectAttributes>;
