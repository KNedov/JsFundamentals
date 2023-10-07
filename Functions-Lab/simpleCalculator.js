function simpleCalculcator(numOne, numTwo, operator) {
  /*Write a function that receives three parameters – two numbers and an operator 
    (string) – and calculates the result depending on the operator. Operator can be
     'multiply', 'divide', 'add'or 'subtract'. Try to solve this task using arrow functions. */
  let result = 0;
  switch (operator) {
    case "add":
      result = numOne + numTwo;
      break;
    case "subtract":
      result = numOne - numTwo;
      break;
    case "multiply":
      result = numOne * numTwo;
      break;
    case "divide":
      result = numOne / numTwo;
      break;
  }
  console.log(result);
}
simpleCalculcator(5, 5, "multiply");
simpleCalculcator(40, 8, "divide");
simpleCalculcator(12, 19, "add");
simpleCalculcator(50, 13, "subtract");
