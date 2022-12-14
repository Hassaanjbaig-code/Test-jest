const reverseString = (string) => {
  let stringarr = [];
  if (string.length > 1) {
      for (let i = string.length - 1; i >= 0; --i) {
        stringarr.push(string[i]);
      }
      return stringarr.join("");
  } else { return "string lenght should be greaten than 1"}
};

// console.log(string("Hello"));

module.exports = reverseString;
