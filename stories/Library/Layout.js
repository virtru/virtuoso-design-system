/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Layout, Menu } from '@';
import { StickerSheet } from '../storybook-components';

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
        ></Header>
        Content here
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
  .add('typography sticker sheet', () => (
    <Container>
      <Layout>
        <StickerSheet title="Headings">
          <h1>H1</h1>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
          <h6>H6</h6>
        </StickerSheet>
        <StickerSheet>Unwrapped text</StickerSheet>
        <StickerSheet title="Text and Link">
          Text
          <br />
          <b>Bold</b> text
          <br />
          <strong>Strong</strong> text
          <br />
          <i>Italics</i> text
          <br />
          <em>Emphasized</em> text
          <br />
          <q>Quote</q> text
          <br />
          <mark>Marked</mark> text
          <br />
          <ins>Insert</ins> text
          <br />
          <del>Delete</del> text
          <br />
          <sup>Super</sup> text
          <br />
          <sub>Sub</sub> text
          <br />
          <small>Small</small> text
          <br />
          <a href="https://virtru.com">Link</a> text
        </StickerSheet>
        <StickerSheet title="Blockquote">
          <blockquote>
            Marketing non-disclosure agreement prototype backing investor innovator sales disruptive
            vesting period infrastructure leverage. Funding twitter research &amp; development seed
            money. Early adopters marketing traction infographic non-disclosure agreement. Android
            seed money bootstrapping. Churn rate startup monetization focus twitter metrics.
          </blockquote>
        </StickerSheet>
        <StickerSheet title="Paragraph and Horizontal Rule">
          <p>
            Marketing non-disclosure agreement prototype backing investor innovator sales disruptive
            vesting period infrastructure leverage. Funding twitter research &amp; development seed
            money. Early adopters marketing traction infographic non-disclosure agreement. Android
            seed money bootstrapping. Churn rate startup monetization focus twitter metrics.
          </p>
          <p>
            Launch party angel investor metrics direct mailing network effects channels advisor
            android churn rate social proof termsheet sales first mover advantage technology.
            Graphical user interface business-to-business deployment. Holy grail growth hacking
            android iPad scrum project startup partnership seed round metrics MVP bootstrapping
            conversion first mover advantage.
          </p>
          <hr />
          <p>
            Vesting period android ramen infographic value proposition launch party advisor. Long
            tail burn rate ecosystem infographic market partner network business model canvas
            metrics rockstar user experience virality seed money. Research &amp; development seed
            round scrum project creative niche market termsheet. User experience
            business-to-consumer interaction design first mover advantage handshake low hanging
            fruit business model canvas founders value proposition stock.
          </p>
        </StickerSheet>
        <StickerSheet title="Preformatted &amp; Code">
          <pre>Preformated Text</pre>
          <br />
          <code>Code Text</code>
          <br />
          <pre>
            <code>Code Text wrapped in Preformatted</code>
          </pre>
        </StickerSheet>
        <StickerSheet title="Lists">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
          <br />
          <ol>
            <li>Item 1</li>
            <li>Item 2</li>
          </ol>
          <br />
          <dl>
            <dt>Virtru</dt>
            <dd>A great company</dd>
            <dt>Virtuoso</dt>
            <dd>A design system</dd>
          </dl>
        </StickerSheet>
      </Layout>
    </Container>
  ));
