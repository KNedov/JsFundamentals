function amazingNumber(numb) {
  numb = String(numb);
  let sum = 0;
  let amazing = false;
  for (let i = 0; i < numb.length; i++) {
    let nums = Number(numb[i]);
    sum += nums;
  }
  sum = String(sum);
  for (let i = 0; i < sum.length; i++) {
    sum[i] = Number(sum[i]);
    if (sum[i] == 9) {
      amazing = true;
    }
  }
  if (amazing == true) {
    console.log(`${numb} Amazing? True
    `);
  } else {
    console.log(`${numb} Amazing? False
    `);
  }
}
amazingNumber(1233);
amazingNumber(999);
