import { APP_ROUTE_TREE } from '$lib/constants';

export const packages = {
  avatar: {
    id: 'avatar',
    name: '@svelte-put/avatar',
    description: 'component & utilities for building avatar',
    path: APP_ROUTE_TREE.docs.avatar.$.path(),
    replId: 'd54381946b1c4ebd8e612e4568fbbbd0',
    category: 'miscellaneous',
    status: 'stable',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/misc/avatar/CHANGELOG.md',
  },
  clickoutside: {
    id: 'clickoutside',
    name: '@svelte-put/clickoutside',
    description: 'event for clicking outside node',
    path: APP_ROUTE_TREE.docs.clickoutside.$.path(),
    replId: '9e5f9ee41c2c45aa8523993e357f6e78',
    category: 'action',
    status: 'stable',
    ready: true,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/actions/clickoutside/CHANGELOG.md',
  },
  copy: {
    id: 'copy',
    name: '@svelte-put/copy',
    description: 'action & utilities to copy text to clipboard',
    path: APP_ROUTE_TREE.docs.copy.$.path(),
    replId: undefined,
    category: 'action',
    status: 'beta',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/actions/copy/CHANGELOG.md',
  },
  intersect: {
    id: 'intersect',
    name: '@svelte-put/intersect',
    description: 'wrapper for IntersectionObserver',
    path: APP_ROUTE_TREE.docs.intersect.$.path(),
    replId: '835eacce6ac44aff95a7cb0bb5ca200d',
    category: 'action',
    status: 'stable',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/actions/intersect/CHANGELOG.md',
  },
  modal: {
    id: 'modal',
    name: '@svelte-put/modal',
    description: 'type-safe async modal builder',
    path: APP_ROUTE_TREE.docs.modal.$.path(),
    replId: '0a68001337544b8ab55995fb3d02d1f6',
    category: 'miscellaneous',
    status: 'stable',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/misc/modal/CHANGELOG.md',
  },
  movable: {
    id: 'movable',
    name: '@svelte-put/movable',
    description: 'move node on mousedown',
    path: APP_ROUTE_TREE.docs.movable.$.path(),
    replId: '88a7c1fc2e134db7b58786d5f385fc5d',
    category: 'action',
    status: 'stable',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/actions/movable/CHANGELOG.md',
  },
  'preprocess-auto-slug': {
    id: 'preprocess-auto-slug',
    name: '@svelte-put/preprocess-auto-slug',
    description: 'add id slug and anchor to node',
    path: APP_ROUTE_TREE.docs.preprocessAutoSlug.$.path(),
    replId: undefined,
    category: 'preprocessor',
    status: 'beta',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/preprocessors/preprocess-auto-slug/CHANGELOG.md',
  },
  select: {
    id: 'select',
    name: '@svelte-put/select',
    description: 'type-safe and extensible select',
    path: APP_ROUTE_TREE.docs.select.$.path(),
    replId: '4f0d701ab5ed411ebbc9a71b0955385d',
    category: 'component',
    status: 'dev',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/components/select/CHANGELOG.md',
  },
  shortcut: {
    id: 'shortcut',
    name: '@svelte-put/shortcut',
    description: 'add keyboard shortcuts to node',
    path: APP_ROUTE_TREE.docs.shortcut.$.path(),
    replId: undefined,
    category: 'action',
    status: 'stable',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/actions/shortcut/CHANGELOG.md',
  },
  toc: {
    id: 'toc',
    name: '@svelte-put/toc',
    description: 'action & component for building table of contents',
    path: APP_ROUTE_TREE.docs.toc.$.path(),
    replId: 'd9c896ac62cd41d49f80ffa249d292e6',
    category: 'action',
    status: 'flux',
    ready: false,
    changelogUrl:
      'https://github.com/vnphanquang/svelte-put/blob/main/packages/actions/toc/CHANGELOG.md',
  },
} as const;

export type PackageId = keyof typeof packages;
export type Package = typeof packages[PackageId];
export type PackageCategory = typeof packages[PackageId]['category'];

export const packagesByCategory = Object.values(packages).reduce((map, pkg) => {
  const category = pkg.category;
  if (!map[category]) map[category] = [];
  map[category].push(pkg);
  return map;
}, {} as Record<PackageCategory, Package[]>);
