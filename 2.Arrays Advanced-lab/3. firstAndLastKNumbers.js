function firstAndLastKNumbers(arr) {
  let k = arr.shift();
  let firstArray = arr.slice(0, k);
  let lastArray = arr.slice(-k);
  console.log(firstArray.join(" "));
  console.log(lastArray.join(" "));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);
firstAndLastKNumbers([2, 7, 8, 9]);
