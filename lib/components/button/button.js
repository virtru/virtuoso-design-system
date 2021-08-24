import React, { Component } from 'react';
import { Button as AntDButton } from 'antd';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AntDButton type="primary">{this.props.children}</AntDButton>;
  }
}

export default Button;
