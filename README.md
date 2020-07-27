# Virtuoso Design System

This repo enables using the Virtuoso Design System as front-end code (HTML, CSS, & JavaScript).

[Dive into the docs.](https://avkvirtru.github.io/virtuoso-design-system/)

## Docs

The documentation for Virtuoso is [hosted on GitHub Pages](https://avkvirtru.github.io/virtuoso-design-system/) and powered by [Storybook](https://storybook.js.org). 

To run storybook locally:

```shell
npm run storybook
```

To update the docs for others to use: 

```shell
npm run storybook:build
```

This should generate a static copy of Storybook into a directory like `docs/`. 
GitHub Pages then reads and serves Storybook from that directory. 

Before pushing (or merging to master), you can sanity check the built docs locally via: 

```shell
npx http-server docs
```

## Development Tests

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
