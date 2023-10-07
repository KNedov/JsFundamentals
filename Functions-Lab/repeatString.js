function repeatString(string, n) {
  let newString = "";
  for (let i = 1; i <= n; i++) {
    newString += string;
    
  }
  return newString;
}
console.log(repeatString("abc", 3))
console.log(repeatString("String", 2))
