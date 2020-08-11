import { Children } from 'react';

/**
 * Expand react children from an array of children
 *
 * In order to create a very usable component API a pattern like `<List><List.Item /></List>` is very useful. To enhance
 * the implementation this helper will take in an array of children and an array of components which you want expanded.
 *
 * @example
 * // Given some component implementation
 * <List>
 *   Content after list 1
 *   <List.Item>One</List.Item>
 *   Content after list 2
 *   <List.Item>Two</List.Item>
 *   Content after list 3
 * </List>
 *
 * // Extract the Items from the children
 * const Item = ({ children }) => (<li>{children}</li>);
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
 *
 * // Renders as
 * <div>
 *   <ul>
 *     <li>One</li>
 *     <li>Two</li>
 *   </ul>
 *   Content after list 1
 *   Content after list 2
 *   Content after list 3
 * </div>
 *
 * @param {array} children children
 * @param {array} childrenToExpand Children which will be ex
 * @returns {[array, object.<string, array.ChildNode>]} Returns an array of children leftover from the expanded children
 */
export default function expandChildren(children, childrenToExpand) {
  const defaultReturn = [children, {}];
  if (!Array.isArray(childrenToExpand)) throw new Error('childrenToExpand must be an array');
  if (!Array.isArray(children) || !children.length || !childrenToExpand.length)
    return defaultReturn;

  const nextChildren = [];
  const expandedChildren = {};
  Children.forEach(children, (child) => {
    const childType = childrenToExpand.find((type) => child.type === type);
    if (childType) {
      if (!expandedChildren[childType.name]) expandedChildren[childType.name] = [];
      expandedChildren[childType.name].push(child);
    } else {
      nextChildren.push(child);
    }
    return child;
  });
  return [nextChildren, expandedChildren];
}
