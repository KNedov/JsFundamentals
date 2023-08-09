//            Friday  Saturday    Sunday
//Students    8.45      9.80       10.46
//Business    10.90     15.60        16
//Regular     15         20        22.50
function vacation(groupOfPeoplle, typeGroup, dayOfWeek) {
  let totalPrice = 0;
  groupOfPeoplle = Number(groupOfPeoplle);

  switch (typeGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        totalPrice = groupOfPeoplle * 8.45;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = groupOfPeoplle * 9.8;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = groupOfPeoplle * 10.46;
      }
      if (groupOfPeoplle >= 30) {
        totalPrice -= (totalPrice * 15) / 100;
      }
      break;
    case "Business":
      if (groupOfPeoplle >= 100) {
        groupOfPeoplle -= 10;
      }
      if (dayOfWeek === "Friday") {
        totalPrice = groupOfPeoplle * 10.9;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = groupOfPeoplle * 15.6;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = groupOfPeoplle * 16;
      }
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        totalPrice = groupOfPeoplle * 15;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = groupOfPeoplle * 20;
      } else if (dayOfWeek === "Sunday") {
        totalPrice = groupOfPeoplle * 22.5;
      }
      if (groupOfPeoplle >= 10 && groupOfPeoplle <= 20) {
        totalPrice -= (totalPrice * 5) / 100;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(10, "Regular", "Saturday");
vacation(100,"Business","Sunday")


//function vacation(peopleCount, type, day) {
//
//    let totalPrice = 0;
//    let price = 0;
//
//    if (type === "Students") {
//        switch (day) {
//            case "Friday": price = 8.45;
//                break;
//            case "Saturday": price = 9.80;
//                break;
//            case "Sunday": price = 10.46;
//            default: break;
//        }
//        if (peopleCount >= 30) {
//            totalPrice = price * peopleCount * 0.85;
//        } else {
//            totalPrice = price * peopleCount;
//        }
//    } else if (type === "Business") {
//        switch (day) {
//            case "Friday": price = 10.90;
//                break;
//            case "Saturday": price = 15.60;
//                break;
//            case "Sunday": price = 16;
//            default: break;
//        }
//        if (peopleCount >= 100) {
//            totalPrice = price * (peopleCount - 10);
//        } else {
//            totalPrice = price * peopleCount;
//        }
//    } else if (type === "Regular") {
//        switch (day) {
//            case "Friday": price = 15;
//                break;
//            case "Saturday": price = 20;
//                break;
//            case "Sunday": price = 22.50;
//            default: break;
//        }
//        if (peopleCount >= 10 && peopleCount <= 20) {
//            totalPrice = price * peopleCount * 0.95;
//        } else {
//            totalPrice = price * peopleCount;
//        }
//    }
//    console.log(`Total price: ${totalPrice.toFixed(2)}`);
//}
////vacation(30, "Students", "Sunday");
////vacation(40, "Regular", "Saturday");
//vacation(100,"Bussiness","Sunday")
//