function firstLast(array) {
  let first = array.shift();
  let last = array.pop();
  console.log(`${Number(first) + Number(last)}`);
}
firstLast(["5", "15"]);
firstLast(["5", "15", "40"]);
