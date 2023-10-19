function sortAnArrayby2Criteria(array) {
  array.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(array.join("\n"));
}
sortAnArrayby2Criteria(["alpha", "beta", "gamma"]);
sortAnArrayby2Criteria(["alpha", "beta", "gamma", "vlpha"]);
sortAnArrayby2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
