import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import { ContentState, EditorState, convertFromHTML } from 'draft-js';
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
import { truncateByBytes, byteCount } from '@/helpers';
import styles from './richText.css';
import toolbarStyles from './toolbarStyle.css';
import buttonStyles from './buttonStyle.css';
import alignmentStyles from './aligment.css';
import linkStyles from './linkStyles.css';

class RichText extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);

    this.editorWrapRef = React.createRef();
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
    // eslint-disable-next-line react/destructuring-assignment
    this.initialEditorContent = stateToHTML(this.state.editorState.getCurrentContent());
  }

  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    const buttons = this.editorWrapRef.current.querySelectorAll('button');
    buttons.forEach((button) => {
      button.setAttribute('tabindex', '-1');
    });
  }

  // eslint-disable-next-line require-jsdoc
  getTruncatedContentState(editorState) {
    const content = stateToHTML(editorState.getCurrentContent());
    const {
      maxContentSize: { bytes: maxBytes, warning },
    } = this.props;

    if (byteCount(content) > maxBytes) {
      const endTagSize = 10;
      const blocksFromHTML = convertFromHTML(
        truncateByBytes(content, maxBytes - endTagSize).replace(/(<|<\/|<\/[a-z]{0,10})$/, ''),
      );
      const contentState = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap,
      );

      Modal.warning({
        title: 'Warning',
        content: <div>{warning}</div>,
      });

      return EditorState.push(editorState, contentState, 'insert-fragment');
    }

    return editorState;
  }

  focus = () => this.editor.focus();

  onChange = (editorState) => {
    const {
      maxContentSize: { bytes: maxBytes },
    } = this.props;

    this.setState(
      {
        editorState: maxBytes ? this.getTruncatedContentState(editorState) : editorState,
      },
      () => {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.getEditorData(stateToHTML(this.state.editorState.getCurrentContent()));
      },
    );
  };

  // eslint-disable-next-line require-jsdoc
  render() {
    const { placeholder, ariaLabel } = this.props;
    const { settings, editorState } = this.state;

    const { plugins, Toolbar, LinkButton } = settings;
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
            plugins={plugins}
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
          />
          <Toolbar>
            {(externalProps) => (
              <Row justify="center">
                <Space wrap>
                  <Row wrap={false} className="toolbar-button-group">
                    <BoldButton {...externalProps} />
                    <ItalicButton {...externalProps} />
                    <UnderlineButton {...externalProps} />
                    <UnorderedListButton {...externalProps} />
                    <OrderedListButton {...externalProps} />
                    <LinkButton {...externalProps} />
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
  maxContentSize: PropTypes.shape({
    bytes: PropTypes.number,
    warning: PropTypes.node,
  }),
};

RichText.defaultProps = {
  placeholder: '',
  ariaLabel: '',
  maxContentSize: {
    bytes: null,
    warning: null,
  },
};

export default RichText;
