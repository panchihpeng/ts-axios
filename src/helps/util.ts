const toString = Object.prototype.toString

export function isDate(val: any): val is Date /* 类型谓词，返回值的类型*/ {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
