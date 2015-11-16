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

function listToArray(list, array) {
  let result = array || [];

  result.push(list.value);

  if (list.rest !== null) {
    return listToArray(list.rest, result);
  } else {
    return result;
  }
}

function prepend(element, list) {
  let result = {};

  result.value = element;
  result.rest = list;

  return result;
}

function nth(list, position) {
  return 20;
}
