/*
 * @Date: 2022-01-11
 * @Description: 函数
 */

//
function foo() {}
//1.
function bar(fn: () => void) {
  fn();
}
bar(foo);

//2.定义函数表达式
const add: (num1: number, num2: number) => void = (
  num1: number,
  num2: number
) => {
  return num1 + num2;
};
