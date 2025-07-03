"use strict";
//////////////////////////////////////////////////////////////////////////////////////
///COMPARE index.js how TYPESCRIPT checks Types and warn you before running the code
// 1)
// const message='Hello Word'
// message();
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ _id: '1234', firstname: 'ebi', num: 2 });
const userWithInterFace = {
    email: 'Ebi@gmai.com',
    number: 9999,
    startTrail: () => 'hai',
    getCoupon: (name, off) => off,
    googleId: 'ggg',
};
///////////////////////////////
///USING ARRAYS
const superHeros = []; //array containing only string values
const heroPower = []; //array containing only number values
//different syntax same purpose
const superHero2 = [];
const heroPower2 = [];
//we can assign type also
const allusers = [];
// or
const allusers2 = [];
////////////////////////////////
////UNION
const univar = 1;
const userDetail = {
    name: 'Ebi',
    age: 20,
};
const Uniarray = [1, 2, 3, 4, 5]; //(this will only contain either number or string)
const Uniarray2 = [1, '1', 2]; //(this is the way to store mix data)
let SeatAllocated;
SeatAllocated = '3b';
// SeatAllocated='4b' shows error
/////TUPLES
let tuple = ['hai', 1]; //ensure fixed lenght and precice datatype at each position
const eSeat = "lower" /* SeatAllocatedEnum.LOWER */;
//////////////////////////////////////////////////////
/////Classes in typescript
class Animal {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
}
///////////////////////////////////////////////
///GENERICS
// this means whatever you pass it will return the same data type
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityfour(val) {
    return val;
}
identityfour({ name: 'Ebi', mobile: 9999 });
function CheckisAdmin(account) {
    if ('isAdmin' in account) {
        return account.isAdmin;
    }
    return false;
}
////Instance of
function checkDate(str) {
    if (str instanceof Date) {
        return str.toUTCString();
    }
    return str.toLocaleLowerCase();
}
const today = new Date();
console.log(checkDate(today));
