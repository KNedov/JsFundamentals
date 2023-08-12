function integerAndFloat(firstNum, secondNum, thirdNum) {
  let sum = firstNum + secondNum + thirdNum;
  sum = String(sum);
  /*let type=tipeof(sum)
    console.log(type);*/
  let typeInteger = true;
  for (let i = 0; i < sum.length; i++) {
    if (sum[i] === ".") {
      typeInteger = false;
    }
  }
  if (typeInteger == false) {
    console.log(`${sum} - Float`);
  } else {
    console.log(`${sum} - Integer`);
  }
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
