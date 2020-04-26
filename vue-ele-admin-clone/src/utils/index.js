export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += " " + cls
  }
}

export function removeClass(ele, cls) {
  if(hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)")
    ele.className = ele.className.replace(reg, "")
  }
}

export function deepClone(source) {
  if(!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone")
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if(source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

export function param2Obj(url) {
  const search = url.split("?")[1]
  if(!search) {
    return {}
  }
  return JSON.parse(
    "{" +
      decodeURLComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '";')
      .replace(/\+/g, '') +
    '"}'
  )
}