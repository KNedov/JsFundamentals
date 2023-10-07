function addAndRemove(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      newArray.push(i + 1);
    } else {
      newArray.pop(i + 1);
    }
  }
  if (newArray == 0) {
    console.log("Empty");
  } else {
    console.log(newArray.join(" "));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
