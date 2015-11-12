export default {
  reverseArray,
  reverseArrayInPlace
};

function reverseArray(array) {
  let result = [];

  array.forEach(item => result.unshift(item));

  return result;
}

function reverseArrayInPlace(array) {
  var length = array.length;
  var index = 0;

  for (; index < length; index += 1) {
    array.push(array[length - 1 - index]);
  }

  array.splice(0, length);
}
