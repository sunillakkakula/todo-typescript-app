"use strict";
function sub(fn, sn) {
    if (typeof (fn) === 'number' && typeof (sn) === 'number') {
        return fn + sn;
    }
    // else {
    //    throw new Error('Incorrect  Input')
    // }
}
const fnum = 10.0;
const snum = 2;
let result = sub(fnum, snum);
console.log('RESULT : ' + result);
function sumnumbers(a, b) {
    return a + b;
}
function hello() {
    console.log('Hello');
    return;
}
function test_combinable(name) {
    console.log(typeof (name));
}
test_combinable(123);
