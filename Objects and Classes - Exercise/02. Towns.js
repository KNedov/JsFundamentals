function towns(array) {
  for (const town of array) {
    let tokens = town.split(" | ");
    let object = {
      town: tokens[0],
      latitude: Number(tokens[1]).toFixed(2),
      longitude: Number(tokens[2]).toFixed(2),
    };
    console.log(object);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
// towns(["Plovdiv | 136.45 | 812.575"]);
