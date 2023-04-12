import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { RichUtils, EditorState, convertFromHTML, ContentState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
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

const createEditorStateFromHTML = (html) => {
  const blocksFromHTML = convertFromHTML(html);

  return ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
};

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

const toolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});

const plugins = [toolbarPlugin, linkPlugin, textAlignmentPlugin, undoPlugin];

const { Toolbar } = toolbarPlugin;

const { LinkButton } = linkPlugin;

const RichText = forwardRef(
  (
    {
      placeholder,
      ariaLabel,
      spellCheck,
      maxContentSize,
      value,
      defaultValue,
      getEditorData,
      onChange,
    },
    ref,
  ) => {
    const editorWrapRef = useRef(null);
    const editorRef = useRef(null);
    const modal = useRef(null);

    const [editorState, setEditorState] = useState(() => {
      if (value || defaultValue) {
        return EditorState.createWithContent(createEditorStateFromHTML(value || defaultValue));
      }

      return EditorState.createEmpty();
    });

    const focus = useCallback(() => editorRef.current?.focus(), []);

    const editorChangeHandler = useCallback(
      (newEditorState) => {
        setEditorState(newEditorState);

        const html = stateToHTML(newEditorState.getCurrentContent());

        getEditorData(html); // Check prop types
        onChange(html);

        if (maxContentSize?.bytes && !modal.current && byteCount(html) > maxContentSize.bytes) {
          modal.current = Modal.warning({
            title: 'Warning',
            content: <div>{maxContentSize.warning}</div>,
            onOk: () => {
              modal.current = null;
            },
          });
        }
      },
      [getEditorData, maxContentSize.bytes, maxContentSize.warning, onChange],
    );

    const editorHandleKeyCommandHandler = useCallback(
      (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
          editorChangeHandler(newState);

          return true;
        }

        return false;
      },
      [editorChangeHandler, editorState],
    );

    const getToolbarButtonProps = useCallback(
      (externalProps) => ({
        ...externalProps,
        buttonProps: { ...externalProps.buttonProps, tabIndex: -1 },
      }),
      [],
    );

    useImperativeHandle(
      ref,
      () => ({
        focus,
      }),
      [focus],
    );

    useEffect(() => {
      editorWrapRef.current
        .querySelectorAll(`.${buttonStyles.button}:not([tabindex])`)
        .forEach((button) => {
          button.setAttribute('tabindex', '-1');
        });
    }, []);

    useEffect(() => {
      if (typeof value !== 'undefined') {
        const newEditorState = createEditorStateFromHTML(value);

        if (stateToHTML(newEditorState) !== stateToHTML(editorState.getCurrentContent())) {
          setEditorState(EditorState.createWithContent(newEditorState));
        }
      }
    }, [editorState, value]);

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div data-testid="richText" ref={editorWrapRef} className={styles.editor} onClick={focus}>
        <Editor
          ref={editorRef}
          plugins={plugins}
          placeholder={placeholder}
          ariaLabel={ariaLabel}
          spellCheck={spellCheck}
          editorState={editorState}
          onChange={editorChangeHandler}
          handleKeyCommand={editorHandleKeyCommandHandler}
        />

        <Toolbar>
          {(externalProps) => (
            <Row justify="center">
              <Space wrap>
                <Row wrap={false} className="toolbar-button-group">
                  <BoldButton {...getToolbarButtonProps(externalProps)} />
                  <ItalicButton {...getToolbarButtonProps(externalProps)} />
                  <UnderlineButton {...getToolbarButtonProps(externalProps)} />
                  <UnorderedListButton {...getToolbarButtonProps(externalProps)} />
                  <OrderedListButton {...getToolbarButtonProps(externalProps)} />
                  <LinkButton {...getToolbarButtonProps(externalProps)} />
                </Row>
              </Space>
            </Row>
          )}
        </Toolbar>
      </div>
    );
  },
);

RichText.propTypes = {
  getEditorData: PropTypes.func, // Added onChange event for more consistency but keep this for backward compatibility
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  spellCheck: PropTypes.bool,
  maxContentSize: PropTypes.shape({
    bytes: PropTypes.number,
    warning: PropTypes.node,
  }),
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

RichText.defaultProps = {
  getEditorData: () => {},
  placeholder: '',
  ariaLabel: '',
  spellCheck: true, // Take note of: https://draftjs.org/docs/api-reference-editor/#spellcheck
  maxContentSize: {
    bytes: null,
    warning: null,
  },
  defaultValue: '',
  value: undefined,
  onChange: () => {},
};

export default RichText;
