'use strict'

let number = 111;
let mult = 1;
let table = '';

while (mult <= 9) {
    table += `${number} * ${mult} = ${number * mult}\n`;
    ++mult;
} 

alert(table);