function listOfProducts(array) {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    let newArray = [];
    newArray = array[i];
    console.log(`${i + 1}.${newArray}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
listOfProducts(["Watermelon", "Banana", "Apples"]);
