/*
 * @Date: 2022-01-11
 * @Description:
 */

class Animal {
  action() {
    console.log("=>", "animal running");
  }
}

class Dog extends Animal {
  action() {
    console.log("=>", "dog running");
  }
}

class Fish extends Animal {
  action() {
    console.log("=>", "fish swimming");
  }
}

function makeActions(animals: Animal[]): void {
  animals.forEach((item) => {
    item.action();
  });
}

makeActions([new Fish(), new Dog()]);
