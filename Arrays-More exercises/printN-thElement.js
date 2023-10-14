function printNelement(array) {
  let newArray = [];
  for (let i = 0; i < array.length - 1; i += Number(array[array.length - 1])) {
    newArray.push(array[i]);
  }
  console.log(newArray.join(" "));
}
printNelement(["5", "20", "31", "4", "20", "2"]);
printNelement(["dsa", "asd", "test", "test", "2"]);
printNelement(["1", "2", "3", "4", "5", "6"]);