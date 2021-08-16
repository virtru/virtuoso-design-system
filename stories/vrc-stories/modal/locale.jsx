import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Bla bla ...',
    okText: '确认',
    cancelText: '取消',
  });
}

storiesOf('modal', module).add('locale', () => 
  <Space>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </Space>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>To customize the text of the buttons, you need to set <code>okText</code> and <code>cancelText</code> props.</p></>) } });