function employees(arrayOfstring) {
  for (let employees of arrayOfstring) {
    let person = { name: employees, personalNumber: employees.length };
    let name = person.name;
    let personalNumber = person.personalNumber;

    console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
