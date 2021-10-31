import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Chevron } from '@';

storiesOf('virtru/chevron', module).add(
  'basic',
  () => (
    <>
      <div>
        <Chevron variant={Chevron.VARIANT.THIN} direction={Chevron.DIRECTION.UP} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICK} direction={Chevron.DIRECTION.UP} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.UP} />
      </div>

      <div>
        <Chevron variant={Chevron.VARIANT.THIN} direction={Chevron.DIRECTION.DOWN} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICK} direction={Chevron.DIRECTION.DOWN} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.DOWN} />
      </div>

      <div>
        <Chevron variant={Chevron.VARIANT.THIN} direction={Chevron.DIRECTION.LEFT} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICK} direction={Chevron.DIRECTION.LEFT} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.LEFT} />
      </div>

      <div>
        <Chevron variant={Chevron.VARIANT.THIN} direction={Chevron.DIRECTION.RIGHT} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICK} direction={Chevron.DIRECTION.RIGHT} />
      </div>
      <div>
        <Chevron variant={Chevron.VARIANT.THICKER} direction={Chevron.DIRECTION.RIGHT} />
      </div>
    </>
  ),
  {
    docs: {
      page: () => (
        <>
          <h1 id="enus">en-US</h1>
          <p>Simple chevron (all sizes and directions).</p>
        </>
      ),
    },
  },
);
