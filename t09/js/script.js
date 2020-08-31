'use strict'

let team = prompt('Enter team, please:');
let universe = prompt('Enter universe, please:');
let race = prompt('Enter race, please:');
let eyeColor = prompt('Enter eye color, please:');
let hairColor = prompt('Enter hair color, please:');

((team == 'Avengers' || team == 'S.H.I.E.L.D.')
    && universe == 'Marvel'
    && race == 'human'
    && eyeColor == 'green'
    && (hairColor == 'lightBrown/green'
        || hairColor == 'lightBrown'
        || hairColor == 'green')) ? alert('This is Black Widow!')
    :
    ((team == 'Justice League Of America' || team == 'Teen Titans')
        && universe == 'DC Comics'
        && (race == 'human' || race == 'kryptonian')
        && eyeColor == 'blue'
        && hairColor == 'black') ? alert('This is a Superman or Robin!')
        : alert('Didn\'t recognize!');
