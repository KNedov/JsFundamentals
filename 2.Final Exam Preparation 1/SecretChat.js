function secretChat(input) {
  let message = input.shift();
  let commands = input.shift();
  while (commands !== "Reveal") {
    let arrayOfComands = commands.split(":|:");
    let command = arrayOfComands.shift();
    if (command === "ChangeAll") {
        let [com1,com2]=arrayOfComands
        if (arrayOfComands.includes(com1)) {
          message = message.split(com1)
          message = message.join(com2);
          // secredMsg = secredMsg.replaceAll(com1, com2);
          console.log(message);
        }
      } else if (command == "Reverse") {
      let string = arrayOfComands.shift();
      let reversedString = string.split("").reverse().join("");
      if (message.includes(string)) {
        message = message.replace(string, reversedString);
        console.log(message);
      } else {
        console.log("error");
      }
    } else if (command == "InsertSpace") {
      let IndexofSpace = Number(arrayOfComands.shift());

      message = message.split("");
      message.splice(IndexofSpace, 0, " ");
      message = message.join("");
      console.log(message);
    }

    commands = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  "heVVodar!gniV",

  "ChangeAll:|:V:|:l",

  "Reverse:|:!gnil",

  "InsertSpace:|:5",

  "Reveal",
]);
secretChat([
  "Hiware?uiy",

  "ChangeAll:|:i:|:o",

  "Reverse:|:?uoy",

  "Reverse:|:jd",

  "InsertSpace:|:3",

  "InsertSpace:|:7",

  "Reveal",
]);
