import { Dictionary } from '../typings/interface';

export const clone = (arr: any[]): any[] => {
  return [...arr];
}

export const unique = (arr: any[]): any[] => {
  return [...new Set([...arr])]
}

export const shuffle = (arr: any[]): any[] => {
  return arr.slice().sort(() => Math.random() - 0.5);
}

export const compact = (arr: any[]): any[] => {
  return arr.filter(Boolean)
}

export const shift = (item: any, arr: any[]): any[] => {
  return [item, ...arr];
}

export const push = (item: any, arr: any[]): any[] => {
  return [...arr, item];
}

export const countBy = (arr: any[]): Dictionary<number> => {
  return arr.reduce((acc: object, cur: number) => {
    acc[cur] = acc[cur] ? ++acc[cur] : 1;
    return acc;
  }, {})
}

export default {
  clone,
  unique,
  shuffle,
  compact,
  shift,
  push,
  countBy
}
