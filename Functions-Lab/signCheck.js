function signChek(numOne, numTwo, numThree) {
  let result = 0;
  result += numOne * numTwo * numThree;
  result < 0 ? console.log("Negative") : console.log("Positive");
}
signChek(5, 12, -15);
signChek(-6, -12, 14);
