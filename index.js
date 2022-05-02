// Count the number of Chinese characters in a string (excluding everything else)
const countChinese = (str) => {
  let count = 0
  const REGEX_CHINESE =
    /[\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]/
  for (char of str) {
    if (char.match(REGEX_CHINESE)) {
      count++
    }
  }

  return count
}

module.exports = countChinese
