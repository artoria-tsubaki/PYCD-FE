/**
 * 获取两个颜色中间的颜色
 * @param color1 开始的16进制颜色
 * @param color2 结束的16进制颜色
 * @returns 一个位于两个颜色中间的颜色
 */
export const getAverageColor = (color1: string, color2: string) => {
  // 从颜色字符串中提取RGB分量
  const r1 = parseInt(color1.slice(1, 3), 16); // 从第1个字符开始，取2位
  const g1 = parseInt(color1.slice(3, 5), 16); // 从第3个字符开始，取2位
  const b1 = parseInt(color1.slice(5, 7), 16); // 从第5个字符开始，取2位
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);

  // 计算RGB分量的平均值
  const r = Math.round((r1 + r2) / 2);
  const g = Math.round((g1 + g2) / 2);
  const b = Math.round((b1 + b2) / 2);

  // 将RGB分量转换为十六进制字符串
  const averageColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  return averageColor;
}