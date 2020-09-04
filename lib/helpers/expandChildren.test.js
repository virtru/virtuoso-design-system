import React, { Component } from 'react';
import expandChildren, {
  InvalidChildrenError,
  InvalidComponentsError,
} from '@/helpers/expandChildren';

// eslint-disable-next-line require-jsdoc
function ExpandChild() {}
ExpandChild.displayName = 'ExpandChild';

test('should return an errors', () => {
  expect(() => expandChildren()).toThrowError(new InvalidComponentsError().message);
  expect(() => expandChildren([], undefined)).toThrowError(new InvalidComponentsError().message);
  expect(() => expandChildren([], {})).toThrowError(new InvalidComponentsError().message);
  expect(() => expandChildren([], [1])).toThrowError(new InvalidComponentsError().message);
  expect(() => expandChildren([{}], [])).toThrowError(new InvalidChildrenError().message);
});

test('should throw error if any components not have a displayName property', () => {
  const ChildOne = <ExpandChild />;
  const ChildTwo = <Component />;
  expect(() => expandChildren([ChildOne, ChildTwo], [ExpandChild, Component])).toThrow(
    new InvalidComponentsError().message,
  );
});

test('should return all children', () => {
  const ChildOne = <Component />;
  const ChildTwo = <Component />;
  expect(expandChildren([], [])).toEqual([[], {}]);
  expect(expandChildren([ChildOne, ChildTwo], [])).toEqual([[ChildOne, ChildTwo], {}]);
});

test('should expand one child', () => {
  const ChildOne = <Component />;
  const ChildTwo = <ExpandChild />;
  expect(expandChildren([ChildOne, ChildTwo], [ExpandChild])).toEqual([
    [ChildOne],
    { ExpandChild: [ChildTwo] },
  ]);
});

test('should expand all children', () => {
  const ChildOne = <ExpandChild />;
  const ChildTwo = <ExpandChild />;
  expect(expandChildren([ChildOne, ChildTwo], [ExpandChild])).toEqual([
    [],
    { ExpandChild: [ChildOne, ChildTwo] },
  ]);
});
