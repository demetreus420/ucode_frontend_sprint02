'use strict'

function getAnswer(question, wrongAnswer, correctAnswer) {
    return (`${question}\nwrong:${wrongAnswer}\ncorrect:${correctAnswer}\n\n`);
}

const a = '15';
const b = 4;
const c = true;
const d = 'a';
const e = 'B';
const f = '';

let answer = 'Not my type\n\n';

answer += getAnswer('a+b=?', a + b, 19);
answer += getAnswer('a+c=?', a + c, 2);
answer += getAnswer('e+d+e+d=?', e + d + e + d, 'BaNaNa');
answer += getAnswer('c+f=?', c + f, 10);

alert(answer);

/* The web page must display:Not my typea+b=?wrong: 154correct: 19a+c=?wrong: 15truecorrect: 2e+d+e+d=?wrong: BaBacorrect: BaNaNac+f=?wrong: truecorrect: 10*/