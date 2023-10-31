function convertToObject(string) {
  let object = JSON.parse(string);
  let keys = Object.keys(object);
  let values = Object.values(object);
  for (const i of keys) {
    console.log(`${i}: ${object[i]}`);
  }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
