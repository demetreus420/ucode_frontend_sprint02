'use strict'

let length = prompt('Enter please a height of pyramid:');

function getPyramid(length) {
    if (length === undefined) return undefined;
    let pyramid = '';

    if (length.match(/\D/ig) != null) {
        return NaN;
    }
    length = Number(length);

    for (let i = 0; i <= length; i++) {
        for (let j = 0; j < i; j++) {
            pyramid = pyramid.concat('*');
        }
        pyramid = pyramid.concat('\n');
    }
    console.log(pyramid);
    return pyramid;
}

alert(getPyramid(length));