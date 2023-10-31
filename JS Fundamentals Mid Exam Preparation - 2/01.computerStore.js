function computerStore(array) {
  let customer = array[array.length - 1];
  let sumWithoutTaxes = 0;
  let taxes = 0.2;
  let discount = 0.1;
  let sumWithTaxes = 0;
  while (array.length > 1) {
    let price = Number(array.shift());
    if (price < 0) {
      console.log("Invalid price!");
      continue;
    } else {
      sumWithoutTaxes += price;
    }
  }
  taxes *= sumWithoutTaxes;
  sumWithTaxes = sumWithoutTaxes + taxes;
  if (customer == "special") {
    discount *= sumWithTaxes;
    sumWithTaxes -= discount;
  }
  if (sumWithTaxes == 0) {
    console.log("Invalid order!");
    return;
  } else {
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sumWithoutTaxes.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${sumWithTaxes.toFixed(2)}$`);
  }
}
computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
computerStore([
  "1023",
  "15",
  "-20",
  "-5.50",
  "450",
  "20",
  "17.66",
  "19.30",
  "regular",
]);
computerStore(["regular"]);
