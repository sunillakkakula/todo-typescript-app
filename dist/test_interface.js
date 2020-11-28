"use strict";
let wish;
wish = {
    name: 'Hello Mr',
    wishMe(lastname) {
        console.log('Bye from Wish Service' + lastname.toUpperCase());
    }
};
console.log(wish.wishMe('Lakkakula'));
class Hyundai {
    constructor() {
        this.brandname = 'Hyundai';
        this.modelno = 2020;
        this.year = 2020;
    }
    showPerformance() {
        return 'Good ';
    }
}
class Maruti {
    constructor() {
        this.brandname = 'Baleno';
        this.modelno = 2020;
        this.year = 2020;
    }
    showPerformance() {
        return 'Super Good ';
    }
}
class ExtraFeatures {
    autogear() {
        console.log('Has Auto Gear Feature ');
    }
}
const extra = new ExtraFeatures();
const hyundai = new Hyundai();
console.log('Brand : ' + hyundai.brandname + ', Performance : ' + hyundai.showPerformance());
const maruti = new Maruti();
console.log('Brand : ' + maruti.brandname + ', Performance : ' + maruti.showPerformance());
// Hyundai.prototype.somefeature = function() {
//     alert(' has left the building. Bye for now!');
//   };
const fns = [];
fns.push('sadasdasd');
fns.push('sadasdasd');
fns.push('sadasdasd');
console.log(fns);
