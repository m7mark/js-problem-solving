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
    await new Promise(resolve => setTimeout(() => resolve(), 500))
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
      await new Promise(resolve => setTimeout(resolve, 500))
      yield val;
    }
  }
}
for await (let val of asyncrange) {
  console.log(val);
}