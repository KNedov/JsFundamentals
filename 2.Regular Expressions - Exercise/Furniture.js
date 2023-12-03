function furniture(arr) {
  let product = arr.shift();
  let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
  let items = [];
  let totalPrice = 0;
  while (product !== "Purchase") {
    let match = product.match(pattern);
    if (match) {
      let { name, price, qty } = match.groups;
      let furniturePrice = Number(price) * Number(qty);
      items.push(name);
      totalPrice += furniturePrice;
    }
    product = arr.shift();
  }
  console.log("Bought furniture:");
  if (items.length > 0) {
    console.log(items.join("\n"));
  }
  console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furniture([
  ">>LaptopИ<<312.2323!3",
  ">>TVИ<<300.21314!5",
  ">Invalid<<!5",
  ">>TVИ<<300.21314!20",
  ">>Invalid<!5",
  ">>TVИ<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
