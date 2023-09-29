function condenseArrayToNumber(numArray) {
  if (numArray.length === 1) {
    console.log(numArray[0]);
  } else {
    let condensedArray = [];
    for (let i = 0; i < numArray.length - 1; i++) {
      condensedArray.push(numArray[i] + numArray[i + 1]);
    }
    while (condensedArray.length !== 1) {
      let tempArray = condensedArray;
      condensedArray = [];
      for (let j = 0; j < tempArray.length - 1; j++) {
        condensedArray.push(tempArray[j] + tempArray[j + 1]);
      }
    }
    if (condensedArray.length == 1) {
      console.log(condensedArray[0]);
    }
  }
}
condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
