'use strict'

function capitalize(str) {
    let reg = new RegExp(`${str[0]}`, 'ig');
    return (str != '') ? str.replace(reg, `${str[0].toUpperCase()}`) : '';
}

let firstName = capitalize(prompt('Hello! What is your first name?(only in english)'));
let secondName = capitalize(prompt('Hello! What is your second name?(only in english)'));

if (firstName == ''
    || firstName.match(/\W/g) != null) {

    alert('Wrong input! First name should include only characters');
    if (secondName == ''
        || secondName.match(/\W/g) != null) {

        alert('Wrong input! Second name should include only characters');
    }
} else {
    alert(`Greetings ${firstName} ${secondName}!`);
    console.log(`Greetings ${firstName} ${secondName}!`);
}

