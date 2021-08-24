import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Alert } from 'antd';

const { ErrorBoundary } = Alert;
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

storiesOf('antd/alert', module).add('error-boundary', () => 
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>,
  { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>ErrorBoundary Component for making error handling easier in <a href="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html">React</a>.</p></>) } });