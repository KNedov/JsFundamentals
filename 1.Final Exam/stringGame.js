function stringGame(input) {
  let string = input.shift();
  let commands = input.shift();
  while (commands !== "Done") {
    let commandArray = commands.split(" ");
    let action = commandArray.shift();
    // If  actions is Change
    if (action === "Change") {
      let char = commandArray.shift();
      let replacement = commandArray.shift();
      while (string.includes(char)) {
        string = string.replace(char, replacement);
      }
      console.log(string);
      // if action is includes
    } else if (action === "Includes") {
      let substring = commandArray.shift();
      console.log(string.includes(substring) ? "True" : "False");
      // if action is End
    } else if (action === "End") {
      let substring = commandArray.shift();
      console.log(string.endsWith(substring) ? "True" : "False");
      // if action is Uppercase
    } else if (action === "Uppercase") {
      string = string.toUpperCase();
      console.log(string);
      // if action is FindIndex
    } else if (action === "FindIndex") {
      let char = commandArray.shift();
      let idx = string.indexOf(char);
      console.log(idx);
      // if action is Cut
    } else if (action === "Cut") {
      let startIdx = Number(commandArray.shift());
      let counter = Number(commandArray.shift());
      string = string.substring(startIdx, startIdx + counter);
      console.log(string);
    }
    commands = input.shift();
  }
}
stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
stringGame([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End string!//",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
