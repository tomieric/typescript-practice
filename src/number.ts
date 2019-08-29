export const numberTrunc = (num: number): number => {
  return ~~num;
}

export const numberTrunc2 = (num: number): number => {
  return num | 0;
}

export const numberTrunc3 = (num: number): number => {
  return num >> 0;
}

export const zeroPad = (num: number, len: number): string => {
  return num.toString().padStart(len, '0');
}

/**
 *
 * @param target
 * null、""、false、数值字符串
 */
export const number2Int = (target: null|string|false): number => {
  return isNaN(+target) ? 0 : +target;
}

export const timestamp = (date: string): number => {
  return date ? +new Date(date) : Date.now();
}

export const number2Fixed = (num: number, decimal: number): number => {
  return Math.round(num * 10 ** decimal);
}

export const isOdd = (num: number): boolean => {
  return !!(num & 1);
}

export const isEven = (num: number): boolean => {
  return !isOdd(num);
}

export const getMinInArray = (arr: number[]): number => {
  return Math.min(...arr);
}

export const getMaxInArray = (arr: number[]): number => {
  return Math.max(...arr);
}

export const randomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  numberTrunc,
  numberTrunc2,
  numberTrunc3,
  zeroPad,
  number2Int,
  timestamp,
  number2Fixed,
  isOdd,
  isEven,
  getMinInArray,
  randomNum
}
