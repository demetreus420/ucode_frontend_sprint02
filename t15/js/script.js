'use strict'

function checkDivision(beginRange, endRange) {
    let str;
    let flag;

    while (beginRange <= endRange) {
        str = beginRange;
        flag = false;
        if ((beginRange % 2) == 0) {
            str += ' is even';
            flag = true;
        }
        if ((beginRange % 3) == 0) {
            if (flag == true) str += ',';
            str += ' is a multiple of 3';
            flag = true;
        }
        if ((beginRange % 10) == 0) {
            if (flag == true) str += ',';
            str += '  is a multiple of 10';
            flag = true;
        }
        if (flag == false) str += ' -';
        
        flag = false;
        console.log(str + '\n');
        ++beginRange;
    }
}

let start = Number(prompt('Enter begin of range number: ', 1));
let end = Number(prompt('Enter end of range number: ', 100));

if (Number.isInteger(start)
    && Number.isInteger(end)) {
    (start <= end) ? checkDivision(start, end) : alert('First number must be smaller then second!'); // checkDivision(end, start); //на всякий пожарный можно это обойти
} else {
    alert('Wrong input. It must be an integer');
}