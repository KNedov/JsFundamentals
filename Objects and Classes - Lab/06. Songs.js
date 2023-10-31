function song(array) {
  let numberOfSong = array[0];
  let command = array[array.length - 1];

  for (let i = 1; i <= numberOfSong; i++) {
    let tokens = array[i].split("_");
    let [typeList, name, time] = tokens;
    if (typeList === command) {
      console.log(name);
    } else if (command == "all") {
      console.log(name);
    }
  }
}
song([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
song([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
song([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
