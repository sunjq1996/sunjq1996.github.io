// 延时执行
function SetDelayTime (secs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve() }, secs)
  })
}

export {
  SetDelayTime
}
