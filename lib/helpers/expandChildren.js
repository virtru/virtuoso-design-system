import { Children } from 'react';

/**
 * Expand children
 *
 * @param {array} children children
 * @param {array} childrenToExpand Children which will be ex
 * @returns {[array, object.<string, array.ChildNode>]} Returns an array of children leftover from the expanded children
 */
export default function expandChildren(children, childrenToExpand) {
  const defaultReturn = [children, {}];
  if (!Array.isArray(childrenToExpand)) throw new Error('childrenToExpand must be an array');
  if (!Array.isArray(children) || !children.length || !childrenToExpand.length) return defaultReturn;

  const nextChildren = [];
  const expandedChildren = {};
  Children.forEach(children, child => {
    const childType = childrenToExpand.find(childType => child.type === childType);
    if (childType) {
      if (!expandedChildren[childType.name]) expandedChildren[childType.name] = []
      expandedChildren[childType.name].push(child);
    } else {
      nextChildren.push(child);
    }
    return child;
  });
  return [
    nextChildren,
    expandedChildren,
  ];
}
