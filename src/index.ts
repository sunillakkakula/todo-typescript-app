const firstno = document.getElementById('first_no')! as HTMLInputElement;
const secondno = document.getElementById('second_no')! as HTMLInputElement;
const add_btn = document.querySelector('button')!;

function add(first :number, second:number) {
    console.log('First # ' + first + ' , Second # ' + second );
    return first + second;
}
add_btn.addEventListener('click',  function(){
    console.log(' RESULT : '+ add(+firstno.value, +secondno.value)) ;
}  );
