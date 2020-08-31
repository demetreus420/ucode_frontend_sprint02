'use strict'

let inputValue = prompt("Enter number:");

(!inputValue || inputValue < 1 || inputValue > 4) ? alert("Wrong input") : 
    (+inputValue == 1) ? alert(`${+inputValue * 2 / 'a'}`) :
    (+inputValue == 2) ? alert(`${+inputValue / +inputValue / 0}`) :
    (+inputValue == 3) ? alert(`${0 * Infinity}`) :
    (+inputValue == 4) ? alert(`${(+inputValue * 40000000) == Infinity}`) : 0;