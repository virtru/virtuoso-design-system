const tokens = require('./build/js/design_tokens');

const { vds } = tokens;

module.exports = {
    '@primary-color': vds.color.blue.primary.value,
    '@primary-1': vds.color.blue.lightest.value,
    '@primary-2': vds.color.blue.lighter.value,
    '@primary-5': vds.color.blue.darkest.value,
    '@primary-6': vds.color.blue.darkest.value,
    '@primary-7': vds.color.blue.primary.value,
    '@success-color': vds.color.green.primary.value,
    '@error-color': vds.color.red.darker.value,
    '@disabled-bg': vds.color.slate.lighter.value,
    '@border-radius-base': vds.border.radius.xs.value,
    '@font-family': vds.font.family.body.value,
    '@text-color': vds.color.slate.darkest.value,
    '@text-color-secondary': vds.color.slate.darker.value,
    // buttons
    '@btn-primary-bg': vds.color.blue.darker.value,
    '@btn-disable-color': vds.color.white.value,
    '@btn-font-weight': vds.font.weight.bold.value,
    '@btn-font-size-sm': '13px',
    '@btn-padding-horizontal-base': '18px',
    '@btn-height-base': '36px',
    '@btn-disable-border': vds.color.slate.lighter.value,
    '@btn-default-border': vds.color.slate.darker.value,
    '@btn-default-color': vds.color.blue.darker.value,
    // header
    '@layout-header-background': vds.color.blue.darkest.value,
    '@layout-trigger-background': vds.color.blue.darkest.value,
    '@layout-body-background': vds.color.white.value,
    '@menu-item-padding-horizontal': vds.spacer.sm.value,
    '@menu-dark-color': vds.color.white.value,
    '@layout-header-color': vds.color.white.value,
    '@layout-header-padding': `0 ${vds.spacer.md.value}`,
    '@layout-header-height': '54px',
    '@menu-dark-item-active-bg': vds.color.blue.darkest.value,
    // navigation
    '@menu-item-active-bg': vds.color.white.value,
    '@menu-item-font-size': '16px',
    '@menu-item-color': vds.color.slate.primary.value,
    '@menu-highlight-color': vds.color.slate.darkest.value,
    // pagination
    '@pagination-item-size': '18px',
    '@pagination-item-size-sm': '18px',
    // dropdown
    '@menu-item-group-title-color': vds.color.slate.darker.value,
    '@menu-item-group-title-font-size': '13px',
    '@dropdown-font-size': '13px',
    '@dropdown-line-height': '18px',
    '@dropdown-vertical-padding': '8px',
    '@control-padding-horizontal': vds.spacer.md.value,
    // table
    '@table-header-color': vds.color.slate.darkest.value,
    '@table-selected-row-bg': vds.color.slate.lightest.value,
    '@table-row-hover-bg': vds.color.slate.lightest.value,
    '@table-font-size': '13px',
    '@table-header-bg': vds.color.slate.lightest.value,
    '@table-padding-vertical': '7px',
    '@table-border-color': vds.color.slate.lightest.value,
    // layout (left)
    // link
    '@link-color': vds.color.blue.darker.value
};
