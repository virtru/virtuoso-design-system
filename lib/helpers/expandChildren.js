// eslint-disable-next-line max-classes-per-file
import { Children } from 'react';

/**
 * Invalid Components Error
 */
export function InvalidComponentsError() {
  this.name = 'InvalidComponentsError';
  this.message =
    'Expected an array of Components or PureComponents which have their displayName defined in the second parameter.';
  this.stack = new Error().stack;
}
InvalidComponentsError.prototype = new Error();

/**
 * Invalid Children Error
 */
export function InvalidChildrenError() {
  this.name = 'InvalidChildrenError';
  this.message = 'Expected valid React children in the first parameter.';
  this.stack = new Error().stack;
}
InvalidChildrenError.prototype = new Error();

/**
 * Expand children for an enhanced component API
 *
 * **NOTE: You must add the `displayName` property to your component or code minification will break this feature.**
 *
 * This utility helps in the process of developing enhanced component APIs where you add specific components as children
 * and not render them with the rest of the children. This is useful to utilize components as flags or distinct structures.
 *
 * @example
 * ```jsx
 * // Given some component implementation
 * <List>
 *   Content after list 1
 *   <List.Item>One</List.Item>
 *   Content after list 2
 *   <List.Item>Two</List.Item>
 *   Content after list 3
 * </List>
 * ```
 *
 * ```jsx
 * // Extract the Items from the children
 * const Item = ({ children }) => (<li>{children}</li>);
 * Item.displayName = 'Item';
 *
 * const List = ({ children }) => {
 *   const [ nextChildren, { Item: itemChildren } ] = expandChildren(children, [ Item ]);
 *   return (
 *     <div>
 *       <ul>{itemChildren}</ul>
 *       {nextChildren}
 *     </div>
 *   );
 * }
 *
 * List.Item = Item;
 * ```
 *
 * ```html
 * <!-- Renders as -->
 * <div>
 *   <ul>
 *     <li>One</li>
 *     <li>Two</li>
 *   </ul>
 *   Content after list 1
 *   Content after list 2
 *   Content after list 3
 * </div>
 * ```
 *
 * @param {array} children Children which will be searched
 * @param {array} components Components to extract from children property
 * @returns {[array, object.<string, array.ChildNode>]} Returns an array of children leftover from the extracted children
 */
export default function expandChildren(children, components) {
  if (!Array.isArray(components)) throw new InvalidComponentsError();

  // Ensure the components are actually React components and have displayName set
  const componentNames = components.map((component) => {
    if (
      typeof component !== 'function' ||
      typeof component.displayName !== 'string' ||
      component.displayName === ''
    )
      throw new InvalidComponentsError();

    return component.displayName;
  });

  try {
    Children.count(children);
  } catch (e) {
    throw new InvalidChildrenError();
  }

  const nextChildren = [];
  const expandedChildren = {};
  Children.forEach(children, (child) => {
    if (
      !child ||
      typeof child !== 'object' ||
      typeof child.type !== 'function' ||
      componentNames.indexOf(child.type.displayName) === -1
    )
      return nextChildren.push(child);
    if (!expandedChildren[child.type.displayName]) expandedChildren[child.type.displayName] = [];
    return expandedChildren[child.type.displayName].push(child);
  });
  return [nextChildren, expandedChildren];
}
