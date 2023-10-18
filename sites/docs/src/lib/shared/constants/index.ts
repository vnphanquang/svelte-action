import { tBuild } from 'static-tree';

export const { node: APP_ROUTE_TREE } = tBuild('APP_ROUTE_TREE', {
  pathResolver: () => '',
  build: (builder) =>
    builder
      .addChild('docs', {
        build: (builder) =>
          builder
            .addChild('architecture')
            .addChild('guidelines')
            .addChild('contributing')
            // packages
            .addChild('avatar')
            .addChild('clickoutside')
            .addChild('copy')
            .addChild('dragscroll')
            .addChild('inlineSvg', {
              pathResolver: () => 'inline-svg',
            })
            .addChild('intersect')
            .addChild('lockscroll')
            .addChild('modal')
            .addChild('movable')
            .addChild('noti')
            .addChild('preprocessAutoSlug', {
              pathResolver: () => 'preprocess-auto-slug',
            })
            .addChild('preprocessInlineSvg', {
              pathResolver: () => 'preprocess-inline-svg',
            })
            .addChild('qr')
            .addChild('resize')
            .addChild('select')
            .addChild('shortcut')
            .addChild('toc')
            .addChild('tooltip'),
      })
      .addChild('humans', {
        pathResolver: () => 'humans.txt',
      })
      .addChild('sitemap', {
        pathResolver: () => 'sitemap.xml',
      }),
});

export const LOAD_DEPENDENCIES = {
  COLOR_SCHEME: 'app:color-scheme',
} as const;

export const PACKAGE_MANAGERS = ['npm', 'pnpm', 'yarn'] as const;
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];
