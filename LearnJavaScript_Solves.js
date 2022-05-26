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
function cachingDecorating(func, hash) {
  const cache = new Map()
  return function () {
    let key = hash(arguments)
    console.log(key);
    if (cache.has(key)) { return cache.get(key) }
    let result = func.apply(this, arguments)
    cache.set(key, result)
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
function slow(x, y = 0) {
  console.log(x, y);
  return x + y + 3
}
function hash(args) {
  return ([].join.call(args))
}
slow = cachingDecorating(slow, hash)
console.log(slow(4, 5));
console.log(slow(4, 5));
console.log(slow(4));

let workerNew = cachingDecorating(worker.slow, hash)
console.log(workerNew.call(worker, 2))

//Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls
function sum(a, b) { return a + b }
function spy(func) {
  const calls = []
  return function spyCall() {
    spyCall.calls = calls
    calls.push([...arguments])
    return func.apply(this, arguments)
  }
}
sum = spy(sum)
console.log(sum(2, 5));
console.log(sum(3, 5, 6));
console.log(sum.calls);

//Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
function delayFunc(text = '') {
  console.log(`Delay ${text}`);
}
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}
delayFunc = delay(delayFunc, 1000)
delayFunc('Ok')

//Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.
function throttleFunc(text = '') {
  console.log(`Throttle ${text}`);
}
function throttle(f, ms) {
  let isFrozen = false
  return function () {
    if (isFrozen) { return }
    f.apply(this, arguments)
    isFrozen = true
    setTimeout(() => isFrozen = false, ms)
  }
}
throttleFunc = throttle(throttleFunc, 1000)
throttleFunc('Me')