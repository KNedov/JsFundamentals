function convertToJson(firstName, lastName, haircolor) {
  let object = {
    name: firstName,
    lastName: lastName,
    hairColor: haircolor,
  };
  console.log(JSON.stringify(object));
}
convertToJson("George", "Jones", "Brown");
convertToJson("Peter", "Smith", "Blond");
