function requiredReadings(numbPages,pageRead1Hour,timeForReading) {
let hoursReadingPerDay = numbPages/pageRead1Hour
hoursReadingPerDay/= timeForReading
console.log(hoursReadingPerDay);
}
requiredReadings(212, 20, 2);
requiredReadings(432, 15, 4);
