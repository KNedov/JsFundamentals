function passwordGenerator(array) {
  let [string1, string2, word] = array;
  let concatenatedString = string1 + string2;
  let newPassword = [];
  let i = 0;
  let vowelsChar = ["a", "e", "i", "o", "u"];
  for (let char of concatenatedString) {
    if (vowelsChar.includes(char)) {
      char = word[i].toUpperCase();
      i++;
      if (i > word.length - 1) {
        i = 0;
      }
    }
    newPassword.push(char);
  }
  let password = newPassword.reverse().join("");
  console.log(`Your generated password is ${password}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
// passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
// passwordGenerator(["areyousureaboutthisone","notquitebutitrustyou","disturbed",]);
