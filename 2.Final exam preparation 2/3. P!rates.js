function pirates(input) {
  let tokens = input.shift();
  let cities = {};
  while (tokens !== "Sail") {
    let [name, population, gold] = tokens.split("||");
    population = Number(population);
    gold = Number(gold);

    if (name in cities) {
      cities[name].population += population;
      cities[name].gold += gold;
    } else {
      cities[name] = { population, gold };
    }
    tokens = input.shift();
  }
  tokens = input.shift();

  while (tokens !== "End") {
    let splitedTokens = tokens.split("=>");
    let command = splitedTokens.shift();
    if (command == "Plunder") {
      let [name, population, gold] = splitedTokens;
      population = Number(population);
      gold = Number(gold);
      cities[name].population -= population;
      cities[name].gold -= gold;
      console.log(
        `${name} plundered! ${gold} gold stolen, ${population} citizens killed.`
      );
      if (cities[name].population <= 0 || cities[name].gold <= 0) {
        console.log(`${name} has been wiped off the map!`);
        delete cities[name];
      }
    }
    if (command == "Prosper") {
      let [name, gold] = splitedTokens;
      gold = Number(gold);
      if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        cities[name].gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${name} now has ${cities[name].gold} gold.`
        );
      }
    }

    tokens = input.shift();
  }
  let entries = Object.entries(cities);
  if (entries.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`
    );
    entries.forEach(([city, info]) => {
      console.log(
        `${city} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`
      );
    });
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }

}
pirates([
  "Tortuga||345000||1250",

  "Santo Domingo||240000||630",

  "Havana||410000||1100",

  "Sail",

  "Plunder=>Tortuga=>75000=>380",

  "Prosper=>Santo Domingo=>180",

  "End",
]);
pirates([
  "Nassau||95000||1000",

  "San Juan||930000||1250",

  "Campeche||270000||690",

  "Port Royal||320000||1000",

  "Port Royal||100000||2000",

  "Sail",

  "Prosper=>Port Royal=>-200",

  "Plunder=>Nassau=>94000=>750",

  "Plunder=>Nassau=>1000=>150",

  "Plunder=>Campeche=>150000=>690",

  "End",
]);
pirates([
  "Nassau||95000||1000",

  "San Juan||930000||1250",

  "Campeche||270000||690",

  "Port Royal||320000||1000",

  "Port Royal||100000||2000",

  "Sail",

  "Prosper=>Port Royal=>-200",

  "Plunder=>Nassau=>94000=>750",

  "Plunder=>Nassau=>1000=>150",

  "Plunder=>Campeche=>150000=>2000",
  "Plunder=>Port Royal=>150000=>3000",
  "Plunder=>San Juan=>150000=>1500",

  "End",
]);
