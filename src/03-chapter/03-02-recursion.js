function isEven(number) {
  const remainder = number % 2;
  let result;

  if (remainder === 0) {
    result = true;
  } else if (remainder === 1) {
    result = false;
  } else {
    return isEven(-remainder);
  }

  return result;
};

export default isEven;
