/*
 * @Date: 2022-01-11
 * @Description:
 */

type Method = "GET" | "POST";

function request(url: string, method: Method) {}

//方法1. 给options类型约束
//type OPtions = {
//  url: string;
//  method: Method;
//};

//const options: OPtions = {
//  url: "https://www.couderzii.com",
//  method: "POST",
//};
const options = {
  url: "https://www.couderzii.com",
  method: "POST",
} as const; //readonly 类型一直不会变 所以后续传入options.method不会影响类型的安全

//报错 不允许传入options.method -> 1/2
////方法2. 类型断言
//request(options.url, options.method as Method);或者
request(options.url, options.method);

export {};
