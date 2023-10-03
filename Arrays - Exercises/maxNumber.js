function maxNumber(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let isTopNumber = true;
    let num = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let rightnumber = array[j];
      if (rightnumber >= num) {
        isTopNumber = false;
        break;
      }
    }
    if (isTopNumber == true) {
      newArr.push(num);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])