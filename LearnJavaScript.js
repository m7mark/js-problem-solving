
// ---------------- OBJECTS
// https://learn.javascript.ru/object-basics

// You can use specific symbols in []
const obj = {
  age: 30
}
obj['my name'] = 'Mark'
console.log(obj['my name'], obj)
console.log('age' in obj)

//Перечисление ключей в объекте
for (let key in obj) {
  console.log(key)
}

//Primitive clone object
let newObj = Object.assign({}, obj)
newObj.age = 20
delete newObj['my name']
console.log(newObj, obj)

//This
const cat = {
  name: 'Milka',
  showName() {
    return this.name
  }
}
console.log(cat.showName())
console.log((cat.showName || cat.name)())
const ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
}
ladder.up().down().up().up()
console.log(ladder.step)

//Конструкторы, создание объектов через "new"
function Dog(name) {
  this.name = name;
  this.sit = function () {
    return `${this.name} is sitting`
  }
}
console.log(new Dog('Fred').sit());

//Symbols & Преобразование объектов в примитивы
let id = Symbol('id')
const rabbit = {
  name: 'Karl',
  age: 2,
  [id]: 1,
  toString() {
    return this.age
  }
}
console.log(rabbit[id], Object.keys(rabbit))
console.log(Reflect.ownKeys(rabbit));
console.log(+rabbit, rabbit + 4, rabbit + '33');

// ---------------- DATA TYPES
// https://learn.javascript.ru/data-types

//numbers
console.log(10..toString(2))
console.log(0.1 + 0.2);
console.log(isFinite('4e4'));
console.log(parseInt('100px'), parseFloat('1.1.1.1'));

//strings
const str = 'New string data from state'
console.log(str.indexOf('st'), str.includes('st'));
console.log(str.slice(0, 3), str.slice(-5));
console.log('Österreich'.localeCompare('Zenden'))

//Arrays
console.log([...new Array(5).keys()]);
const arr = [1, 2]
arr.push(function () { console.log(this) })
arr[2]();

console.log(arr.slice(1, 3))
arr.splice(2, 1, 3) //mutate array
console.log(arr);
console.log(arr.concat([4, 5, 6]))
console.log(arr.includes(3));
console.log(arr.find(e => e > 1));
console.log(arr.filter(e => e > 1));

console.log(arr.map(e => e + '$'));
console.log(arr.reduce((acc, el) => acc + el));
//create object with map
console.log(arr.map(el => ({ number: el })));
//Перебираемые объекты и псевдомассивы
for (el of arr) {
  console.log(el);
}

const rangeIterable = {
  from: 2,
  to: 8,
  [Symbol.iterator]() {
    this.current = this.from;
    return this
  },
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ }
    } else {
      return { done: true }
    }
  }
}
for (el of rangeIterable) {
  console.log(el);
}
const arrLike = {
  0: 'First',
  1: 'Second',
  length: 2
}
console.log(Array.from(rangeIterable));
console.log(Array.from(arrLike));
console.log(Object.getOwnPropertySymbols(rangeIterable))

//Map и Set
let map = new Map()
map.set(arr, 2)
console.log(map);
map = new Map(Object.entries(rangeIterable))
console.log([...map.values()])
console.log([...map.keys()])
console.log([...map.entries()])
map.delete('next')
const newObjFromMap = Object.fromEntries(map)
console.log(newObjFromMap.from);
map.forEach((val, key) => { console.log(key, val) });

let set = new Set(arr)
console.log(set, [...set.entries()]);