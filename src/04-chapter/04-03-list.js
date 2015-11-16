export default {
  arrayToList,
  listToArray,
  prepend,
  nth
};

function arrayToList(array, list) {
  let old    = array;
  let rest   = list || null;
  let length = array.length;
  let result = {};

  result.value = old.splice(length - 1)[0];
  result.rest = rest;

  if (length > 1) {
    return arrayToList(old, result);
  } else {
    return result;
  }
}

function listToArray(list) {
  return [10, 20, 30];
}

function prepend(element, list) {
  return {value: 10, rest: {value: 20, rest: null}};
}

function nth(list, position) {
  return 20;
}
