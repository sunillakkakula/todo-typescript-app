function sub(fn :number, sn:number) {
    if(typeof(fn) ==='number' && typeof(sn) ==='number'){
        return fn + sn;
    }
    // else {
    //    throw new Error('Incorrect  Input')
    // }
}
const fnum :number = 10.0;
const snum :number = 2;
let result  = sub(fnum,snum);
console.log('RESULT : '+result);


function sumnumbers(a:number,b:number){
 return a+b;
}
function hello():undefined{
    console.log('Hello')
    return;
}

function test_combinable(name : number|string){
    console.log(typeof(name))
}

test_combinable(123)