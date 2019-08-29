export const isType = (target: any, type: string): boolean => {
  const objType = Object.prototype.toString
                                .call(target)
                                .replace(/\[object /g, '')
                                .replace(/\]/g)
                                .toLocaleLowerCase();
  return type ? objType === type : objType;
}

export const isEmptyArray = (arr: any[]): boolean => {
  return Array.isArray(arr) && !arr.length;
}

export const isEmptyObject = (obj: object): boolean => {
  return isType(obj, 'object') && !Object.keys(obj).length;
}

export default {
  isType,
  isEmptyArray,
  isEmptyObject
}
