function tseamAccount(array) {
  let account = array.shift().split(" ");
  let command = array.shift().split(" ");
  while (command[0] !== "Play!") {
    if (command[0] == "Install") {
      if (!account.includes(command[1])) {
        account.push(command[1]);
      }
    } else if (command[0] == "Uninstall") {
      if (account.includes(command[1])) {
        let index = account.indexOf(command[1]);
        account.splice(index, 1);
      }
    } else if (command[0] == "Update") {
      if (account.includes(command[1])) {
        let index = account.indexOf(command[1]);
        account.splice(index, 1);
        account.push(command[1]);
      }
    } else if (command[0] == "Expansion") {
      let game = command[1].split("-");
      if (account.includes(game[0])) {
        let index = account.indexOf(game[0]);
        let expansion = `${game[0]}:${game[1]}`;
        account.splice(index + 1, 0, expansion);
      }
    }

    command = array.shift().split(" ");
  }
  console.log(account.join(" "));
}
tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
