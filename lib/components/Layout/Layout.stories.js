/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Layout, Menu, UserDropdown } from '@';

const { Header, Footer } = Layout;
const { MenuItem } = Menu;

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '600px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

storiesOf('Layout', module)
  .lokiSkip('default', () => (
    <Container>
      <Layout>Content here</Layout>
    </Container>
  ))
  .lokiSkip('with header', () => (
    <Container>
      <Layout>
        <Header
          company={text('Company Name', 'Virtru')}
          logo={text('Company Logo', undefined)}
          title={text('Header Title', 'My App')}
        />
        Content here
        <Footer />
      </Layout>
    </Container>
  ))
  .lokiSkip('with header and nav', () => (
    <Container>
      <Layout>
        <Header
          company={text('Company Name', 'Virtru')}
          logo={text('Company Logo', undefined)}
          title={text('Header Title', 'My App')}
        >
          <Menu key="main-menu" variant={Menu.VARIANTS.VARIANT_NAV}>
            <MenuItem key="dashboard">Dashboard</MenuItem>
            <MenuItem key="items">Items</MenuItem>
            <MenuItem key="settings">Settings</MenuItem>
          </Menu>
          <Menu
            key="secondary-menu"
            variant={Menu.VARIANTS.VARIANT_NAV}
            align={Header.MENU_ALIGNMENTS.MENU_ALIGNMENT_RIGHT}
          >
            <MenuItem>Bob McBobertson</MenuItem>
          </Menu>
        </Header>
        Content
        <Footer />
      </Layout>
    </Container>
  ))
  .lokiSkip('with header and user dropdown', () => (
    <Container>
      <Layout>
        <Header
          company={text('Company Name', 'Virtru')}
          logo={text('Company Logo', undefined)}
          title={text('Header Title', 'My App')}
        >
          <Menu key="main-menu" variant={Menu.VARIANTS.VARIANT_NAV}>
            <MenuItem key="dashboard">Dashboard</MenuItem>
            <MenuItem key="items">Items</MenuItem>
            <MenuItem key="settings">Settings</MenuItem>
          </Menu>
          <Menu
            key="secondary-menu"
            variant={Menu.VARIANTS.VARIANT_NAV}
            align={Header.MENU_ALIGNMENTS.MENU_ALIGNMENT_RIGHT}
          >
            <MenuItem>
              <UserDropdown
                isOpen
                handleClick={() => null}
                userId="example@email.com"
                handleLogout={() => null}
              />
            </MenuItem>
          </Menu>
        </Header>
        Content
        <Footer />
      </Layout>
    </Container>
  ));
