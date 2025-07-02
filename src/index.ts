//////////////////////////////////////////////////////////////////////////////////////
///COMPARE index.js how TYPESCRIPT checks Types and warn you before running the code
// 1)
// const message='Hello Word'
// message();

// 2)
// const user = {
//   age: 20,
//   name: 'Ebi',
// };
// console.log(user.location);

// 3)
// function flipCoin() {
//   // Meant to be Math.random()
//   return Math.random < 0.5;
// // Operator '<' cannot be applied to types '() => number' and 'number'.
// }

// 4)
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet('Brendan');

////////////////////////////////////////////////////////////////////////
///BASIC DECLARATION WITH TYPE SAFETY
// const num: number = 10;
// const Username: string = 'Ebi';
// const check: boolean = false;

// function logYourName(firstname: string, lastname: string): void {
//   console.log(firstname + ' ' + lastname);
// }
// // logYourName('Ebi',2)error
// logYourName('Ebi', 'Manoj');

//////////////
// USING TYPE ALIAS

type User = {
  readonly _id: string; //we cant manipulate data when readonly
  firstname: string;
  num: number;
  reccommendedby?: string; //? this is for optional field
};
function createUser(user: User) {}

createUser({ _id: '1234', firstname: 'ebi', num: 2 });

////we can combine type using & operator
type userDetails = User & {
  address: 'string';
};

//////////////////////////////////////////////
///INTERFACE

interface Userinter {
  email: string;
  number: number;
  startTrail: () => string; //startTrail is a function return string
  getCoupon: (couponName: string, off: number) => number;
}

const userWithInterFace: Userinter = {
  email: 'Ebi@gmai.com',
  number: 9999,
  startTrail: () => 'hai',
  getCoupon: (name, off) => off,
  googleId: 'ggg',
};

//DIFF between type and interface

//can reopen
interface Userinter {
  googleId: string;
}

//can extends
interface AdminInter extends Userinter {
  role: string;
}

///////////////////////////////
///USING ARRAYS

const superHeros: string[] = []; //array containing only string values
const heroPower: number[] = []; //array containing only number values

//different syntax same purpose
const superHero2: Array<string> = [];
const heroPower2: Array<number> = [];

//we can assign type also
const allusers: userDetails[] = [];
// or
const allusers2: Array<userDetails> = [];

////////////////////////////////
////UNION

const univar: string | number = 1;

type UniUser = {
  name: string;
  age: number;
};

type UniAdmin = {
  username: string;
  age: number;
};

const userDetail: UniUser | UniAdmin = {
  name: 'Ebi',
  age: 20,
};

const Uniarray: string | number[] = [1, 2, 3, 4, 5]; //(this will only contain either number or string)
const Uniarray2: (string | number)[] = [1, '1', 2]; //(this is the way to store mix data)

let SeatAllocated: '1b' | '2b' | '3b';
SeatAllocated = '3b';
// SeatAllocated='4b' shows error

/////TUPLES

let tuple: [string, number] = ['hai', 1]; //ensure fixed lenght and precice datatype at each position
// tuple=['hai',1,1] show error
// tuple=['hai','1',] show error
// tuple.push(1) works but......😏

///////////enum
const enum SeatAllocatedEnum {
  LOWER = 'lower',
  middle = 'middle',
  upper = 'upper',
}

const eSeat = SeatAllocatedEnum.LOWER;

export {};
