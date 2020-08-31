'use strict';

let str1 = 'You\'re catnip to a girl like me. Handsome, dazed, and to die for...';
let str1Length = str1.length;
let str2 = 'Batman: \"I tried to save you.\"';
let str3 = 'Selina Kyle: catwoman\"Mmm seems Catwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\"';
//Как делать не надо, этот вариант я сделал до того как преисполнился регулярных выражений -->
// function catwomanClear(str) {
//     let strSub = str.toLowerCase().slice(str.indexOf('\"') + 1, -1);
//     while (strSub.includes('catwoman')) {
//         strSub = new String().concat(strSub.slice(0, strSub.indexOf('catwoman'))
//             , new String().concat(' ', strSub.slice((strSub.indexOf('catwoman') + 8), strSub.length)));
//     }
//     strSub = new String().concat(strSub[0].toUpperCase(), strSub.slice(1, -1));
//     strSub = new String(': \"' + strSub + '.\"');
//     return new String(str.slice(0, str.indexOf(':')) + strSub);
// }
//А теперь как надо делать -->
function catwomanClear(str) {
    return str.replace(/catwoman/ig, ' ');
}

alert(`Just string: ${str1}
Length: ${str1Length}
Character number 3 is: ${str1[3]}
To uppercase ${str1.toUpperCase()}
Concatenation in phrase: ${str1.concat(' - Catwoman')}
${str2}
${catwomanClear(str3)}`
);