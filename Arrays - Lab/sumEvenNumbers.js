function sumEvenNumbers(array) {
  let buffer = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i] % 2 == 0)) {
      buffer += Number(array[i]);
    }
  }

  console.log(buffer);
}
sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
