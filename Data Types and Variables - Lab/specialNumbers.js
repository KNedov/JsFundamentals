function specialNumbers(numb) {
  for (let i = 1; i <= numb; i++) {
    i = String(i);
    let sumOfNumb = 0;
    for (let j = 0; j < i.length; j++) {
      let digit = Number(i[j]);
      sumOfNumb += digit;
    }
    if (sumOfNumb == 5 || sumOfNumb == 7 || sumOfNumb == 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}
specialNumbers(15);
specialNumbers(20)
