const isArrayAllSameValue = (arr) => {
  //puts all elements in a HashSet
  let s = new Set(arr);
  return s.size === 1;
};

const equalArray = (a, b) => {
  a.sort();
  b.sort();
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = { equalArray, isArrayAllSameValue };
