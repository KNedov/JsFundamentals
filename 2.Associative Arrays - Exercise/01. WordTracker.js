function wordTracker(array) {
  let occurrences = {};
  let searchwords = array.shift().split(" ");
  for (let word of searchwords) {
    occurrences[word] = 0;
  }
  for (let word of array) {
    if (word in occurrences) {
      occurrences[word]++;
    }
  }
  let entries = Object.entries(occurrences).sort((b, a) => a[1] - b[1]);
  for (let [word, repeats] of entries) {
    console.log(`${word} - ${repeats}`);
  }
}
// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task'
//     ]
//     )
wordTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
