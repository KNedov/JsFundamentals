function englishNameOfTheLastDigit(number) {
  let num = number + "";
  let last = num.length - 1;
  lastLetter = num[last];
  lastLetter = Number(lastLetter);
  if (lastLetter == 1) {
    console.log("one");
  }
  if (lastLetter == 2) {
    console.log("two");
  }
  if (lastLetter == 3) {
    console.log("three");
  }
  if (lastLetter == 4) {
    console.log("four");
  }
  if (lastLetter == 5) {
    console.log("five");
  }
  if (lastLetter == 6) {
    console.log("six");
  }
  if (lastLetter == 7) {
    console.log("seven");
  }
  if (lastLetter == 8) {
    console.log("eight");
  }
  if (lastLetter == 9) {
    console.log("nine");
  }
  if (lastLetter == 0) {
    console.log("zero");
  }
}
englishNameOfTheLastDigit(146);
