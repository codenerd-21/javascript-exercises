const removeFromArray = function (arr, ...element) {
  for (let x = 0; x < element.length; x++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element[x]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

module.exports = removeFromArray
