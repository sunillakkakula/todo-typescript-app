interface Wish{
    name : string;
    wishMe(lastname:string):void;
}

let wish :Wish;

wish = {
name : 'Hello Mr',
wishMe (lastname:string) {
    console.log('Bye from Wish Service'+lastname.toUpperCase());
}
}

console.log(wish.wishMe('Lakkakula'))

interface Car {
    brandname : string;
    modelno: number;
    year: number;

    showPerformance():string;

}

class Hyundai implements Car{
    brandname = 'Hyundai'
    modelno =  2020;
    year = 2020;

    showPerformance(){
        return 'Good '
    }

}
class Maruti implements Car{
    brandname = 'Baleno'
    modelno =  2020;
    year = 2020;

    showPerformance(){
        return 'Super Good '
    }
}
class ExtraFeatures {
    autogear():void{
        console.log('Has Auto Gear Feature ')
    }
}

const extra = new ExtraFeatures();

const hyundai = new Hyundai();
console.log('Brand : '+hyundai.brandname+', Performance : '+hyundai.showPerformance());

const maruti = new Maruti();
console.log('Brand : '+maruti.brandname+', Performance : '+maruti.showPerformance());

// Hyundai.prototype.somefeature = function() {
//     alert(' has left the building. Bye for now!');
//   };

const fns :Array<string> = []

fns.push ('sadasdasd')
fns.push ('sadasdasd')
fns.push ('sadasdasd')
console.log(fns)

