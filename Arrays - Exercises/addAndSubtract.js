function addAndSubtract(arr) {
  let oldArr = 0;
  let newArr = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    oldArr += num;

    if (num % 2 == 0) {
      num += i;
    } else {
      num -= i;
    }
    newArr += num;
    arr[i] = num;
  }
  console.log(arr);
  console.log(oldArr);
  console.log(newArr);
}
addAndSubtract([5, 15, 23, 56, 35]);
