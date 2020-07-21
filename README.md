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
npm run build-storybook
```

This should generate a static copy of Storybook into a directory like `docs/`. 
GitHub Pages then reads and serves Storybook from that directory. 

Before pushing (or merging to master), you can sanity check the built docs locally via: 

```shell
npx http-server docs
```

# Virtru Repo Template

Thanks for using this template! 🙏
The goal of this template is to simplify the creation of repositories and encourage Virtru best practices.

## Step 1 - Configure Github

Now that you've created a new repository you'll want to configure the repo. To do this you'll want to go to the settings tab.

### Public and Private

#### Options

Under *Options* disable:

- [ ] Wikis
- [ ] Issues
- [ ] Sponsorships
- [ ] Projects

#### Manage Access

Add your team! Under *Manage Access* add the teams which should have access. Suggested teams are:

- @virtru/employees
- @virtru/employees-read-only
- @virtru/contractors-readonly
- @virtru/core
- @virtru/platform

### Autolink references

Add autolink references using the Jira project. Common pairs are

Prefix: `PLAT-`
Target URL: `https://virtru.atlassian.net/browse/PLAT-<num>`

Prefix: `CORE-`
Target URL: `https://virtru.atlassian.net/browse/CORE-<num>`

## Public Repos Only

For SECURITY sake make sure to get permission before creating a public repo, but these are steps you'll want to configure.

- [ ] Enable Issues

## Step 2

Next modify the following files:

- [ ] LICENSE - Specify the license for this repo. This is typically for public repos.
- [ ] CODEOWNERS - Specify the teams which should be auto assigned to PRs.
- [ ] CHANGELOG.md - Pick a path and get started

Optionally, you'll want to modify the files located in `./.github`. Specifically:

- pull_request_template.md

If you are creating a public repo take a look at:

- ISSUE_TEMPLATE.md
- CODE_OF_CONDUCT.md
- CONTRIBUTING.md
- SECURITY.md
- SUPPORT.md
