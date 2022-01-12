/**
 * 實作 flatten 函數
 * 參數可以傳入任意維度的陣列，扁平化後回傳一維陣列
 * flatten([1, [2, [3, [4]]], 5])
 * => [1, 2, 3, 4, 5]
 * [3, [4]]
 */
const result = [];
export const flattenDeep = (array) => {
  // 請在這裡實作
  // if (array.length) {
  //   flattenDeep(array);
  // } else {
  //   return array;
  // }
  // if (array.length) {
  //   array.forEach((item) => {
  //     if (item.length > 0) {
  //       flattenDeep(item);
  //     } else {
  //       result.push(item);
  //     }
  //   });
  // } else {
  //   result.push(array);
  // }
  // array.forEach((item) => {
  //   if (item.length > 0) {
  //     flattenDeep(item);
  //   } else {
  //     result.push(item);
  //   }
  // });
  exec(array);
  return result;
};

const exec = (array) => {
  array.forEach((item) => {
    if (item.length > 0) {
      exec(item);
    } else {
      result.push(item);
    }
  });
};
