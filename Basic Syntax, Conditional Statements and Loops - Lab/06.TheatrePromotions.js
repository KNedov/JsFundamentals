function ex(day, age) {
    let price;
    if (age >= 0 && age <= 122) {
      switch (day) {
        case "Weekday":
          if (18 < age && age <= 64) {
            price = 18;
          } else {
            price = 12;
          }
          break;
        case "Weekend":
          if (18 < age && age <= 64) {
            price = 20;
          } else {
            price = 15;
          }
          break;
        case "Holiday":
          if (18 < age && age <= 64) {
            price = 12;
          } else if (0 <= age && age <= 18) {
            price = 5;
          } else {
            price = 10;
          }
          break;
      }
      console.log(`${price}$`);
    } else {
      console.log("Error!");
    }
  }ex('Weekday', 42)
   ex('Holiday', -12 )
   ex('Holiday', 15 )