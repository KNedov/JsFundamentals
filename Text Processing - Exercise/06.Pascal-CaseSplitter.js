function pascalCase(pascalString) {
  let splitedtext = "";
  let index = 0;
  for (let char of pascalString) {
    let uppercase = char.toUpperCase();
    if (char == uppercase && index > 0) {
      splitedtext += ", " + char;
    } else {
      splitedtext += char;
    }
    index++;
  }
  console.log(splitedtext);
}
pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
// pascalCase('HoldTheDoor')
// pascalCase('ThisIsSoAnnoyingToDo')
