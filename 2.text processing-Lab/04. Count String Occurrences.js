function countStringOccurrences(string, searchedWord) {
  let splitString = string.split(" ");
  let counter = 0;
  for (const word1 of splitString) {
    if (word1 == searchedWord) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurrences("This is a word and it also is a sentence", "is");
countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
);
