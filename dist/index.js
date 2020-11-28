"use strict";
const firstno = document.getElementById('first_no');
const secondno = document.getElementById('second_no');
const add_btn = document.querySelector('button');
function add(first, second) {
    console.log('First # ' + first + ' , Second # ' + second);
    return first + second;
}
add_btn.addEventListener('click', function () {
    console.log(' RESULT : ' + add(+firstno.value, +secondno.value));
});
