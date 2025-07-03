//////////////////////////////////////////////////////////////////////
///BASIC COMPARISON HOW TYPESCRIPT checks the type before the runtime
// 1)
// const message = 'Hello World';
// message.toLocaleLowerCase();
// console.log(message());

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
//   // Operator '<' cannot be applied to types '() => number' and 'number'.
// }

// 4)
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }

// greet("Brendan");
