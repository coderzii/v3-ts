/*
 * @Date: 2022-01-11
 * @Description: extends 继承
 */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log("=>", "person eating");
  }
}

class Student extends Person {
  sno: number;

  constructor(name: string, age: number, sno: number) {
    //  call superType's constructor before subType's initialization && in the 1st line
    super(name, age);

    this.sno = sno;
  }

  studying() {
    console.log("=>", "studying");
  }

  eating(): void {
    super.eating();
    console.log("=>", "student eating");
  }
}

const stu = new Student("jack", 24, 11);
console.log("=>", stu);
stu.eating();
