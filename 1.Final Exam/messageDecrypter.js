function messageDecrypter(input = []) {
  let number = Number(input.shift());
  let pattern =
    /^([$%])(?<tag>[A-Z][a-z]{2,})\1:\s\[(?<first>\d+)\]\|\[(?<secondary>\d+)\]\|\[(?<third>\d+)\]\|$/;
  for (let i = 0; i < number; i++) {
    let message = input.shift();
    let valid;
    if ((valid = pattern.exec(message))) {
      if (message !== valid[0]) {
        console.log(`Valid message not found!`);
        continue;
      }
      let = valid.groups.tag;
      let first = +valid.groups.first;
      let secondary = +valid.groups.secondary;
      let third = +valid.groups.third;
      let decryptedMessage =
        String.fromCharCode(first) +
        String.fromCharCode(secondary) +
        String.fromCharCode(third);
      console.log(`${let}: ${decryptedMessage}`);
    } else {
      console.log("Valid message not found!");
    }
  }
}
messageDecrypter([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
messageDecrypter([
  "3",
  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
  "$tAGged$: [97][97][97]|",
  "$Request$: [73]|[115]|[105]|true",
]);
