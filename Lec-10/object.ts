interface User {
    username: string;
    age: number;
}

let user: User = {
    username: 'John',
    age: 25
}

console.log(user.username);
user.age = 30;
console.log(user.age);

let string: string[] = ['Hello', "kkjjk"];


let numStr: number[] | string[] = [];
numStr[0] = 454;
numStr[1] = 'Hello';
console.log(numStr);

interface Emp {
    id: number,
    ename: string,
    salary: number,
    dep: string,
    getName(): string;
    getSalary(): number;
}

let emp: Emp = {
    id: 1,
    ename: 'John',
    salary: 25000,
    dep: 'IT',
    getName() {
        return this.ename;
    },
    getSalary() {
        return this.salary;
    }

}

console.log(emp.getName());
console.log(emp.getSalary());

interface User2{
    id:number,
    username:string,
    email:string,
    password:string,

}
let users:User2[]=[
    {
        id:1,
        username:"Yashasvi",
        email:"yashasvi975.be22@chitkara.edu.in",
        password:"1234"
    },
    {
        id:2,
        username:"Yazvi",
        email:"yazvi@gmail.com",
        password:"5678"
    }
]

let some:number|string;
//let arr2:number[]|string[]=[1,"3"] --> either all indexes contain numbers