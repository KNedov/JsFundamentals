function searchForANumber(array1, array2) {
  let [first, second, third] = array2;
  let newArray = array1.splice(0, first);
  newArray.splice(0, second);
  let count = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === third) {
      count++;
    }
  }
  console.log(`Number ${third} occurs ${count} times.`);
}
searchForANumber(
  [5, 2, 3, 4, 3, 1, 6],

  [5, 2, 3]
);
searchForANumber(
  [7, 1, 5, 8, 2, 7],

  [3, 1, 5]
);
