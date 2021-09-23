import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tree } from 'antd';

function dig(path = '0', level = 3) {
  const list = [];
  for (let i = 0; i < 10; i += 1) {
    const key = `${path}-${i}`;
    const treeNode = {
      title: key,
      key,
    };

    if (level > 0) {
      treeNode.children = dig(key, level - 1);
    }

    list.push(treeNode);
  }
  return list;
}

const treeData = dig();

storiesOf('Components/Ant Design/Tree', module).add('virtual-scroll', () => <Tree treeData={treeData} height={233} defaultExpandAll />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/tree/" target="_blank">
                  documentation on Tree component
                </a>.
              </>
            ) }
        });