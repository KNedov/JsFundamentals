function palindromeIntegers(array) {
  let arrayToString = 0;
  let palindrome = false;
  for (let i = 0; i < array.length; i++) {
    let arrayToString = "";
    arrayToString = array[i].toString();
    let reversedNum = "";
    for (let j = arrayToString.length - 1; j >= 0; j--) {
      reversedNum += arrayToString[j];
    }
    if (Number(reversedNum) == array[i]) {
      palindrome = true;
      console.log(palindrome);
    } else {
      palindrome = false;
      console.log(palindrome);
    }
  }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32,2,232,1010])
