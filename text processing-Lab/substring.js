function substring(string, startIndex, count) {
  let count2 = count + startIndex;
  let result = string.substring(startIndex, count2);
  console.log(result);
}
substring("ASentence", 1, 8);
substring("SkipWord", 4, 7);
