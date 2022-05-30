// ---------------- GENERATORS, PROXY, REFLECT
// https://learn.javascript.ru/generators-iterators

function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
console.log([...generator()]);
const gen = generator()
console.log(gen.next());
console.log(gen.next());

const range = {
  from: 1,
  to: 8,
  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value
    }
  }
}
console.log(...range);

function* generator2() {
  let result = yield '2+2='
  console.log(result);
}
const genn = generator2()
console.log(genn.next().value)
genn.next(4)
console.log(genn.next());

//Async generator
async function* asyncgenerator(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise(resolve => setTimeout(() => resolve(), 200))
    yield i;
  }
}
for await (let value of asyncgenerator(2, 3)) {
  console.log(value);
}

const asyncrange = {
  from: 1,
  to: 3,
  async *[Symbol.asyncIterator]() {
    for (let val = this.from; val <= this.to; val++) {
      await new Promise(resolve => setTimeout(resolve, 200))
      yield val;
    }
  }
}
for await (let val of asyncrange) {
  console.log(val);
}

//Proxy
let numbers = [1, 2, 3]
numbers = new Proxy(numbers, {
  get(target, p) {
    if (p in target) { return target[p] }
    else { return 0 }
  }
})
console.log(numbers[2], numbers[4]);

function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArgs, args) {
      setTimeout(() => target.apply(thisArgs, args), ms)
    }
  })
}
let say = () => {
  console.log('Hello delay');
}
say = delay(say, 400)
say()

//Reflect
class RefUser {
  #name = 'Jakob';
  getName() {
    return this.#name
  }
}
let refUser = new RefUser()
console.log(refUser.getName());
refUser = new Proxy(refUser, {
  get(target, prop, reciever) {
    let value = Reflect.get(...arguments)
    return (typeof value == 'function') ? value.bind(target) : value
  }
})
console.log(refUser.getName());

//Отключаемые прокси
let obj = {
  data: 'Important!'
}
const revokes = new WeakMap()
let { proxy, revoke } = Proxy.revocable(obj, {})
revokes.set(proxy, revoke)
console.log(proxy.data);
revoke = revokes.get(proxy)
revoke()
try { console.log(proxy.data); }
catch (e) { console.log(e); }

//Eval
let x = 5;
eval("x = 10");
console.log(x);
