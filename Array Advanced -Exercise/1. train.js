function train(array) {
  let wagons = array[0].split(" ").map((x) => Number(x));

  let capacity = Number(array[1]);

  for (let i = 2; i < array.length; i++) {
    let command = array[i];
    let token = command.split(" ");
    if (token[0] == "Add") {
      let passanger = token[1];
      wagons.push(passanger);
    } else {
      let passanger = Number(token[0]);
      for (let index = 0; index < wagons.length; index++) {
        if (wagons[index] + passanger <= capacity) {
          wagons[index] += passanger;

          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
//train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
