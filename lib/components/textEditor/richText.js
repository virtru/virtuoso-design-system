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

const RichText = ({ getEditorData, placeholder }) => {
  const [editorState, setEditorState] = useState(createEditorStateWithText(''));

  const [{ plugins, Toolbar }] = useState(() => {
    const toolbarPlugin = createToolbarPlugin({
      theme: { buttonStyles, toolbarStyles },
    });
    // eslint-disable-next-line no-shadow
    const { Toolbar } = toolbarPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [toolbarPlugin, linkPlugin, textAlignmentPlugin, undoPlugin];
    return {
      plugins,
      Toolbar,
    };
  });

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
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          plugins={plugins}
          ref={editor}
          placeholder={placeholder}
        />
        <Toolbar>
          {(externalProps) => (
            <Row justify="center">
              <Space wrap>
                <Row wrap={false} className="toolbar-button-group">
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                </Row>

                <Row wrap={false} className="toolbar-button-group">
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                  <linkPlugin.LinkButton {...externalProps} />
                </Row>
                <Row wrap={false} className="toolbar-button-group">
                  <textAlignmentPlugin.TextAlignment {...externalProps} />
                </Row>
                <Row wrap={false} className="toolbar-button-group">
                  <div className={styles.undoRow}>
                    <UndoButton />
                    <RedoButton />
                  </div>
                </Row>
              </Space>
            </Row>
          )}
        </Toolbar>
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
