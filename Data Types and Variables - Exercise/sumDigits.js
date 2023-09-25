function sumDigits(num) {
  num = num.toString();
  let digit = 0;
  for (let i = 0; i < num.length; i++) {
    digit += Number(num[i]);
  }
  console.log(digit);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
