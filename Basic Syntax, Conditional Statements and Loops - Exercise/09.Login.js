function login(input) {
  let userName = input[0];
  let counter = 0;

  for (let index = 1; index < input.length; index++) {
    let password = input[index].split(``);
    let passwordrev = password.reverse(" ");
    password = passwordrev.join("");
    counter++;

    if (password !== userName) {
      if (counter >= 4) {
        console.log(`User ${userName} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    } else if (password === userName) {
      console.log(`User ${userName} logged in.`);
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(['momo','omom'] )
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
