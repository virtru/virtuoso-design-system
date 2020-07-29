# Virtuoso Design System

This repo enables using the Virtuoso Design System as front-end code (HTML, CSS, & JavaScript).

[Dive into the docs.](https://avkvirtru.github.io/virtuoso-design-system/)

## Docs

The documentation for Virtuoso is [hosted on GitHub Pages](https://avkvirtru.github.io/virtuoso-design-system/) and powered by [Storybook](https://storybook.js.org). 

To run storybook locally:

```shell
npm run storybook
```

## Examples

Examples can be found in `/examples`

## Releasing

Releases are handled by [Auto](https://intuit.github.io/auto/). All you have to do is `npm run release` and you'll get:

* automatic changelog
* bump npm version
* publish to npm — based on your `npm login` or NPM_TOKEN in `.env`
* make a GitHub release — based on your GH_TOKEN in `.env`

This works with the magic described in [auto shipit docs](https://intuit.github.io/auto/docs/generated/shipit).

A static version of the Storybook docs are generated automatically before we publish releases to npm. 

## Development &  Testing

To develop new components make sure to:

- add components to `/lib/components`
- add helpers and hooks to `/lib/helpers`
- add relevant stories to `/stories`
- add tests next to the component

**Run locally**

```shell
npm run storybook
```

**Run tests**

```shell
npm run test
```

---

Copyright © 2020 Virtru Corporation
