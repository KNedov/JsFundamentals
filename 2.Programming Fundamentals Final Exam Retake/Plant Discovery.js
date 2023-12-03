function plantDiscovery(input) {
  let numOfPlants = Number(input.shift());
  let colection = {};

  for (let i = 0; i < numOfPlants; i++) {
    let token = input.shift().split("<->");
    let [plant, rarity] = token;
    rarity = Number(rarity);
    colection[plant] = { plant, rarity };
  }
  let command = input.shift().split(" ");
  while (command[0] !== "Exhibition") {
    let action = command.shift();

    if (action == "Rate:") {
      let plant = command[0];
      let counter = 1;
      if (plant in colection) {
        let rate = Number(command[2]);
        let chek = colection[plant].rating;
        if (chek == null) {
          colection[plant].counter = counter;
          colection[plant].rating = rate;
        } else {
          colection[plant].counter += 1;
          let oldRate = Number(colection[plant].rating);
          let newRate = Number(command[2]);
          let sumOfRate = oldRate + newRate;
          colection[plant].rating = sumOfRate;
        }
      } else {
        console.log("error");
      }
    } else if (action == "Update:") {
      let plant = command[0];

      let newRarirty = Number(command[2]);
      if (plant in colection) {
        colection[plant].rarity = newRarirty;
      } else {
        console.log("error");
      }
    } else if (action == "Reset:") {
      let plant = command[0];
      if (plant in colection) {
        colection[plant].rating = 0;
      } else {
        console.log("error");
      }
    }

    command = input.shift().split(" ");
  }

  console.log("Plants for the exhibition:");
  for (let plant in colection) {
    let averageRating = colection[plant].rating / colection[plant].counter;
    if (!averageRating) {
      //NaN
      averageRating = 0;
    }
    console.log(
      `- ${plant}; Rarity: ${
        colection[plant].rarity
      }; Rating: ${averageRating.toFixed(2)} `
    );
  }
}
// 87/100
plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
plantDiscovery([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
