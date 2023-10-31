function solve(array) {
  let newChat = [];

  for (let el of array) {
    let newArr = el.split(" ");
    let command = newArr.shift();

    if (command == "end") {
      break;
    } else if (command == "Chat") {
      let element = newArr.shift();
      newChat.push(element);
    } else if (command == "Delete") {
      let element = newArr.shift();
      if (newChat.includes(element)) {
        let index = newChat.indexOf(element);
        newChat.splice(index, 1);
      }
    } else if (command == "Edit") {
      let element = newArr.shift();
      if (newChat.includes(element)) {
        let index = newChat.indexOf(element);
        let editedName = newArr[0];
        newChat.splice(index, 1);
        newChat.splice(index, 0, editedName);
      }
    } else if (command == "Pin") {
      let element = newArr.shift();
      let index = newChat.indexOf(element);
      let pinedName = String(newChat.splice(index, 1));
      newChat.push(pinedName);
    } else if (command == "Spam") {
      for (const el of newArr) {
        let newElement = newChat.push(el);
      }
    }
  }
  console.log(newChat.join("\n"));
}

solve([
  "Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end",
]);
solve(["Chat Hello", "Delete John", "Pin Hi", "end"]);
// solve([
//   "Chat John",

//   "Spam Let's go to the zoo",

//   "Edit zoo cinema",

//   "Chat tonight",

//   "Pin John",

//   "end",
// ]);
