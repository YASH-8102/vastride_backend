function quick_Sort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var newArray = [];
    var pivot = origArray.pop();
    var length = origArray.length;

    for (var i = 0; i < length; i++) {
      if (origArray[i].distance <= pivot.distance) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }

    return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
  }
}

module.exports = quick_Sort;
