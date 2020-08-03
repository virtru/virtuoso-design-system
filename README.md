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

# Visual Regression Testing (VRT)

This repository uses Loki for VRT to ensure the visual appearance of states of the components does not regress. Baseline reference images are intentionally checked into this repository in `.loki/reference/`.

## Running VRT locally

You can run the VRT tests locally to check to see if your changes have caused visual regressions from the existing baselines for *all components* based on the `loki` config in **package.json**:

```shell
npm run test:vrt
```

For faster results, you can run a subset of tests using `--storiesFilter`: 

```shell
npm run test:vrt -- --storiesFilter=Input
```

Any failed tests will be output in `.loki/difference/`. You can inspect any visual differences that are highlighted in these output images.

If the differences are intended, you can update the baselines by following the instructions in the next section.

## Updating Loki Baselines

_Note_: Before performing this step, you must first run the VRT once (see previous section).

If you run the tests above and have legitimate changes in the visual appearance of the components, you can approve new baselines, which will replace the existing baseline images with the new, current images:

```shell
npx loki approve
```

This will immediately take all new baseline images from the last test run and replace the existing baseline images. If you wish to update a specific test case image only but reject other changes, see the [Loki CLI reference](https://loki.js.org/command-line-arguments.html).

We recommend only approving new baselines once all unintended visual changes have been fixed, then running the command above so no fine-grained filtering of new baselines is needed.

---

Copyright © 2020 Virtru Corporation
