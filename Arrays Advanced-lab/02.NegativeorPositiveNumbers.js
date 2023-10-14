function negativeOrPositiveNumbers(array) {
    let newArray = [];
   array.forEach(el=>el<0? newArray.unshift(el):newArray.push(el))
   console.log(newArray.join("\n"));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])