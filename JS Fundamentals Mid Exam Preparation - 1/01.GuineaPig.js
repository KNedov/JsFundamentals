function guineaPig(array) {
  let newArray = array.map(Number);
  let [food, hay, cover, weight] = newArray;
  let foodInGr = food * 1000;
  let hayInGr = hay * 1000;
  let coverInGr = cover * 1000;
  let weightInGr = weight * 1000;

  for (let day = 1; day <= 30; day++) {
    if (foodInGr < 300) {
      console.log("Merry must go to the pet store!");
      return;
    }
    foodInGr -= 300;
    if (day % 2 == 0) {
      let percentHay = 0.05 * foodInGr;
      if (hayInGr < percentHay) {
        console.log("Merry must go to the pet store!");
        return;
      }
      hayInGr -= percentHay;
    }
    if (day % 3 == 0) {
      let percentCover = weightInGr / 3;
      if (percentCover > coverInGr) {
        console.log("Merry must go to the pet store!");
        return;
      }
      coverInGr -= percentCover;
    }
  }
  console.log(
    `Everything is fine! Puppy is happy! Food: ${(foodInGr / 1000).toFixed(
      2
    )}, Hay: ${(hayInGr / 1000).toFixed(2)}, Cover: ${(
      coverInGr / 1000
    ).toFixed(2)}.`
  );
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
