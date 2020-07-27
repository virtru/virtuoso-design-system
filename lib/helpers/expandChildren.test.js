import React, { Component } from 'react';
import { expandChildren } from '@/helpers';

function ExpandChild() {}

test('should return an error', () => {
  expect(() => expandChildren([])).toThrowError();
  expect(() => expandChildren([], {})).toThrowError();
});

test('should return children and empty expand object', () => {
  const ChildOne = <Component />;
  const ChildTwo = <Component />;
  expect(expandChildren(undefined, [])).toEqual([undefined, {}]);
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
