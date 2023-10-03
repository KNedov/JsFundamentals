function mergeArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum;
    if (i % 2 == 0) {
      sum = Number(arr1[i]) + Number(arr2[i]);

      newArr.push(sum);
    } else {
      sum = String(arr1[i]) + String(arr2[i]);
      newArr.push(sum);
    }
  }
  console.log(newArr.join(" - "));
}
mergeArrays(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
