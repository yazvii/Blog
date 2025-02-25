"use strict";
let user = {
    username: 'John',
    age: 25
};
console.log(user.username);
user.age = 30;
console.log(user.age);
let string = ['Hello', "kkjjk"];
let numStr = [];
numStr[0] = 454;
numStr[1] = 'Hello';
console.log(numStr);
let emp = {
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
};
console.log(emp.getName());
console.log(emp.getSalary());
