import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Cascader } from 'antd';

const optionLists = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

const LazyOptions = () => {
  const [options, setOptions] = React.useState(optionLists);

  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };

  const loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };

  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};

storiesOf('Components/Ant Design/Cascader', module).add('lazy', () => <LazyOptions />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/cascader/" target="_blank">
                  documentation on Cascader component
                </a>.
              </>
            ) }
        });