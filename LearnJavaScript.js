
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