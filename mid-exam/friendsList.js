function solve(array) {
  let friends = array.shift().split(",");
  let Blacklist = [];
  let blacklistCounter = 0;
  let lost = [];

  for (let token of array) {
    let splitedtoken = token.split(" ");
    let command = splitedtoken[0];
    //o "Report"
    if (command == "Report") {
      break;
      //o "Blacklist {name}"
    } else if (command == "Blacklist") {
      let name = splitedtoken[1];
      if (!friends.includes(name)) {
        console.log(`${name} was not found.`);
      } else {
        let index = friends.indexOf(name);
        friends.splice(index, 1);
        friends.splice(index, 0, "Blacklisted ");
        Blacklist.push(name);
        console.log(`${name} was blacklisted.`);
        blacklistCounter++;
      }
    }
    //o "Error {index}"
    else if (command == "Error") {
      let index = Number(splitedtoken[1]);
      let name = friends[index];
      let removedName = "";
      if (
        index > 0 &&
        index < friends.length &&
        !Blacklist.includes(name) &&
        !lost.includes(name)
      ) {
        if (name == "lost") {
          continue;
        }

        let iOFName = friends.indexOf(name);
        let losted = " Lost";
        removedName = friends.splice(iOFName, 1);
        friends.splice(iOFName, 0, losted);
        console.log(`${name} was lost due to an error.`);
        lost.push(losted);
      }
    } else if (command == "Change") {
      let index = Number(splitedtoken[1]);
      if (index >= 0 && index < friends.length) {
        let name = splitedtoken[2];
        let currentName = friends.splice(index, 1);
        friends.splice(index, 0, name);
        console.log(`${currentName} changed his username to ${name}.`);
      }
    }
    //o "Change {index} {new name}"
  }
  console.log(`Blacklisted names: ${blacklistCounter} `);
  console.log(`Lost names: ${lost.length}`);
  console.log(`${friends.join("")}`);
}
solve(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"]);
solve([
  "Mike, John, Eddie, William",
  "Error 3",
  "Error 3",
  "Change 0 Mike123",
  "Report",
]);
solve([
"Mike, John, Eddie, William",

"Blacklist Maya",

"Error 1",

"Change 4 George",

"Report",
]);
