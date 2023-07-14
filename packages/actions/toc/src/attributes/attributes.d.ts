import type { TocChangeEventDetail, TocInitEventDetail } from '../events/events.d.ts';
import type { TocObserveConfig } from '../parameter/parameter.d.ts';

/**
 * Data attributes to override `toc` behavior per matching element
 * @public
 */
export interface TocDataAttributes {
  /** whether to ignore this element when searching for matching elements */
  'data-toc-ignore'?: boolean;
  /**
   * the `id` to use for this element in `toc` context. If not provided, this
   * will be the element `id`, or generated by `toc`
   * if element does not have an `id` either.
   */
  'data-toc-id'?: string;
  /**
   * override the `strategy` for this element to use in creating
   * `IntersectionObserver` This only has effect if the `observe`
   * option is enabled in {@link TocParameters}
   */
  'data-toc-strategy'?: TocObserveConfig['strategy'];
  /**
   * override the `threshold` for this element to use in creating
   * `IntersectionObserver` This only has effect if the `observe`
   * option is enabled in {@link TocParameters}
   */
  'data-toc-threshold'?: number;
}

/**
 * ambient typing for `toc` event handlers
 * @public
 */
export interface TocEventAttributes {
  'on:tocinit'?: (event: CustomEvent<TocInitEventDetail>) => void;
  'on:tocchange'?: (event: CustomEvent<TocChangeEventDetail>) => void;
}
