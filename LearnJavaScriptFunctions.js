// Рекурсия и стек
function pow(x, n) {
  return (n === 1) ? x : x * pow(x, n - 1)
}
console.log(pow(2, 997))
function factorial(n) {
  return (n === 1) ? 1 : n * factorial(n - 1)
}
console.log(factorial(10));

// Остаточные параметры и оператор расширения
function sumAll(...args) {
  console.log(arguments);
  let sum = 0
  for (let el of args) sum += el;
  return sum
}
console.log(sumAll(1, 4, 6, 2, 1));

