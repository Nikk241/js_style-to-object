'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};

  const splitSourceString = sourceString.split(';');

  for (let i = 0; i < splitSourceString.length; i++) {
    const valuesTrimmed = splitSourceString[i].trim();

    if (!valuesTrimmed) {
      continue;
    }

    const colonIndex = valuesTrimmed.indexOf(':');
    const key = valuesTrimmed.slice(0, colonIndex).trim();
    const value = valuesTrimmed.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}
module.exports = convertToObject;
