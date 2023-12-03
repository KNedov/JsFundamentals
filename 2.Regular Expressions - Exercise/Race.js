function race(array) {
  let listOfParticipants = array.shift().split(", ");
  let command = array.shift();
  let namePattern = /[A-Za-z]/g;
  let distancePattern = /\d/g;
  let result = {};
  listOfParticipants.forEach((name) => (result[name] = 0));
  while (command !== "end of race") {
    let name = command.match(namePattern).join("");
    let matcheddistance = command.match(distancePattern);
    let distance = matcheddistance.map(Number).reduce((acc, val) => acc + val);

    if (name in result) {
      result[name] += distance;
    }

    command = array.shift();
  }
  let sortedEntries = Object.entries(result).sort((a, b) => b[1] - a[1]);
  console.log(`1st place: ${sortedEntries[0][0]}`);
  console.log(`2nd place: ${sortedEntries[1][0]}`);
  console.log(`3rd place: ${sortedEntries[2][0]}`);
}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
