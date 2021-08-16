import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Skeleton, Button } from 'antd';

class Demo extends React.Component {
  state = {
    loading: false,
  };

  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <div className="article">
        <Skeleton loading={this.state.loading}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes
              beautifully and efficiently.
            </p>
          </div>
        </Skeleton>
        <Button onClick={this.showSkeleton} disabled={this.state.loading}>
          Show Skeleton
        </Button>
      </div>
    );
  }
}

storiesOf('skeleton', module).add('children', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>Skeleton contains sub component.</p></>) } });