// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

function printNumbers(from, to) {
  let i = from
  setTimeout(function go() {
    console.log(i);
    if (i < to) {
      setTimeout(go, 1000)
    }
    i++
  }, 1000)
}
printNumbers(2, 5)

//Минимальная задержка вложенных таймеров в браузере
let start = Date.now()
const times = []
setTimeout(function run() {
  times.push(Date.now() - start)
  if (start + 100 < Date.now()) console.log(times);
  else setTimeout(run)
})

//Прозрачное кеширование
function cachingDecorating(func) {
  const cache = new Map()
  return function (x) {
    if (cache.has(x)) { return cache.get(x) }
    let result = func.call(this, x)
    cache.set(x, result)
    return result
  }
}
const worker = {
  current: 3,
  slow(x) {
    console.log(x);
    return x + this.current
  }
}
function slow(x) {
  console.log(x);
  return x + 3
}
slow = cachingDecorating(slow)
console.log(slow(4));
console.log(slow(4));

worker.slow = cachingDecorating(worker.slow)
console.log(worker.slow(2))
