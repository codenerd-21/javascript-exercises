//const number = Math.floor(Math.random() * 1000);
const repeatString = function (str, num) {
  let newStr = "";
  if (num < 0) {
    newStr = "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }
  return newStr;
}
module.exports = repeatString
