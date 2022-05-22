// ---------------- OBJECTS AND CLASSES
// https://learn.javascript.ru/object-properties

//Флаги и дескрипторы свойств
const person = {
  name: 'Arma',
  age: 22,
  city: { street: 'Ave' }
}
let descriptor = Object.getOwnPropertyDescriptor(person, 'name')
console.log(descriptor);

Object.defineProperty(person, 'lastName', { value: 'Dow', configurable: true })
let descriptors = Object.getOwnPropertyDescriptors(person)
console.log(descriptors);
person.lastName = 'Joe' //Not writable
console.log(person.lastName);
console.log(Object.keys(person));

const clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person))
console.log(clone);
console.log(Object.getOwnPropertyNames(person));

console.log(Object.isExtensible(clone));
Object.preventExtensions(clone)
clone.try = 'Not added'
console.log(clone.try);

Object.seal(clone)
console.log(Object.getOwnPropertyDescriptor(clone, 'age'));
Object.freeze(clone)
console.log(Object.getOwnPropertyDescriptor(clone, 'age'));
console.log(Object.isExtensible(clone));
console.log(Object.isSealed(clone));
console.log(Object.isFrozen(clone));

//Свойства - геттеры и сеттеры
const obj = {
  myage: 22,
  name: 'Wow',
  get age() {
    return `${this.myage} years`
  },
  set age(val) {
    this.myage = val
  }
}
console.log(obj.age);
obj.age = 12
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

//Прототипы, наследование
const base = { base: 'JS' }
base.__proto__ = obj
console.log(base, base.age);
base.age = 10
console.log(base);
for (let key in base) {
  let isOwn = base.hasOwnProperty(key)
  if (isOwn) console.log(key)
  else console.log(key);
}

function CreateBase(name) {
  this.name = name
}
let newBase1 = new CreateBase('John')
CreateBase.prototype = obj;
let newBase2 = new CreateBase('John')
console.log(newBase2.age);
console.log(newBase1.constructor === CreateBase);
console.log(newBase2.constructor === CreateBase);

//Встроенные прототипы
console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__.__proto__);
console.log([].__proto__ === Array.prototype);

//Методы прототипов
let protobj = Object.create(obj)
console.log(Object.getPrototypeOf(protobj));
Object.setPrototypeOf(protobj, {})
console.log(Object.getPrototypeOf(protobj));
const cloneObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
console.log(cloneObj);
console.log(Object.create(null));//простейший объект без методов

//Класс
class Person {
  static publisher = 'Mark Ro'
  constructor(name = 'Dana') {
    this.name = name
  }
  get myname() {
    return `My name is ${this.name}`
  }
  set myname(val) {
    this.name = val
  }
}
const pers = new Person()
pers.myname = 'Billy'
console.log(pers.myname);

class Worker extends Person {
  constructor(name, lang = 'JS') {
    super(name)
    this.lang = lang
  }
  static work() { return true }
}
const worker = new Worker()
console.log(worker);
console.log(worker.myname);
console.log(Worker.work());
console.log(Worker.publisher);

console.log(Person.__proto__ === Function.prototype);
console.log(Person.prototype.__proto__ === Object.prototype);

class Private {
  #car = 'BMW'
  get car() {
    return this.#car
  }
  set car(val) {
    if (val.length < 1) throw new Error('Empty field')
    this.#car = val
  }
}
const private = new Private()
console.log(private.car);
private.car = 'Audi'
console.log(private.car);

console.log(private instanceof Private);
console.log({}.toString.call(new Private));
console.log({}.toString.call(new Error));
console.log({}.toString.call(123));

//Обработка ошибок, "try..catch"
try {
  novar
  console.log('Show when code is right');
} catch (err) {
  console.log(err.stack);
} finally {
  console.log('Show always');
}

process.on("uncaughtException", (err) => {
  console.log(err);
})