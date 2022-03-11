import React, { useState } from 'react';
import RichTextEditor from 'react-rte';

const TextEditor = () => {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const onChange = (changeValue) => {
    setValue(changeValue.toString('html'))
  };

  return (
    <div>
      <RichTextEditor value={value} onChange={onChange} />
    </div>
  );
};

export default TextEditor;
