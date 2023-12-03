function bombNumbers(array1, array2) {
  let [bomb, power] = array2;
  while (array1.includes(bomb)) {
      let start = Math.max(0, array1.indexOf(bomb) - power);
      array1.splice(start, power * 2 + 1);
  }
  console.log(array1.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
bombNumbers([0, 1, 2], [2, 1]);
