function triplesOfLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        let Letter =
          String.fromCharCode(97 + i) +
          String.fromCharCode(97 + j) +
          String.fromCharCode(97 + k);
        console.log(Letter);
      }
    }
  }
}
triplesOfLatinLetters(3);
console.log("_______");
triplesOfLatinLetters(2);
console.log("_______");
triplesOfLatinLetters(4);
