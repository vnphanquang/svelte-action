## API Report File for "@svelte-put/modal"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import type { ClickOutsideParameters } from '@svelte-put/clickoutside';
import type { ComponentEvents } from 'svelte';
import type { ComponentProps } from 'svelte';
import type { ComponentType } from 'svelte';
import type { createEventDispatcher } from 'svelte';
import { DispatchOptions } from 'svelte/internal';
import type { MovableParameters } from '@svelte-put/movable';
import { SvelteComponentTyped } from 'svelte';
import type { Writable } from 'svelte/store';

// @public
export function createModalEventDispatcher<
	Events extends ModalComponentBaseEvents<ModalComponentBaseResolved<ExtendedResolved>> &
		Record<string, CustomEvent<any>>,
	ExtendedResolved extends Record<string, any> = Omit<Events['resolve']['detail'], 'trigger'>,
>(): <EventKey extends Extract<keyof Events, string>>(
	type: EventKey,
	detail?: { [key in keyof Events]: Events[key]['detail'] }[EventKey] | undefined,
	options?: DispatchOptions | undefined,
) => boolean;

// @public
export function createModalStore(): ModalStore;

// @public
export type ExtendedModalEvents<
	ExtendedResolved extends Record<string, any> = {},
	ExtendedEvents extends Record<string, CustomEvent<any>> = {},
> = {
	resolve: CustomEvent<ModalComponentBaseResolved & Partial<ExtendedResolved>>;
} & ExtendedEvents;

// @public
export type ExtendedModalProps<ExtendedProps extends Record<string, any> = {}> =
	ComponentProps<Modal> & ExtendedProps;

// Warning: (ae-forgotten-export) The symbol "ModalProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ModalEvents" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ModalSlots" needs to be exported by the entry point index.d.ts
//
// @public
export class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {}

// @public
export type ModalComponentBase = SvelteComponentTyped<
	{},
	ModalComponentBaseEvents<ModalComponentBaseResolved>,
	{}
>;

// @public
export type ModalComponentBaseEvents<
	Resolved extends ModalComponentBaseResolved = ModalComponentBaseResolved,
> = {
	resolve: CustomEvent<Resolved>;
};

// @public
export interface ModalComponentBaseProps {
	accessibility?: {
		role: 'dialog' | 'alertdialog';
		labelledBy?: string;
		describedBy?: string;
	};
	backdrop?: 'static' | boolean;
	classes?: Partial<
		Record<
			Exclude<keyof ModalComponentBaseSlots, 'default' | 'x-content'>,
			| string
			| {
					override: string;
			  }
		>
	>;
	clickoutside?: boolean | ClickOutsideParameters;
	dispatch?: ReturnType<typeof createEventDispatcher>;
	escape?: boolean;
	movable?: boolean | MovableParameters;
	topmost?: boolean;
	xBtn?: boolean;
}

// @public
export type ModalComponentBaseResolved<ExtendedResolved extends Record<string, any> = {}> = {
	trigger: ResolveTrigger;
} & ExtendedResolved;

// @public
export interface ModalComponentBaseSlots {
	'x-content': Record<string, never>;
	backdrop: {
		class: string;
		onClick: () => void;
	};
	container: {
		class: string;
	};
	default: Record<string, never>;
	x: {
		class: string;
		onClick: () => void;
		xBtn: boolean;
	};
}

// Warning: (ae-forgotten-export) The symbol "ModalPortalProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ModalPortalEvents" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "ModalPortalSlots" needs to be exported by the entry point index.d.ts
//
// @public
export class ModalPortal extends SvelteComponentTyped<
	ModalPortalProps,
	ModalPortalEvents,
	ModalPortalSlots
> {}

// @public
export type ModalPushInput<Component extends ModalComponentBase> =
	| ComponentType<Component>
	| {
			id?: string;
			component: ComponentType<Component>;
			props?: ComponentProps<Component>;
	  };

// @public
export interface ModalPushOutput<
	Component extends ModalComponentBase,
	Resolved extends ModalComponentBaseResolved = ModalResolved<Component>,
> {
	component: ComponentType<Component>;
	id: string;
	props: ComponentProps<Component>;
	resolve: () => Promise<Resolved>;
	resolved: boolean;
}

// @public
export type ModalResolveCallback<Component extends ModalComponentBase = ModalComponentBase> = (
	resolved: ModalResolved<Component>,
) => void;

// @public
export type ModalResolved<Component extends ModalComponentBase> =
	ComponentEvents<Component>['resolve']['detail'];

// @public (undocumented)
export interface ModalStore {
	onPop: ModalStoreOnPop;
	pop: ModalStorePop;
	push: ModalStorePush;
	// (undocumented)
	subscribe: ModalStoreSubscribe;
}

// @public
export type ModalStoreOnPop = <Component extends ModalComponentBase = ModalComponentBase>(
	modalId: string,
	callback: ModalResolveCallback<Component>,
) => () => void;

// @public
export type ModalStorePop = <
	Pushed extends ModalPushOutput<Component, Resolved>,
	Component extends ModalComponentBase,
	Resolved extends ModalResolved<Component>,
>(
	pushed?: Pushed,
	resolved?: Resolved,
) => Pushed | undefined;

// @public
export type ModalStorePush = <Component extends ModalComponentBase>(
	input: ModalPushInput<Component>,
) => ModalPushOutput<Component>;

// @public (undocumented)
export type ModalStoreSubscribe = Writable<ModalStoreValue>['subscribe'];

// @public (undocumented)
export type ModalStoreValue = ModalPushOutput<ModalComponentBase, ModalComponentBaseResolved>[];

// @public
export type ResolveTrigger = 'backdrop' | 'x' | 'escape' | 'clickoutside' | 'pop' | 'custom';
```