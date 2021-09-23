import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select, Space } from 'antd';

interface ItemProps {
  label: string;
  value: string;
}

const options: ItemProps[] = Array();

for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}

const Demo = () => {
  const [value, setValue] = React.useState(['a10', 'c12', 'h17', 'j19', 'k20']);

  const selectProps = {
    mode: 'multiple' as const,
    style: { width: '100%' },
    value,
    options,
    onChange: (newValue: string[]) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive' as const,
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Select {...selectProps} />
      <Select {...selectProps} disabled />
    </Space>
  );
};

storiesOf('Components/Ant Design/Select', module).add('responsive', () => <Demo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/select/" target="_blank">
                  documentation on Select component
                </a>.
              </>
            ) }
        });