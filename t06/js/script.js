'use strict'

let myNumber = 2;
let myBigInt = 420n;
let myString = 'Строка';
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObject = new Object();
let mySymbol = Symbol('smth');
let myFunc = () => {};

alert(
`myNumber is ${typeof(myNumber)}\n
myBigInt is ${typeof(myBigInt)}\n
myString is ${typeof(myString)}\n
myBoolean is ${typeof(myBoolean)}\n
myNull is ${typeof(myNull)}\n
myUndefined is ${typeof(myUndefined)}\n
myObject is ${typeof(myObject)}\n
mySymbol is ${typeof(mySymbol)}\n
myFunc is ${typeof(myFunc)}\n`
);