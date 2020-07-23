#!/bin/bash

## Add remote
git remote add -f --no-tags react-components git@github.com:virtru/react-components.git

## Create branch off remote
git branch react-components react-components/greatawakening

## Check out remote branch
git checkout react-components

## Split subtree into branches
git subtree split --prefix=lib/components/ -b subtree_react-components_components
git subtree split --prefix=lib/helpers/    -b subtree_react-components_helpers
git subtree split --prefix=stories/        -b subtree_react-components_stories

## Checkout master
git checkout -

## Add subtree from branches
git subtree add --squash --prefix=components/         subtree_react-components_components
git subtree add --squash --prefix=helpers/            subtree_react-components_helpers
git subtree add --squash --prefix=stories/vrc-stories subtree_react-components_stories