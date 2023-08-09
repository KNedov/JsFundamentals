function printAndSum(start, end) {
  let buffer = "";
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if(i===end){buffer += i;
    sum += i;}
    else
    {buffer += i + " ";
    sum += i;}
  }
  console.log(buffer);
  console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
