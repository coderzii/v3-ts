/*
 * @Date: 2022-01-11
 * @Description:
 */

//x y  z可选参数
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log("=>", "横坐标", point.x);
  console.log("=>", "纵坐标", point.y);
}

printPoint({ x: 1, y: 2022 });

export {};
