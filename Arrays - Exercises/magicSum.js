//Write a function, which prints all unique pairs in
  // an array of integers whose sum is equal to a given number.
function magicSum(arr, int) {
  for (let i = 0; i < arr.length; i++) {
    newArr = [];
    let firstint = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let secondint = arr[j];
      let sum = firstint + secondint;
      if (sum === int) {
        console.log(`${firstint} ${secondint}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
