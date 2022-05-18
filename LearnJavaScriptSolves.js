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
let times = []
setTimeout(function run() {
  times.push(Date.now() - start)
  if (start + 100 < Date.now()) console.log(times);
  else setTimeout(run)
})