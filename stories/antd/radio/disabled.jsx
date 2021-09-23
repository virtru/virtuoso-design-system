import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Radio, Button } from 'antd';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <Radio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </Radio>
        <Radio defaultChecked disabled={this.state.disabled}>
          Disabled
        </Radio>
        <br />
        <Button type="primary" onClick={this.toggleDisabled} style={{ marginTop: 16 }}>
          Toggle disabled
        </Button>
      </>
    );
  }
}

storiesOf('Components/Ant Design/Radio', module).add('disabled', () => <App />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/radio/" target="_blank">
                  documentation on Radio component
                </a>.
              </>
            ) }
        });