let stringlenght = (string) => {
  console.log(string.length);
  if (string.length > 1 && string.length < 10) {
    return true
  } else { 
    return false
  }
}

// console.log(stringlenght("Good Work"));

module.exports = stringlenght