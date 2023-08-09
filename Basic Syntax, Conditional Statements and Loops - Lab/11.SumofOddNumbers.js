function printNextOddNumbers(n) {
    let currentNumber = 1;
    let oddNumbers = [];
  
    for (let i = 0; i < n; i++) {
      oddNumbers.push(currentNumber);
      currentNumber += 2;
    }
  
    const oddNumbersSum = oddNumbers.reduce((sum, number) => sum + number, 0);
  
    oddNumbers.forEach(number => {
      console.log(number);
    });
  
    console.log(`Sum: ${oddNumbersSum}`);
  }printNextOddNumbers(5);
  printNextOddNumbers(3);