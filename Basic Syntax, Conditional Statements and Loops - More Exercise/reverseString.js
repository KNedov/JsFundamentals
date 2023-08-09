function ReverseString(word) {
  word = word + "";
  word = word.split("");
  word = word.reverse();
  word = word.join("");

  console.log(word);
}
ReverseString("Hello");
ReverseString(1234);
