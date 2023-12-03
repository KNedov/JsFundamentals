function mirrorWord([input]) {
  let pattern = /([@|#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
  let match = pattern.exec(input);
  let newArray = [];
  let counter = 0;
  while (match) {
    let firstword = match[2];
    let secondWord = match[3];
    let reversedWord = secondWord.split("").reverse().join("");
    if (firstword == reversedWord) {
      newArray.push(`${firstword} <=> ${secondWord}`);
    }
    counter++;
    match = pattern.exec(input);
  }
  if (newArray.length > 0) {
    console.log(`${counter} word pairs found!`);
    console.log("The mirror words are:");
    console.log(newArray.join(", "));
  } else if(newArray.length<=0&&counter > 0) {
    console.log(`${counter} word pairs found!`);
    console.log(`No mirror words!`);
  }else{
    console.log(`No word pairs found!`);
    console.log(`No mirror words!`);
  }
}
mirrorWord([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWord(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
mirrorWord(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"])
