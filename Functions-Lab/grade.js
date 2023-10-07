function formatGrade(gradeNum) {
  /*< 3.00 - "Fail"
· >= 3.00 and < 3.50 - "Poor"
· >= 3.50 and < 4.50 - "Good"
· >= 4.50 and < 5.50 - "Very good"
· >= 5.50 - "Excellent"*/

  let formatted = gradeNum.toFixed(2);
  let description = "";
  if (gradeNum < 3) {
    formatted = "2";
    description = "Fail";
  } else if (gradeNum < 3.5) {
    description = "Poor";
  } else if (gradeNum < 4.5) {
    description = "Good";
  } else if (gradeNum < 5.5) {
    description = "Very good";
  } else {
    description = "Excellent";
  }
  console.log(`${description} (${formatted})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);
formatGrade(5.5);
formatGrade(6);
