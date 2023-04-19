import { EditorState } from 'draft-js';
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
