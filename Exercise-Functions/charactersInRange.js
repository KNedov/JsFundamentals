function charactersinRange(char1, char2) {
  let code = char1.charCodeAt();
  let code2 = char2.charCodeAt();
  let MinNumber = Math.min(code, code2);
  let MaxNumber = Math.max(code, code2);
  let middleCharacters = " ";
  for (let i = MinNumber + 1; i < MaxNumber; i++) {
    middleCharacters += String.fromCharCode(i) + " ";
  }
  console.log(middleCharacters);
}
charactersinRange("a", "d");
charactersinRange('#',':')
charactersinRange("C", "#");
