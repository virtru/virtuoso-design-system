import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from 'antd';

class App extends React.Component {
  state = {
    current: 3,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}

storiesOf('virtru/pagination', module).add('controlled', () => <App />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Controlled page number.</p></>) } });