/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Layout, Menu } from '@';

const { Header, Footer } = Layout;
const { MenuItem } = Menu;

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '600px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const company = text('Company Name', 'Virtru')
const logo = text(
  'Company Logo',
  'https://inxmad4bw31barrx17wec71c-wpengine.netdna-ssl.com/wp-content/themes/salient-child/img/virtru-logo-white-rgb.svg',
)

storiesOf('Layout', module).lokiSkip('default', () => (
  <Container>
    <Layout>
      <Header company={text('Company Name', 'Virtru')} logo={text('Company Logo', undefined)} title={text('Header Title', 'My App')} />
      Content
    </Layout>
  </Container>
)).lokiSkip('default w/o nav', () => (
  <Container>
    <Layout>
      <Header company={text('Company Name', 'Virtru')} logo={text('Company Logo', undefined)} title={text('Header Title', 'My App')}>
        <Menu>
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
          <MenuItem>Three</MenuItem>
        </Menu>
      </Header>
      Content
    </Layout>
  </Container>
))
