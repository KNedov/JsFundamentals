

function thePianist(input) {
  let colection = {};
  let nOfPieces = Number(input.shift());
  for (let i = 0; i < nOfPieces; i++) {
    let pieces = input.shift().split("|");
    let [piece, composer, key] = pieces;
    colection[piece] = { piece, composer, key };
  }
  let command = input.shift().split("|");
  while (command[0] !== "Stop") {
    let action = command.shift();
    if (action == "Add") {
      let piece = command.shift();
      let composer = command.shift();
      let key = command.shift();
      if (piece in colection) {
        console.log(`${piece} is already in the collection!`);
      } else {
        colection[piece] = { piece, composer, key };
        console.log(
          `${piece} by ${colection[piece].composer} in ${colection[piece].key} added to the collection!`
        );
      }
    } else if (action == "Remove") {
      let pieceForRemove = command.shift();
      if (pieceForRemove in colection) {
        delete colection[pieceForRemove];
        console.log(`Successfully removed ${pieceForRemove}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceForRemove} does not exist in the collection.`
        );
      }
    } else if (action == "ChangeKey") {
      let pieceForChange = command.shift();
      let newKey = command.shift();
      if (pieceForChange in colection) {
        colection[pieceForChange].key = newKey;
        console.log(`Changed the key of ${pieceForChange} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceForChange} does not exist in the collection.`
        );
      }
    }

    command = input.shift().split("|");
  }
  for (let piece in colection) {
    console.log(
      `${piece} -> Composer: ${colection[piece].composer}, Key: ${colection[piece].key}`
    );
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
//   ]
//   )
