/*
 * @Date: 2022-01-11
 * @Description:
 * 联合类型的缺点:
 * 1. 进行很多的逻辑判断(类型缩小)
 * 2. 返回值的类型不能确定
 * 函数的重载: 名称相同,但是参数不同的几个函数,就是函数的重载
 */

//type AddType = number | string;

//function add(a1: AddType, a2: AddType) {
//  //联合类型不能直接相加
//  return a1 + a2;
//}

//add(10, 20);

//->>

//没有函数体的重载函数1
function add(a1: number, a2: number): number;
//没有函数体的重载函数2
function add(a1: string, a2: string): string;
//没有函数体的重载函数3
function add(a1: string, a2: number): string;
//函数的具体实现(不会被调用)
function add(a1: any, a2: any): any {
  return a1 + a2;
}

add(20, 30);
add("abc", 10);

export {};
