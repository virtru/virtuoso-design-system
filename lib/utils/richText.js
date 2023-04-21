import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';

/**
 * @param {String} [text]
 * @param {String} [html]
 * @returns {EditorState}
 */
export function createEditorState({ text, html } = {}) {
  if (html) {
    return EditorState.createWithContent(stateFromHTML(html));
  }

  if (text) {
    return EditorState.createWithText(text);
  }

  return EditorState.createEmpty();
}

/**
 * @param {EditorState} editorState
 * @returns {String}
 */
export function editorStateToHTML(editorState) {
  return stateToHTML(editorState.getCurrentContent());
}
