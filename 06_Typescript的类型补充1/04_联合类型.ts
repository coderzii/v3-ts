/*
 * @Date: 2022-01-11
 * @Description:
 */

//使用联合类型的时候,需要特别的小心
function printId(id: number | string) {
    //narrow 缩小范围
  if (typeof id === "string") {
    console.log("=>", id.toUpperCase());
  }
}
