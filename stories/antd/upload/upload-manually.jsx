import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';

class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    this.setState({
      uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
      </>
    );
  }
}

storiesOf('Components/Ant Design/Upload', module).add('upload-manually', () => <Demo />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/upload/" target="_blank">
                  documentation on Upload component
                </a>.
              </>
            ) }
        });