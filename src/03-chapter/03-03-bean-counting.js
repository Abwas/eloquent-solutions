export {
  countBs,
  countChar
};

function countChar(word, letter) {
  let count = 0;

  for (let index in word) {
    if (word[index] === letter) {
      count += 1;
    }
  }

  return count;
}

function countBs(word) {
  return countChar(word, 'B');
}
