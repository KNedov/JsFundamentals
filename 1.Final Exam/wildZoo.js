function wildZoo(input) {
  let zoo = {};
  let line = input.shift();
  while (line !== "EndDay") {
    let [command, ...rest] = line.split(": ");
    let [animalName, food, area] = rest[0].split("-");
    food = Number(food);
    if (command === "Add") {
      if (zoo.hasOwnProperty(animalName)) {
        zoo[animalName].food += food;
      } else {
        zoo[animalName] = { food, area };
      }
    }
    if (command === "Feed") {
      if (zoo.hasOwnProperty(animalName)) {
        zoo[animalName].food -= food;
        if (zoo[animalName].food <= 0) {
          delete zoo[animalName];
          console.log(`${animalName} was successfully fed`);
        }
      }
    }
    line = input.shift();
  }
  console.log("Animals:");
  for (let animal in zoo) {
    console.log(` ${animal} -> ${zoo[animal].food}g`);
  }
  console.log("Areas with hungry animals:");
  let object = {};
  for (let animal in zoo) {
    areas = zoo[animal].area;
    if (object.hasOwnProperty(areas)) {
      object[areas].cont += 1;
    } else {
      cont = 1;
      object[areas] = { cont };
    }
  }
  for (let areas in object) {
    console.log(`${areas}: ${object[areas].cont}`);
  }
}
wildZoo([
  "Add: Adam-4500-ByTheCreek",
  "Add: Maya-7600-WaterfallArea",
  "Add: Maya-1230-WaterfallArea",
  "Feed: Jamie-2000",
  "EndDay",
]);

wildZoo([
  "Add: Jamie-600-WaterfallArea",
  "Add: Maya-6570-WaterfallArea",
  "Add: Adam-4500-ByTheCreek",
  "Add: Bobbie-6570-WaterfallArea",
  "Feed: Jamie-2000",
  "Feed: Adam-2000",
  "Feed: Adam-2500",
  "EndDay",
]);
