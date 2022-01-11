/*
 * @Date: 2022-01-11
 * @Description:
 */

//可选类型
// 一个参数是可选类型的时候 ,它其实类似于表示的是类型和undefind的联合类型
function foo(message?: string) {}
foo();

function bar(message: number | undefined) {
  console.log("=>", "111");
}

bar(undefined);

export {};
