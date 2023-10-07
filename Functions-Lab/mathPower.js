function mathPow(int, pow) {
  let sum = 1;
  for (let i = 1; i <= pow; i++) {
    sum *= int;
  }
  console.log(sum);
}
mathPow(2, 8);
mathPow(3, 4);

