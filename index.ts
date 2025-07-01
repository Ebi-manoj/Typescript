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
const num: number = 10;
const Username: string = 'Ebi';
const check: boolean = false;

function logYourName(firstname: string, lastname: string): void {
  console.log(firstname + ' ' + lastname);
}
// logYourName('Ebi',2)error
logYourName('Ebi', 'Manoj');
