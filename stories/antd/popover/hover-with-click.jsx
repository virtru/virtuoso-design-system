import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Popover, Button } from 'antd';

class App extends React.Component {
  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  handleHoverChange = visible => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  };

  handleClickChange = visible => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  };

  render() {
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <Popover
        style={{ width: 500 }}
        content={hoverContent}
        title="Hover title"
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <Popover
          content={
            <div>
              {clickContent}
              <a onClick={this.hide}>Close</a>
            </div>
          }
          title="Click title"
          trigger="click"
          visible={this.state.clicked}
          onVisibleChange={this.handleClickChange}
        >
          <Button>Hover and click / 悬停并单击</Button>
        </Popover>
      </Popover>
    );
  }
}

storiesOf('Components/Ant Design/Popover', module).add('hover-with-click', () => <App />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/popover/" target="_blank">
                  documentation on Popover component
                </a>.
              </>
            ) }
        });