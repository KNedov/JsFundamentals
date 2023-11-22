function nonDecreasingSubset(array) {
  let newArray = [];
  let element1 = 0;
  for (let i = 0; i < array.length; i++) {
    if (element1 <= array[i]) {
      newArray.push(array[i]);
      element1 = array[i];
    }
  }
  console.log(newArray.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
