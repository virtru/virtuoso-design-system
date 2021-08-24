import React, { Component } from 'react';
import { Button as AntDButton } from 'antd';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AntDButton>{this.props.children}</AntDButton>;
  }
}

export default Button;
