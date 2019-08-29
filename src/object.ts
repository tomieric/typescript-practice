import { Dictionary } from '../typings/interface';

export const clone = (obj: Dictionary<any>): Dictionary<any> => {
  return { ...obj };
}

export const merge = (source: Dictionary<any>, target: Dictionary<any>): Dictionary<any> => {
  return { ...source, ...target };
}

export const omit = (obj: Dictionary<any>, props: string[]): Dictionary<any> => {
  return Object.keys(obj)
                .reduce((acc, cur) => {
                  if (!props.includes(cur)) {
                    acc[cur] = obj[cur];
                  }
                  return acc;
                }, {});
}

export default {
  clone,
  merge,
  omit
}
