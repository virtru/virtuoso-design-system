import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
} from '@draft-js-plugins/buttons';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createLinkPlugin from '@draft-js-plugins/anchor';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createUndoPlugin from '@draft-js-plugins/undo';
import { stateToHTML } from 'draft-js-export-html';
import { RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { Space, Row } from '@';
import styles from './richText.css';
import toolbarStyles from './toolbarStyle.css';
import buttonStyles from './buttonStyle.css';
import alignmentStyles from './aligment.css';

const staticToolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { Toolbar } = staticToolbarPlugin;

const linkPlugin = createLinkPlugin({
  placeholder: 'http://…',
});

const textAlignmentPlugin = createTextAlignmentPlugin({
  theme: { alignmentStyles },
});

const undoPlugin = createUndoPlugin({
  undoContent: <UndoOutlined />,
  redoContent: <RedoOutlined />,
  theme: {
    undo: buttonStyles.button,
    redo: buttonStyles.button,
  },
});

const { UndoButton, RedoButton } = undoPlugin;
const plugins = [staticToolbarPlugin, linkPlugin, textAlignmentPlugin, undoPlugin];

const RichText = ({ getEditorData, placeholder }) => {
  const [editorState, setEditorState] = useState(createEditorStateWithText(''));
  const editor = useRef(null);

  const focus = () => {
    editor.current.focus();
  };

  useEffect(() => {
    setEditorState(createEditorStateWithText(''));
  }, []);

  useEffect(() => {
    getEditorData(stateToHTML(editorState.getCurrentContent()));
  }, [editorState, getEditorData]);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={styles.editor} onClick={focus}>
        <Toolbar>
          {(externalProps) => (
            <Row justify="center">
              <Space wrap>
                <Row wrap={false}>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                </Row>

                <Row wrap={false}>
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                  <linkPlugin.LinkButton {...externalProps} />
                </Row>
                <Row wrap={false}>
                  <textAlignmentPlugin.TextAlignment {...externalProps} />
                </Row>
                <Row wrap={false}>
                  <div className={styles.undoRow}>
                    <UndoButton />
                    <RedoButton />
                  </div>
                </Row>
              </Space>
            </Row>
          )}
        </Toolbar>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          ref={editor}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

RichText.propTypes = {
  getEditorData: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

RichText.defaultProps = {
  placeholder: '',
};

export default RichText;
