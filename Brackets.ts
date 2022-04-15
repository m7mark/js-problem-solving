// Задача на скобки. Проверить строку на правильность
// расставления скобок

function checkBrackets(str: string) {
  if (!str.match(/[\({\[]/)) return false //String without open brackets
  const isCloseBrackets = (char: string) => [')', '}', ']'].includes(char)
  const isOpenBrackets = (char: string) => ['(', '{', '['].includes(char)
  const stack: [string?] = []
  const mapBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (isCloseBrackets(char)) {
      if (mapBrackets[char] !== stack.pop()) return false
    } else if (isOpenBrackets(char)) {
      stack.push(char)
    }
  }
  return stack.length === 0
}

console.log(checkBrackets('()')) //true
console.log(checkBrackets('(){}[][{)}]')) //false
console.log(checkBrackets('({})([{}])')) //true
console.log(checkBrackets('call(next){}[]boolean')) //true
console.log(checkBrackets('dffeef')) //false
console.log(checkBrackets('')) //false
