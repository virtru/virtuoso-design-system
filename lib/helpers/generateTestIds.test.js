import generateTestIds from './generateTestIds';

const namespace = 'some_namespace';
const expectedNamespace = `vds-${namespace}`;
const defaultContainer = '_';

test('should throw error is no namespace', () => {
  expect(() => generateTestIds()).toThrowError();
});

test('should generate container test id', () => {
  expect(generateTestIds(namespace)).toEqual({ [defaultContainer]: expectedNamespace });
});

test('should generate test ids', () => {
  expect(generateTestIds(namespace, ['a', 'b'])).toEqual({
    [defaultContainer]: expectedNamespace,
    a: `${expectedNamespace}-a`,
    b: `${expectedNamespace}-b`,
  });
});

test('should generate custom container test id', () => {
  expect(generateTestIds(namespace, [], { containerKey: '$' })).toEqual({ $: expectedNamespace });
  expect(generateTestIds(namespace, ['a', 'b'], { containerKey: '$' })).toEqual({
    $: expectedNamespace,
    a: `${expectedNamespace}-a`,
    b: `${expectedNamespace}-b`,
  });
});
