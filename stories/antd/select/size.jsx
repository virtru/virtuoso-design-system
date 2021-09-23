import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select, Radio } from 'antd';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const SelectSizesDemo = () => {
  const [size, setSize] = React.useState('default');

  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select size={size} defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
        {children}
      </Select>
      <br />
      <Select
        mode="multiple"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
      <br />
      <Select
        mode="tags"
        size={size}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        style={{ width: '100%' }}
      >
        {children}
      </Select>
    </>
  );
};

storiesOf('Components/Ant Design/Select', module).add('size', () => <SelectSizesDemo />, {
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