function foo(message: string) {}

const names = ['abc,"cba'];

//此处的参数 可以不指定类型
//因为item来自于数组 数组中的类型是确定的 (根据上下文环境推导出来的)
names.forEach(function (item) {
  console.log("=>", item.length);
});

export {};
