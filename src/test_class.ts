class Department{
// private name:string ;
// public address :string ;
// public employees :string [] =[];
static year = 2020
constructor( public name:string ){
    console.log('Constructor of Dept')
    // this.name= n;
    // this.address = a;
}

// addEmp(e:string){
//     for(let i =0;i<5;i++)
//     this.employees.push(e);
// }
describe(this:Department){
    console.log('Name : '+this.name )
}
static invokeStaticImpl(name:string){
    console.log('Org : '+name +', YEAR : '+Department.year)
}
}

class ITDepartment extends Department{

}
class AdminDepartment{
    hello():string{
        return 'Hello New Extra Impl'
    }
}

const admin = new AdminDepartment();
// ITDepartment.prototype.name = 
// const it = new ITDepartment('IT');

// console.log(it)
// it.describe();


// const d = new Department('SAI');
// d.addEmp('LSK');
// d.describe()
// console.log(d)
// const clone_dept = {name:'LSK',describe:d.describe}
// console.log(clone_dept.describe())
console.log(Department.invokeStaticImpl('static value'));

