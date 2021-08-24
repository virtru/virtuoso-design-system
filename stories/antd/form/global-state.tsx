import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Form, Input } from 'antd';

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void;
  fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[{ required: true, message: 'Username is required!' }]}
    >
      <Input />
    </Form.Item>
  </Form>
);

const Demo = () => {
  const [fields, setFields] = useState<FieldData[]>([{ name: ['username'], value: 'Ant Design' }]);

  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={newFields => {
          setFields(newFields);
        }}
      />
      <pre className="language-bash">{JSON.stringify(fields, null, 2)}</pre>
    </>
  );
};

storiesOf('antd/form', module).add('global-state', () => <Demo />, { docs: { page: () => (<><h1 id="enus">en-US</h1>
<p>We can store form data into upper component or <a href="https://github.com/reactjs/redux">Redux</a> or <a href="https://github.com/dvajs/dva">dva</a> by using <code>onFieldsChange</code> and <code>fields</code>, see more at this <a href="https://rc-field-form.react-component.now.sh/?selectedKind=rc-field-form&selectedStory=StateForm-redux&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel">rc-field-form demo</a>.</p>
<p><strong>Note:</strong> Save Form data globally <a href="https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978">is not a good practice</a>. You should avoid this if not necessary.</p></>) } });