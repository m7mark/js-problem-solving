//Arguments
console.log([2, 2, 2, 2].map(parseInt)) //parseInt(val, index)

//Замыкания и областьь видимости
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 0)
}

for (var i = 0; i < 5; i++) {
  setTimeout((function (i) {
    return function () {
      console.log(i)
    }
  })(i), 0);
}

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, 0)
  })(i)
}

//This and new
function fn() {
  this.name = 'Name'
}
console.log(fn())
console.log(new fn)

let obj = {
  a: 5,
  b: {
    c: 10
  }
}
obj.__proto__ = {
  a: 6,
  b: {
    c: 11
  }
}

delete obj.a
console.log(obj.a); // Удаляетс собственное свойство, читается из прототипа
delete obj.a
console.log(obj.a); // Из прототипа свойство не удаляется
delete obj.b
console.log(obj.b.c);
delete obj.b.c 
console.log(obj.b.c); // Свойство b читается, но c уже удаляется