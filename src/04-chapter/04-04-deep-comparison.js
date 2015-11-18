function deepEqual(obj1, obj2) {
  let comparisonOne = compareObjects(obj1, obj2);
  let comparisonTwo = compareObjects(obj2, obj1);

  return comparisonOne && comparisonTwo;
}

function compareObjects(obj1, obj2) {
  var result;

  for (let key in obj1) {
    if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      deepEqual(obj1[key], obj2[key]);
    } else {
      result = obj1[key] === obj2[key];

      if (!result) {
        return result;
      } else {
      
      }
    }
  }

  return result; 
}

export default deepEqual;
