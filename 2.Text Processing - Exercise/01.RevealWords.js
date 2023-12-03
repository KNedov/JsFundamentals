function revealWords(wordsStr, string) {
  let words = wordsStr.split(", ");
  let text = string.split(" ");

  for (let word of words) {
    let temp = "*".repeat(word.length);
    string = string.replace(temp, word);
  }
  console.log(string);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
