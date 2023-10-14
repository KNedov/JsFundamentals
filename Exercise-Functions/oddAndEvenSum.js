function oddAndEvenSum(integer) {
  let intToString = String(integer);
  let oddNum = 0;
  let evenNum = 0;
  for (let i = 0; i < intToString.length; i++) {
    if (intToString[i] % 2 === 0) {
      evenNum += Number(intToString[i]);
    } else {
      oddNum += Number(intToString[i]);
    }
  }
  console.log(`Odd sum = ${oddNum}, Even sum = ${evenNum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
