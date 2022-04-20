import React, { Component } from 'react';
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
import linkStyles from './linkStyles.css';

class RichText extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorStateWithText(''),
      settings: (() => {
        const linkPlugin = createLinkPlugin({
          theme: linkStyles,
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

        // eslint-disable-next-line no-shadow
        const { UndoButton, RedoButton } = undoPlugin;

        const toolbarPlugin = createToolbarPlugin({
          theme: { buttonStyles, toolbarStyles },
        });
        // eslint-disable-next-line no-shadow
        const { Toolbar } = toolbarPlugin;
        // eslint-disable-next-line no-shadow
        const { TextAlignment } = textAlignmentPlugin;
        // eslint-disable-next-line no-shadow
        const { LinkButton } = linkPlugin;
        // eslint-disable-next-line no-shadow
        const plugins = [toolbarPlugin, linkPlugin, textAlignmentPlugin, undoPlugin];

        return {
          plugins,
          Toolbar,
          TextAlignment,
          LinkButton,
          UndoButton,
          RedoButton,
        };
      })(),
    };
  }

  focus = () => this.editor.focus();

  onChange = (editorState) => {
    this.setState({ editorState }, () => {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.getEditorData(stateToHTML(this.state.editorState.getCurrentContent()));
    });
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    const { placeholder } = this.props;
    const { settings, editorState } = this.state;

    const { plugins, Toolbar, TextAlignment, LinkButton, UndoButton, RedoButton } = settings;
    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className={styles.editor} onClick={this.focus}>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
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
                    <LinkButton {...externalProps} />
                  </Row>
                  <Row wrap={false} className="toolbar-button-group">
                    <TextAlignment {...externalProps} />
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
  }
}

RichText.propTypes = {
  getEditorData: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

RichText.defaultProps = {
  placeholder: '',
};

export default RichText;
