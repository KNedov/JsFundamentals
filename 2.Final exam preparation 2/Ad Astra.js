function adAstra([input]) {
  let products = [];
  let totalCalories = 0;
  let calForDay = 2000;
 
  let pattern =
    /([#|])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

  let matches = input.matchAll(pattern);

  for (let match of matches) {
    let { itemName, expirationDate, calories } = match.groups;
    calories = Number(calories);
    totalCalories += calories;
    products.push({itemName,expirationDate,calories});
  }
  let days = Math.floor(totalCalories / calForDay);
  console.log(`You have food to last you for: ${days} days!`);
  products.forEach((product) => {
    console.log(
      `Item: ${product.itemName}, Best before: ${product.expirationDate}, Nutrition: ${product.calories}`
    );
  });
}
adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|",
]);
adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
