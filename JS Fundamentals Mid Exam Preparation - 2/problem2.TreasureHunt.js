function treasureHunt(array) {
let initialLoot=array.shift().split('|')
console.log(initialLoot);
while (array[0]!=="Yohoho!") {
    let token=array.shift().split(' ')
    let command=token.shift()
   
    if (command=='Loot') {
// · "Loot {item1} {item2}…{itemn}":
//   o Pick up treasure loot along the way. Insert the items at the beginning of the chest.
//   o If an item is already contained, don't insert it.
for (let el of token) {
    if (!initialLoot.includes(el)) {
        
        initialLoot.unshift(el)
        
    }
}

}
        
    }if (command=='Drop') {
// "Drop {index}":
//    o Remove the loot at the given position and add it at the end of the treasure chest.

//    o If the index is invalid, skip the command.
        
    }if (command=='Steel') {
//  · "Steal {count}":

//      o Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are.

//      o Print the stolen items separated by ", ":

//          "{item1}, {item2}, {item3} … {itemn}"
    }
}

treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);
