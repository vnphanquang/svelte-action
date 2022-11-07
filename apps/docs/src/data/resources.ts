export const resources = {
  svelte: 'https://svelte.dev/',
  'svelte action': 'https://svelte.dev/docs#template-syntax-element-directives-use-action',
  'svelte-kit': 'https://kit.svelte.dev/',
  addEventListener: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener',
  github: 'https://github.com/vnphanquang/svelte-put',
} as const;

export type ResourceId = keyof typeof resources;
