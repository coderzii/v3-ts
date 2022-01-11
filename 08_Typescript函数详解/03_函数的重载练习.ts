/*
 * @Date: 2022-01-11
 * @Description:实习一个方法 返回字符串或者数组的长度
 */

//实现一 联合类型 (优先级更高,能联合就联合)
type ParamsType = string | any[];

function getLength(data: ParamsType): number {
  return data.length;
}

getLength(["abc"]);

//实现二 函数重载
function getLength2(data: string): number;
function getLength2(data: any[]);
function getLength2(data: any): number {
  return data.length;
}

getLength2(["abc"]);
getLength2("abc");
