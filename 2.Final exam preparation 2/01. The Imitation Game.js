function theImitationGame(input) {
  let message = input.shift();
  let tokens = input.shift();
  while (tokens !== "Decode") {
    let command = tokens.split("|")[0];
    switch (command) {
      case "Move":
        let numberOfLetters = Number(tokens.split("|")[1]);
        let str = message.substring(0, numberOfLetters);
        message = message.split(str).join("");
        message += str;

        break;

      case "Insert":
        let index = Number(tokens.split("|")[1]);
        let value = tokens.split("|")[2];
        message = message.split("");
        message.splice(index, 0, value);
        message = message.join("");

        break;
      case "ChangeAll":
        let substring = tokens.split("|")[1];
        let replacement = tokens.split("|")[2];
        message = message.split(substring).join(replacement);
    }
    tokens = input.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
