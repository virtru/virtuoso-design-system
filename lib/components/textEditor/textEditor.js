import React from 'react';
// import RichTextEditor from 'react-rte';
import styles from './textEditor.css';

const TextEditor = () => {
  // const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  // const editor = useRef(null);

  // const onChange = (newValue) => {
  //   setValue(newValue);
  //   // if (this.props.onChange) {
  //   //   // Send the changes up to the parent component as an HTML string.
  //   //   // This is here to demonstrate using `.toString()` but in a real app it
  //   //   // would be better to avoid generating a string on each change.
  //   //   this.props.onChange(
  //   //     value.toString('html')
  //   //   );
  //   // }
  // };

  // const handleFocus = () => {
  //   editor.current._focus();
  // };
  //
  // const toolbarConfig = {
  //   display: [
  //     'INLINE_STYLE_BUTTONS',
  //     'BLOCK_ALIGNMENT_BUTTONS',
  //     'LINK_BUTTONS',
  //     'BLOCK_TYPE_BUTTONS',
  //     'HISTORY_BUTTONS',
  //   ],
  //   INLINE_STYLE_BUTTONS: [
  //     { label: 'Bold', style: 'BOLD' },
  //     { label: 'Italic', style: 'ITALIC' },
  //     { label: 'Underline', style: 'UNDERLINE' },
  //   ],
  //   BLOCK_ALIGNMENT_BUTTONS: [
  //     { label: 'Align Left', style: 'ALIGN_LEFT' },
  //     { label: 'Align Center', style: 'ALIGN_CENTER' },
  //     { label: 'Align Right', style: 'ALIGN_RIGHT' },
  //   ],
  //   BLOCK_TYPE_BUTTONS: [
  //     { label: 'UL', style: 'unordered-list-item' },
  //     { label: 'OL', style: 'ordered-list-item' },
  //     { label: 'Blockquote', style: 'blockquote' },
  //   ],
  // };

  return (
    <div>Rich editor</div>
  );
};

export default TextEditor;
