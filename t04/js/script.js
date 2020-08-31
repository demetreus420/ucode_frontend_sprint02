'use strict';

function solver(a, b, c, d, e) {
    let wrongInputCheck = Array.prototype.slice.call(arguments)
        .find(item => typeof (item) != 'number');
    if (wrongInputCheck == undefined) {
        return ((a ** 2) - 5 * (b * c) + (d / 3) + e);
    } else {
        return 'Wrong input';
    }
}

// solver(0, 'a', 2, 3, 4);
// solver(4, 1, 2, 3, 4);
