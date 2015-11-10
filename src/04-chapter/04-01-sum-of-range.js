export {
  sum,
  range
};

function sum(array) {
  let result = 0;

  array.forEach(item => result += item);

  return result;
}

function range(first, last, step) {
  let start = first;
  let target = last;
  let result = [];
  let pass = step || 1;

  if (start < target && pass > 0) {
    while (start <= target) {
      result.push(start);
      start += pass;
    }
  } else if (start > target && pass < 0) {
    while (start >= target) {
      result.push(start);
      start += pass;
    }
  } else {
    throw new Error('Please, verify the arguments that was passed');
  }

  return result;
}
