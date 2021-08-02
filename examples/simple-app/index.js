import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'virtuoso-design-system';
import 'virtuoso-design-system/dist/styles.css';

/* eslint-disable require-jsdoc */
function SimpleApp() {
  return (
    <Layout>
      <Layout.Header title="My App" />

      <p>Example content showing design tokens in action:</p>

      <ul>
        <li className="ex__spacer--margin">
          Am I at least a medium spacer apart from the next list item?
        </li>

        <li className="ex__color--primaryBlue ex__spacer--padding">
          This background should be primary blue with some ample padding.
        </li>

        <li className="ex__spacer--padding ex__color--primarySlate ex__border--rounded">
          I should be primary slate with a rounded border.
        </li>

        <li className="ex__shadow--hover">Note my hovering shadow…</li>
      </ul>

      <section>
        <h1 className="ex__head--xl">Heading XL</h1>
        <h2 className="ex__head--lg">Heading LG</h2>
        <h3 className="ex__head--md">Heading MD</h3>
        <h4 className="ex__head--sm">Heading small</h4>
        <h5 className="ex__head--xs">Heading xs</h5>
        <h6 className="ex__head--xxs">Heading xs</h6>

        <p className="ex__body--md">Body copy</p>
        <small className="ex__body--sm">Small text</small>

        <hr />
        <p className="ex__body--md ex__body--regular-weight">Regular weight</p>
        <p className="ex__body--md ex__body--semibold-weight">Semibold weight</p>
        <p className="ex__body--md ex__body--bold-weight">Bold weight</p>
      </section>
    </Layout>
  );
}

ReactDOM.render(<SimpleApp />, document.getElementById('mount'));
