import React from 'react';
import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { InfoTooltip, Row, Col } from '@';

import { infoTooltipOptions } from '@/components/infoTooltip/infoTooltip';

export default {
  title: 'Info tooltip',
  decorators: [withKnobs],
};

storiesOf('virtru/infoTooltip', module).add(
  'infoTooltip',
  () => {
    return (
      <Row style={{ width: '100%' }}>
        <Col sspan={12} offset={6}>
          <InfoTooltip
            placement={select(
              'Placement',
              infoTooltipOptions.placements,
              infoTooltipOptions.defaultPlacement,
            )}
            title={text('Title', 'Some text')}
            trigger={select(
              'Trigger',
              infoTooltipOptions.triggers,
              infoTooltipOptions.defaultTrigger,
            )}
            size={text('Size', infoTooltipOptions.defaultSize)}
          />
        </Col>
      </Row>
    );
  },
  {
    docs: {
      page: null,
    },
  },
);
