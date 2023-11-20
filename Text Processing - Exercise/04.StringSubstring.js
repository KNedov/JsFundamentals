function stringSubstring(word, string) {
  let splitedString = string.toLowerCase().split(" ");
  if (splitedString.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
