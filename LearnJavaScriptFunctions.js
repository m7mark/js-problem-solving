// Рекурсия и стек
function pow(x, n) {
  return (n === 1) ? x : x * pow(x, n - 1)
}
console.log(pow(2, 5))

function factorial(n) {
  return (n === 1) ? 1 : n * factorial(n - 1)
}
console.log(factorial(5));

// Остаточные параметры и оператор расширения
function sumAll(...args) {
  console.log(arguments);
  let sum = 0
  for (let el of args) sum += el;
  return sum
}
console.log(sumAll(1, 4, 6, 2, 1));

//[[Environment]]
const arr = [1, 3, 6, 8, 10, 22, 44]
function inBetween(a, b) {
  return function (x) {
    return x > a && x < b
  }
}
console.log(arr.filter(inBetween(2, 11)));

//Global
var globVar = 'Global'
globalThis.glob = 'Hello global'
console.log(globalThis.globVar, globalThis.glob)

//Объект функции, NFE
function makeCounter() {
  function count() { count.count++ }
  count.count = 0
  return count
}
let counter = makeCounter()
counter();
counter()
console.log(counter.count);
console.log(counter.name, counter.length);
console.log(makeCounter.name);
console.log(typeof (counter.length));

let greetings = function func(name) {
  if (name) {
    return `Hi ${name}`
  }
  else {
    return func('Guest')
  }
}
console.log(greetings())
console.log(greetings('Gimmy'))

function sum(a) {
  let currentSum = a
  function f(b) {
    if (!b || typeof (b) !== 'number') currentSum += 0
    else currentSum += b;
    return f;
  }
  f.toString = function () {
    return currentSum;
  };
  return f;
}
console.log(sum(9)(1)(1)()()(4)('dd').toString())

//new Function
const divide = new Function('a,b', 'return a/b')
console.log(divide(4, 8));
