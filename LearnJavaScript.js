
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