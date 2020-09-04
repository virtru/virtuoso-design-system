/**
 * Get choice of choices from chosen
 *
 * @param {Array.strings} choices Choices available
 * @param {string} chosen Chosen choice
 * @param {string|null} defaultChoice Fallback choice
 * @returns {string|null} Returns the choice, default choice or null if undefined or error exists
 */
export default (choices, defaultChoice) => {
  const dummyFn = () => null;
  if (!Array.isArray(choices) || choices.some((choice) => typeof choice !== 'string')) {
    console.error('Choices is expected to be an array of strings.');
    return dummyFn;
  }
  if (defaultChoice && typeof defaultChoice !== 'string') {
    console.error('Default choice is expected to be undefined or a string.');
    return dummyFn;
  }
  return (chosen) => (choices.indexOf(chosen) !== -1 ? chosen : defaultChoice);
};
