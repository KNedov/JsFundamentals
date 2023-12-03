function heroesOfCodeAndLogic(input) {
  let numberHero = input.shift();
  let heroes = {};
  for (let i = 0; i < numberHero; i++) {
    let hero = input.shift().split(" ");
    let name = hero.shift();
    let hp = Number(hero.shift());
    let mp = Number(hero.shift());
    heroes[name] = { hP: hp, mP: mp };
  }

  let tokens = input.shift();

  while (tokens !== "End") {
    let command = tokens.split(" - ")[0];
    if (command == "Heal") {
      let name = tokens.split(" - ")[1];
      let restoredHp = Number(tokens.split(" - ")[2]);
      let maxHealth = 100;
      let heroHealth = heroes[name].hP;
      if (heroHealth + restoredHp > maxHealth) {
        restoredHp = maxHealth - heroHealth;
      }
      heroHealth += restoredHp;
      heroes[name].hP = heroHealth;
      console.log(`${name} healed for ${restoredHp} HP!`);
    } else if (command == "Recharge") {
      let name = tokens.split(" - ")[1];
      let restoredMp = Number(tokens.split(" - ")[2]);
      let maxMP = 200;
      let heroMP = heroes[name].mP;
      if (heroMP + restoredMp > maxMP) {
        restoredMp = maxMP - heroMP;
      }
      heroMP += restoredMp;
      heroes[name].mP = heroMP;
      console.log(`${name} recharged for ${restoredMp} MP!`);
    } else if (command == "TakeDamage") {
      let name = tokens.split(" - ")[1];
      let damage = tokens.split(" - ")[2];
      let attacker = tokens.split(" - ")[3];
      let herolife = heroes[name].hP;
      herolife -= damage;
      heroes[name].hP = herolife;
      if (herolife > 0) {
        console.log(
          `${name} was hit for ${damage} HP by ${attacker} and now has ${herolife} HP left!`
        );
      } else {
        console.log(`${name} has been killed by ${attacker}!`);
        delete heroes[name];
      }
    } else if (command == "CastSpell") {
      let name = tokens.split(" - ")[1];
      let manaNeeded = Number(tokens.split(" - ")[2]);
      let nameSpell = tokens.split(" - ")[3];
      let heroMana = heroes[name].mP;
      if (heroMana - manaNeeded > 0) {
        let manaLeft = heroMana - manaNeeded;
        heroes[name].mP = manaLeft;
        console.log(
          `${name} has successfully cast ${nameSpell} and now has ${manaLeft} MP!`
        );
      } else {
        console.log(`${name} does not have enough MP to cast ${nameSpell}!`);
      }
    }

    tokens = input.shift();
  }
  for (let hero in heroes) {
    console.log(`${hero}`);
    let hP = heroes[hero].hP;
    let mP = heroes[hero].mP;
    console.log(`HP: ${hP}`);
    console.log(`MP: ${mP}`);
    //scores 78/100
  }
}
// heroesOfCodeAndLogic([
//   "2",
//   "Solmyr 85 120",
//   "Kyrre 99 50",
//   "Heal - Solmyr - 10",
//   "Recharge - Solmyr - 50",
//   "TakeDamage - Kyrre - 66 - Orc",
//   "CastSpell - Kyrre - 15 - ViewEarth",
//   "End",
// ]);
heroesOfCodeAndLogic([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
