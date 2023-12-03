function censoredWords(string, word) {
  console.log(string.split(word).join("*".repeat(word.length)));
}
censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");
censoredWords("Find the hidden hidden", "hidden");
