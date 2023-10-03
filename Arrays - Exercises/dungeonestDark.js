function dungeonestDark(arr) {
  let roomsInfo = arr[0];
  let rooms = roomsInfo.split("|");
  let health = 100;
  let coins = 0;
  let Dead = false;

  for (let i = 0; i < rooms.length; i++) {
    let room = rooms[i];
    let command = room.split(" ");

    //If the first part is "potion":
    if (command[0] == "potion") {
      let healthPoints = Number(command[1]);
      if (healthPoints + health > 100) {
        healthPoints = 100 - health;
        health = healthPoints + health;
        console.log(`You healed for ${healthPoints} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else {
        health = healthPoints + health;
        console.log(`You healed for ${healthPoints} hp.`);
        console.log(`Current health: ${health} hp.`);
      }
    }

    //If the first part is "chest":
    else if (command[0] == "chest") {
      coins += Number(command[1]);
      console.log(`You found ${Number(command[1])} coins.`);
    } //In any other case, you are facing a monster, you are going to fight.
    else {
      health -= command[1];
      if (health > 0) {
        console.log(`You slayed ${command[0]}.`);
      } else {
        console.log(`You died! Killed by ${command[0]}.`);
        console.log(`Best room: ${i + 1}`);
        Dead = true;
        break;
      }
    }
  }
  if (Dead == false) {
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
