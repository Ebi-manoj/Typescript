"use strict";
//////////////////////////////////////////////////////////////////////////////////////
///COMPARE index.js how TYPESCRIPT checks Types and warn you before running the code
// 1)
// const message='Hello Word'
// message();
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) { }
createUser({ _id: '1234', firstname: 'ebi', num: 2 });
var userWithInterFace = {
    email: 'Ebi@gmai.com',
    number: 9999,
    startTrail: function () { return 'hai'; },
    getCoupon: function (name, off) { return off; },
    googleId: 'ggg',
};
///////////////////////////////
///USING ARRAYS
var superHeros = []; //array containing only string values
var heroPower = []; //array containing only number values
//different syntax same purpose
var superHero2 = [];
var heroPower2 = [];
//we can assign type also
var allusers = [];
// or
var allusers2 = [];
////////////////////////////////
////UNION
var univar = 1;
var userDetail = {
    name: 'Ebi',
    age: 20,
};
var Uniarray = [1, 2, 3, 4, 5]; //(this will only contain either number or string)
var Uniarray2 = [1, '1', 2]; //(this is the way to store mix data)
var SeatAllocated;
SeatAllocated = '3b';
// SeatAllocated='4b' shows error
/////TUPLES
var tuple = ['hai', 1]; //ensure fixed lenght and precice datatype at each position
var eSeat = "lower" /* SeatAllocatedEnum.LOWER */;
//////////////////////////////////////////////////////
/////Classes in typescript
var Animal = /** @class */ (function () {
    function Animal(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    return Animal;
}());
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
var today = new Date();
console.log(checkDate('2012 Wednes'));
