function addAndSubract(num1, num2, num3) {
  let result1 = sum(num1, num2);
  let finalResult = subtact(result1, num3);
  console.log(finalResult);

  function sum(num1, num2) {
    return num1 + num2;
  }
  function subtact(num1, num2) {
    return num1 - num2;
  }
}
addAndSubract(23, 6, 10);
addAndSubract(1, 17, 30);
addAndSubract(42, 58, 100);
