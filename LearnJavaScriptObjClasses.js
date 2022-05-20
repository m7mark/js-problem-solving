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