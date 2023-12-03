function arrayManipulations(array) {
  let arr = array.shift().split(" ").map(Number);

  for (let i = 0; i < array.length; i++) {
    let currentCommand = array[i].split(" ");
    let command = currentCommand[0];
    let firstNum = Number(currentCommand[1]);
    let secondNum = Number(currentCommand[2]);
    switch (command) {
      case "Add":
        arr.push(firstNum);
        break;
      case "Remove":
        arr = arr.filter((el) => el !== firstNum);
        break;
      case "RemoveAt":
        arr.splice(firstNum, 1);
        break;
      case "Insert":
        arr.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(arr.join(" "));
}
arrayManipulations;
arrayManipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]);
/*arrayManipulations([
  "6 12 2 65 6 42",

  "Add 8",

  "Remove 12",

  "RemoveAt 3",

  "Insert 6 2",]);*/
