/*
 * @Date: 2022-01-11
 * @Description:
 */

export {};

//1.typeof 的类型缩小
function printId(id: number | string) {
  // number | string
  console.log("=>", id);
  //"类型保护"语句 过程叫做"类型缩小"
  if (typeof id === "string") {
    //  string
    console.log("=>", id.toUpperCase());
  } else {
    //  number
    console.log("=>", id);
  }
}

//2.平等的类型缩小
type Direction = "left" | "top" | "left" | "rigth";
function printDirection(dir: Direction) {
  console.log("=>", dir);
  if (dir === "left") {
    console.log("=>", dir);
  } else if (dir === "top") {
    console.log("=>", dir);
  }
}

//3. instanceof

function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log("=>", time);
  } else {
    console.log("=>", time);
  }
}

//4. in 操作符
type Fish = {
  //函数类型
  swimming: () => void;
};

type Dog = {
  running: () => void;
};

//判断属性
function walk(animal: Fish | Dog) {
  if ("swimming" in animal) {
    animal.swimming();
  } else if ("running" in animal) {
    animal.running();
  }
}

const fish: Fish = {
  swimming() {
    console.log("=>", "swimming");
  },
};
