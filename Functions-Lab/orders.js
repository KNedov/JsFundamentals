function orders(product, orders) {
  /*coffee - 1.50
    water - 1.00
    coke - 1.40
    snacks - 2.00 */
  let totalPrice = 0;
  let coffeePrice = 1.5;
  let waterPrice = 1.0;
  let cokePrice = 1.4;
  let snacksPrice = 2.0;
  switch (product) {
    case "coffee":
      totalPrice = coffeePrice * orders;
      break;
    case "water":
      totalPrice = waterPrice * orders;
      break;
    case "coke":
      totalPrice = cokePrice * orders;
      break;
    case "snacks":
      totalPrice = snacksPrice * orders;
      break;
  }
  console.log(totalPrice.toFixed(2));
}
orders("water", 5);
orders("coffee", 2);
orders("coke", 7);
