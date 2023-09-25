function spiceMustFlow(startingYield) {
  let livingYelds = 0;
  let workerconsumе = 26;
  let dayCounters = 0;
  for (let yelds = startingYield; yelds >= 100; yelds = yelds - 10) {
    livingYelds += yelds - workerconsumе;
    dayCounters++;
  }
  if (livingYelds >26) {
    livingYelds -= workerconsumе;
  }
  console.log(dayCounters);
  console.log(livingYelds);
}
spiceMustFlow(111);
spiceMustFlow(450);
