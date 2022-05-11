// Задача: вывести массив простых чисел от 0 до num

const primeArray = (num) => [...Array(num + 1).keys()].filter(isPrime)

const isPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}

console.log(primeArray(10));
console.log(primeArray(97));