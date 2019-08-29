import { Dictionary } from '../typings/interface';

/**
 * 格式化千位符
 * @param num
 */
export const currency = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * 生成指定长度的随机字符串
 * @param len
 */
export const randomNum = (len: number): string => {
  return Math.random().toString(36).substr(3, len);
}

/**
 * 生成随机颜色
 */
export const randomColor = () : string => {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
}

/**
 * 生成星星打分
 * @param rate
 */
export const generateStarScore = (rate: number): string => {
  return '★★★★★☆☆☆☆☆'.slice(5 -rate, 10 - rate);
}

/**
 * 格式化查询参数
 * @param qs
 * var p = parseUrlParams()
 * p.has('page')
 * p.get('page')
 */
export const parseUrlParams = (qs: string = location.search): Dictionary<any> => {
  return new URLSearchParams(qs.replace(/\?/ig, ''))
}


export default {
  currency,
  randomNum,
  randomColor,
  generateStarScore,
  parseUrlParams
}
