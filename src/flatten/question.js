/**
 * 實作 flatten 函數
 * 參數可以傳入任意維度的陣列，扁平化後回傳一維陣列
 * flatten([1, [2, [3, [4]]], 5])
 * => [1, 2, 3, 4, 5]
 */
export const flattenDeep = (array) => {
  // 請在這裡實作
  const result = [];
  array.forEach((item) => {
    if (item.length > 0) {
      flattenDeep(item);
    } else {
      result.push(item);
    }
  });
  return result;
};
