// 1. Accept a char input from the user and display it on the console.
function question1() {
  const char: string | null = prompt('Enter a Number');
  if (char) console.log(`You entered ${char}`);
  else prompt('You must enter a Number');
}
// question1();

// 2. Accept two inputs from the user and output their sum.

class Sum {
  constructor(private num1: number, private num2: number) {
    console.log(num1 + num2);
  }
}

// new Sum(2, 4);

//	3. Write a program to find the simple interest.

function simpleInterest(p: number, i: number, y: number): number {
  const simpleInterest = (p * i * y) / 100;
  return simpleInterest;
}

// console.log(simpleInterest(5, 3, 5));

// 4. Write a program to check whether a student has passed or failed in a subject after he
// or she enters their mark (pass mark for a subject is 50 out of 100).

function passedOrNot(mark: number): string {
  if (mark < 50) return 'Failed';
  else return 'Passed';
}

// 5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

function checkGrade(mark: number): string {
  if (mark > 100) return 'Invalid Mark';
  else if (mark >= 90) return 'You got A';
  else if (mark >= 80) return 'You got B';
  else return 'You are average';
}

// 6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows.

function outputDay(num: number): string {
  let day: string;
  switch (num) {
    case 1:
      day = 'Sunday';
      break;
    case 2:
      day = 'Monday';
      break;
    default:
      day = 'Invalid';
  }
  return day;
}

// 7. Write a program to print the multiplication table of given numbers.
function multiplication(num: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
  }
}
// multiplication(5);

// 8. Write a program to find the sum of all the odd numbers for a given limit
function sumOfoddNumber(limit: number): number {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 1) sum += i;
  }
  return sum;
}

// // 9. Write a program to print the following pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function printPattern(num: number) {
  let output: number[] = [];

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      output.push(j);
    }
    console.log(...output);
    output = [];
  }
}
// printPattern(5);

// 10. Write a program to interchange the values of two arrays.

function swapArray(arr: any[], arr2: any[]) {
  const temp = [...arr];
  arr.length = 0;
  arr.push(...arr2);

  arr2.length = 0;
  arr2.push(...temp);
}
const arr = [1, 2, 3];
const arr2 = [8, 9, 0];

// 11. Write a program to find the number of even numbers in an array

function findEven(arr: number[]): number {
  let count = 0;
  for (const n of arr) {
    if (n % 2 == 0) count++;
  }
  return count;
}

//12. Write a program to sort an array in descending order

function sort(nums: number[]) {
  if (nums.length <= 1) {
    return nums;
  }

  const p: number = nums[nums.length - 1];

  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < p) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...sort(right), p, ...sort(left)];
}

// 13. Write a program to identify whether a string is a palindrome or not

function checkPalindrome(str: string): boolean {
  let start = 0;
  let end = str.length;

  while (start < end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

// console.log(checkPalindrome('malayalam'));

// 14. Write a program to add to two dimensional arrays

function add2DArray(arr1: number[][], arr2: number[][]) {
  const result: number[][] = [];

  for (let i = 0; i < arr1.length; i++) {
    let sum: number[] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      sum[j] = arr1[i][j] + arr2[i][j];
    }
    result.push(sum);
  }
  return result;
}

// const arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const arr22 = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
// ];

// console.log(add2DArray(arr1, arr22));

// 15. Write a program to accept an array and display it on the console using functionss
function mainFor15(get: () => number[], display: (nums: number[]) => void) {
  const nums = get();
  display(nums);
}
function getArray() {
  const input = prompt('Enter number');
  const nums = input.split(' ').map(num => +num);
  return nums;
}

function displayArray(nums: number[]) {
  console.log(...nums);
}
// mainFor15(getArray, displayArray);
