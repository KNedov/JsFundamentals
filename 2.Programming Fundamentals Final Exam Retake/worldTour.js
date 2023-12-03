function worldTour(input) {
    let stops = input.shift();
    let command = input.shift().split(":");
    while (command[0] !== "Travel") {
      let action = command.shift();
      if (action == "Add Stop") {
        // •	"Add Stop:{index}:{string}":
        let [idx, string] = command;
        idx=Number(idx)
  
        if (stops.length >= idx || idx >= 0) {
          stops = stops.substring(0, idx) + string + stops.substring(idx);
          console.log(stops);
        }
      } else if (action == "Remove Stop") {
        // •	"Remove Stop:{start_index}:{end_index}":
        let [startIdx, endIdx] = command;
        startIdx = Number(startIdx);
        endIdx = Number(endIdx);
        if (
          stops.length > startIdx ||
          startIdx >= 0 ||
          stops.length > endIdx ||
          endIdx >= 0 ||
          endIdx > startIdx
        ) {
          let left = stops.substring(0, startIdx);
          let right = stops.substring(endIdx + 1);
          stops = left + right;
          console.log(stops);
        }
      } else if (action == "Switch") {
        // •	"Switch:{old_string}:{new_string}":
        let [oldString, newString] = command;
        if (stops.includes(oldString)) {
          stops = stops.replace(oldString, newString);
          console.log(stops);
        } else {
          console.log(stops);
        }
      }
      command = input.shift().split(":");
    }
  
    console.log(`Ready for world tour! Planned stops: ${stops}`);
  }
//   83/100
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:20:Rome",
  "Remove Stop:25:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

// worldTour([
//   "Albania:Bulgaria:Cyprus:Deuchland",
//   "Add Stop:3:Nigeria",
//   "Remove Stop:24:8",
//   "Switch:Albania: Azərbaycan",
//   "Travel",
// ]);
