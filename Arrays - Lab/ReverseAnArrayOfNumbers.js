function ReverseAnArrayOfNumbers(n, array) {
  let newArray = " ";
  for (let i = n - 1; i >= 0; i--) {
    newArray+=array[i]+" ";
  }
  console.log(newArray);
}
ReverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
ReverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
ReverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
