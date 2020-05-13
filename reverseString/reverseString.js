const reverseString = function (str) {
  let strIndexRev = str.length - 1;
  let newStr = "";
  for (let i = strIndexRev; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

module.exports = reverseString
