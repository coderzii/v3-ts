/*
 * @Date: 2022-01-11
 * @Description: never 如果一个函数是一个死循环或者抛出异常的话 , 其中永远不会产生值
 */

function foo(): never {
  //死循环
  while (true) {}
}

function bar(): never {
  throw new Error("错误");
}

//never的应用场景


export {};
