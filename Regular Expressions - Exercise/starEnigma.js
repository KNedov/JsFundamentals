function starEnigma(array) {
  let n = Number(array.shift());
  let decryptedMsgs = [];
  let starPatterns = /[star]/gi;
  let attackedPlanets = [];
  let destroyedPlanets = [];
  for (let i = 0; i < n; i++) {
    let decryptedMsg = "";
    let msg = array[i];
    let match = msg.match(starPatterns);
    if (match) {
      let count = match.length;
      for (let char of msg) {
        let code = char.charCodeAt(0);
        code -= count;
        let newChar = String.fromCharCode(code);
        decryptedMsg += newChar;
      }
    } else {
      decryptedMsg = msg;
    }
    decryptedMsgs.push(decryptedMsg);
  }

  let planetPatterns =
    /@(?<planetName>[A-Z][a-z]+)[^@,\-!:>]*:(?<population>\d+)[^@,\-!:>]*!(?<attackType>[AD])![^@,\-!:>]*->(?<soldierCount>\d+)/;
  for (let msg of decryptedMsgs) {
    let match = msg.match(planetPatterns);
    if (match) {
      let { planetName, attackType } = match.groups;
      if (attackType == "A") {
        attackedPlanets.push(planetName);
      } else {
        destroyedPlanets.push(planetName);
      }
    }
  }
  if (attackedPlanets.length > 0) {
    let sortedAttackedPlanets = attackedPlanets.sort((a, b) =>
      a.localeCompare(b)
    );
  }
  if (destroyedPlanets.length > 0) {
    let SortedDestroyedPlanets = destroyedPlanets.sort((a, b) =>
      a.localeCompare(b)
    );
  }

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  attackedPlanets.forEach((planetName) => {
    console.log(`-> ${planetName}`);
  });
  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  destroyedPlanets.forEach((planetName) => {
    console.log(`-> ${planetName}`);
  });
}
// starEnigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
starEnigma([
  "3",
  "tt(''DGsvywgerx>6444444444%H%1B9444",
  "GQhrr|A977777(H(TTTT",
  "EHfsytsnhf?8555&I&2C9555SR",
]);
