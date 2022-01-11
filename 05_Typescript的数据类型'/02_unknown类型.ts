/*
 * @Date: 2022-01-11
 * @Description: 不能明确知道的类型
 */

/* unknonw类型只能赋值给unknown和any类型 */

function foo() {
  return "abc";
}

function bar() {
  return 123;
}

let result: unknown;
result = foo();

console.log("=>", result);
export {};