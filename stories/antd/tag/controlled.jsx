import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Tag, Button } from 'antd';

class Demo extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button size="small" onClick={() => this.setState({ visible: !this.state.visible })}>
          Toggle
        </Button>
      </>
    );
  }
}

storiesOf('Components/Ant Design/Tag', module).add('controlled', () => <Demo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/tag/" target="_blank">
                  documentation on Tag component
                </a>.
              </>
            ) }
        });