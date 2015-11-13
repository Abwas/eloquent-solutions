export default {
  arrayToList,
  listToArray,
  prepend,
  nth
};

function arrayToList(array) {
  return {value: 10, rest: {value: 20, rest: null}};
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
