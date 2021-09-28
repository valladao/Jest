const uppercase = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject("Empty string")
      return
    }
    resolve(str.toUpperCase())
  })
}
module.exports = uppercase