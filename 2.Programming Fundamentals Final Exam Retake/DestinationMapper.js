function DestinationMapper(params) {
  let pattern = /([=\/])(?<name>[A-Z][A-Za-z][A-Za-z]+)\1/g;
  let matches = params.matchAll(pattern);
  let list = [];
  if (matches) {
    for (let match of matches) {
      let { name } = match.groups;
      list.push(name);
    }
  }
  let travelPoints = 0;
  for (let el of list) {
    travelPoints += el.length;
  }
  console.log(`Destinations: ${list.join(", ")}`);
  console.log(`Travel Points: ${travelPoints}`);
}
// DestinationMapper(("ThisIs some InvalidInput"))
DestinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
