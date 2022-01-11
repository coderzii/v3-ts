/*
 * @Date: 2022-01-11
 * @Description: ! 关键字
 */
// ? -> string | undefined

function printMessage(message?: string) {
  console.log("=>", message!.length);
}

printMessage("hello world");
printMessage("hahaha");
