function perfectNumber(num) {
  let perfectNumber = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0 && i !== num) {
      perfectNumber += i;
    }
  }
  if (perfectNumber === num) {
    console.log(`We have a perfect number!`);
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
