function cats(catsAsString) {
  {
    class Cats {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      Meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }
    let cats = [];
    for (let catsasString of catsAsString) {
      let splitArray = catsasString.split(" ");
      let name = splitArray[0];
      let age = splitArray[1];
      let cat = new Cats(name, age);
      cats.push(cat);
    }
    for (let cat of cats) {
      cat.Meow();
    }
  }
}
cats(["Mellow 2", "Tom 5"]);
cats(["Candy 1", "Poppy 3", "Nyx 2"]);
