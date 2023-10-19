function muOnline(input) {
  let health = 100;
  let money = 0;
  let room = input.split("|");
  let roomCounter = 0;
  while (room.length > 0) {
    roomCounter++;
    let tokens = room.shift().split(" ");
    let command = tokens.shift();

    if (command == "potion") {
      let life = Number(tokens.shift());

      if (health + life > 100) {
        life = 100 - health;
      }
      health += life;
      console.log(`You healed for ${life} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command == "chest") {
      let findedMoney = Number(tokens.shift());
      money += findedMoney;
      console.log(`You found ${findedMoney} bitcoins.`);
    } else {
      let damage = Number(tokens.shift());
      health -= damage;
      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomCounter}`);
        return;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Bitcoins: ${money}`);
  console.log(`Health: ${health}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
// muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
