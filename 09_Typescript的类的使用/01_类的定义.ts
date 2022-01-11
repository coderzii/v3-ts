/*
 * @Date: 2022-01-11
 * @Description:
 */
class Person {
  // 类中定义的属性需要初始化
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log("=>", this.name + "eating");
  }
}

const p = new Person("jack", 20);

export {};
