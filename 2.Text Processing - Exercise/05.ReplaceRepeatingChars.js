function repaceRepeatingChars(string) {
  let newString = "";
  let buffer = "";
  for (let char of string) {
    if (buffer !== char) {
      newString += char;
      buffer = char;
    }
  }
  console.log(newString);
}
repaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
// repaceRepeatingChars('qqqwerqwecccwd')
