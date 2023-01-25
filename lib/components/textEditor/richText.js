import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RichUtils } from 'draft-js';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  UnorderedListButton,
  OrderedListButton,
} from '@draft-js-plugins/buttons';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createLinkPlugin from '@draft-js-plugins/anchor';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createUndoPlugin from '@draft-js-plugins/undo';
import { stateToHTML } from 'draft-js-export-html';

import { RedoOutlined, UndoOutlined } from '@ant-design/icons';

import { Space, Row, Modal } from '@';

import { byteCount } from '@/helpers';

import styles from './richText.css';
import toolbarStyles from './toolbarStyle.css';
import buttonStyles from './buttonStyle.css';
import alignmentStyles from './aligment.css';
import linkStyles from './linkStyles.css';

class RichText extends Component {
  linkPlugin = createLinkPlugin({
    theme: linkStyles,
    placeholder: 'http://…',
  });

  textAlignmentPlugin = createTextAlignmentPlugin({
    theme: { alignmentStyles },
  });

  undoPlugin = createUndoPlugin({
    undoContent: <UndoOutlined />,
    redoContent: <RedoOutlined />,
    theme: {
      undo: buttonStyles.button,
      redo: buttonStyles.button,
    },
  });

  toolbarPlugin = createToolbarPlugin({
    theme: { buttonStyles, toolbarStyles },
  });

  plugins = [this.toolbarPlugin, this.linkPlugin, this.textAlignmentPlugin, this.undoPlugin];

  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);

    this.editorWrapRef = React.createRef();

    const editorState = createEditorStateWithText('');

    this.state = {
      editorState,
      warningModalWasShown: false,
    };

    this.initialEditorContent = stateToHTML(editorState.getCurrentContent());
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    this.editorWrapRef.current
      .querySelectorAll(`.${buttonStyles.button}:not([tabindex])`)
      .forEach((button) => {
        button.setAttribute('tabindex', '-1');
      });
  }

  focus = () => this.editor.focus();

  onChange = (editorState) => {
    const {
      maxContentSize: { bytes: maxBytes, warning },
      getEditorData,
    } = this.props;

    this.setState({ editorState }, () => {
      const { warningModalWasShown, editorState: currentEditorState } = this.state;

      getEditorData(stateToHTML(currentEditorState.getCurrentContent()));

      if (
        maxBytes &&
        !warningModalWasShown &&
        byteCount(stateToHTML(currentEditorState.getCurrentContent())) > maxBytes
      ) {
        this.setState({ warningModalWasShown: true });

        Modal.warning({
          title: 'Warning',
          content: <div>{warning}</div>,
        });
      }
    });
  };

  getToolbarButtonProps = (externalProps) => ({
    ...externalProps,
    buttonProps: { ...externalProps.buttonProps, tabIndex: -1 },
  });

  handleKeyCommand = (command) => {
    const { editorState } = this.state;

    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);

      return true;
    }

    return false;
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    const { placeholder, ariaLabel, spellCheck } = this.props;

    const { editorState } = this.state;

    const { Toolbar } = this.toolbarPlugin;

    const { LinkButton } = this.linkPlugin;

    return (
      <>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className={styles.editor}
          onClick={this.focus}
          data-testid="richText"
          ref={this.editorWrapRef}
        >
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            plugins={this.plugins}
            ref={(element) => {
              this.editor = element;
            }}
            placeholder={
              // eslint-disable-next-line react/destructuring-assignment
              this.initialEditorContent === stateToHTML(this.state.editorState.getCurrentContent())
                ? placeholder
                : ''
            }
            ariaLabel={ariaLabel}
            spellCheck={spellCheck}
          />

          <Toolbar>
            {(externalProps) => (
              <Row justify="center">
                <Space wrap>
                  <Row wrap={false} className="toolbar-button-group">
                    <BoldButton {...this.getToolbarButtonProps(externalProps)} />
                    <ItalicButton {...this.getToolbarButtonProps(externalProps)} />
                    <UnderlineButton {...this.getToolbarButtonProps(externalProps)} />
                    <UnorderedListButton {...this.getToolbarButtonProps(externalProps)} />
                    <OrderedListButton {...this.getToolbarButtonProps(externalProps)} />
                    <LinkButton {...this.getToolbarButtonProps(externalProps)} />
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
  ariaLabel: PropTypes.string,
  spellCheck: PropTypes.bool,
  maxContentSize: PropTypes.shape({
    bytes: PropTypes.number,
    warning: PropTypes.node,
  }),
};

RichText.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  spellCheck: true, // Take note of: https://draftjs.org/docs/api-reference-editor/#spellcheck
  maxContentSize: {
    bytes: null,
    warning: null,
  },
};

export default RichText;
