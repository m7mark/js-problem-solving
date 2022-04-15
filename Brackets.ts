// Задача на скобки. Проверить строку на правильность
// расставления скобок

function checkBrackets(str: string) {
  if (!str || str.length === 0) return false //Empty string
  if (str.match(/[\({\[]/) === null) return false //String without open brackets

  function isCloseBrackets(char: string) {
    return [')', '}', ']'].includes(char)
  }
  function isOpenBrackets(char: string) {
    return ['(', '{', '['].includes(char)
  }
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

console.log(checkBrackets('()'))
console.log(checkBrackets('(){}[][{)}]'))
console.log(checkBrackets('({})([{}])'))
console.log(checkBrackets('call(next){}[]boolean'))
console.log(checkBrackets('dffeef'))
console.log(checkBrackets(''))
