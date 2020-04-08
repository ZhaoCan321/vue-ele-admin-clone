
export function isString(str) {
  if(typeof str === "string" || str instanceof String) {
    return true
  }
  return false
}

export function isArray(arg) {
  if(typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]"
  }
  return Array.isArray(arg);
}