export function promiseTimeout(func, time) {
  return new Promise(resolve => {
    setTimeout(()=> {
      func()
      resolve()
    }, time)
  })
}