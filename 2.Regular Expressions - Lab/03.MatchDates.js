function matchDates([string]) {
  let pattern =
    /(?<Day>\d{2})(?<separator>[-.\/])(?<Month>[A-Z][a-z]{2})\k<separator>(?<Year>\d{4})/g;
  let match = pattern.exec(string);
  while (match !== null) {
    let { Day, Month, Year } = match.groups;
    console.log(`Day: ${Day}, Month: ${Month}, Year: ${Year}`);

    match = pattern.exec(string);
  }

}
matchDates([
  "13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016",
]);
matchDates(["1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014"]);
