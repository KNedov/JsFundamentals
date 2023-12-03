function sorting(array) {
  let sortedArray = [];
  array.sort((a, b) => a - b);

  while (array.length > 0) {
    let maxNum = array.pop();
    let minNum = array.shift();
    sortedArray.push(maxNum);
    sortedArray.push(minNum);
  }

  console.log(sortedArray.join(" "));
}
sorting([-4, 1, 21, 3, 52, 69, 63, 0, 31, 2, 18, 94]);
//sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
