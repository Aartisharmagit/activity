// Variable
//  Q1 . Write a program to store your birth date, birth month, birth year, respectively, and then print them one by one in a specified order. 

//let birthDate = 22;
//let birthMonth ="May";
//let birthYear = 2001;

//console.log(birthDate);
//console.log(birthMonth);
//console.log(birthYear);

//Q2 Write a program to take input from the user, and then print it to the output.

//let a = 12;
//console.log(a);

//let greeting = "Hello";
//console.log(greeting);

//Q3 Swaping
//let a = 12;
//b = 4;

//console.log(a);
//console.log(b);

//let temp = a;
//a = b;
//b = temp;
//console.log(a);
//console.log(b);

// Arithmetic

//Q1. Write a program to rake two numbers from the user and perform Six basic operations ( addition, subtraction, multiplication, division, integer divisin and modulus) on those two numbers.
//let a = 12;
//  b = 5;
//let Addition = a + b;
//let Subtraction = a - b;
//let Multiplication = a * b;
//let Division = a / b;
//let Modulus = a % b;


//console.log(Addition);
//console.log(Subtraction);
//console.log(Multiplication);
//console.log(Division);
//console.log(Modulus);

//Q2. Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

//let a = 12;
//    b = 5;
//let quotient = Math.floor(a / b);
//let remainder = a % b;

// console.log(quotient);
//console.log(remainder);

//let a = 15;
//   b = 6;

//let quotient = Math.floor(a / b);
//let remainder = a % b;

//console.log(quotient);
//console.log(remainder);

//Q3. Write a program to take a positive number from the user and then display the last digit of that number.


//let a = 843;

//let lastDigit = a % 10;
//console.log(lastDigit);

//let b = 321;
//let lastDigit = b % 10;
//console.log(lastDigit)

//Q4. Write a program to take two inputs th user and swap them without using a temporary or third variable.

//let a = 5;
//    b = 6;

//a = a + b;
//b = a - b;
//a = a - b;

//console.log(a)
//console.log(b)

//Q5. Write a program to convert a temperature from Celsius to Fahrenheit using the formula C/5 = (F-32)/9.


// let celsius = 30;

// let fahrenheit = (celsius * 9) / 5 + 32;

// console.log(fahrenheit); // सही आउटपुट देगा

//Q6. Write a program to take two numbers. A and B from the user. Your task is to find the largest number that is less than A and can divided evenly by B. Can you figure out that number?

//let a = 15;
//  b = 4;
//let largestDivisiblenumber = a - (a % b ) - (a % b === 0 ? B : 0);

//console.log(largestDivisiblenumber);

//let a = 27;
//  b = 5;

//let  largest = a - ( a % b) - (a % b === 0 ? B: 0);
//console.log(largest)

//Condition
//Q1. Write a program to take numbers from the user and determined the greater of those of those two given numbers.

//let a = 20;
//   b = 3;

//if (a > b){
// console.log(a);
//}else {
//  console.log(b);
//}

//Q2. Write a program to take a number from the user and print that number as Odd or Even.

//let a = 56;
//if (a % 2 == 0){
//  console.log("even");
//}else {
// console.log("odd");
//}

//let a = 87;
//if (a % 2 == 0){
// console.log("even")
//}else {
//   console.log("odd")
//}
//Q 3. Write a program to take a number from the user and output whether that number is nagative, positive ro Zero.


// let a = (number) => {
//     if (number > 0){
//         return "postive";


//         }else if (number === 0){
//             return "zero";
//         }else{
//             return "nagative";
//         }
//    }
//         console.log(a("Postive"));
//         console.log(a("Zero"));
//         console.log(a("Negative"));

//       function checkNumber(number) {
//      if (number => 0) {
//          return "positive";
//      } else if (number === 0) {
//          return "zero";
//      } else {
//          return "negative";
//      }
//  }

//  console.log(checkNumber("positive"));  // Output: "positive"
//  console.log(checkNumber("zero"));  // Output: "zero"
//  console.log(checkNumber("negative")); // Output: "negative"a


//  let Food;

//  if (day === "sunday"){
//      console.log("pasta");{
//  }else if (day=== "monday"){
//      console.log("kheer")
//  }else if (day >= "paneer"){
//      console.log("B")
//  }else if (marks >= 50){
//      console.log("C")
//  }else if (marks >= 40){
//      console.log("D")
//  }else {
//      console.log("F")
//  }





// Q  4. Write a program to take a an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
//     let n = 5;
// if(n % 2 == 0){
//   console.log(n);
// }
// else{
//   console.log(n * 2);
// }
// Q 5. Write a program to take a number from the user and print the greater of the four numbers .a ( assume all the numbers are distinct)
//  let a = 98;
//     b = 13;
//     c = 29;
//     d = 58;

var num1 = 45;  // First number
var num2 = 33;  // Second number
var num3 = 7;   // Third number
var num4 = 5;   // Fourth number

if (num1 > num2 && num1 > num3 && num1 > num4) {
    console.log("Greatest number: " + num1);
} else if (num2 > num1 && num2 > num3 && num2 > num4) {
    console.log("Greatest number: " + num2);
} else if (num3 > num1 && num3 > num2 && num3 > num4) {
    console.log("Greatest number: " + num3);
} else {
    console.log("Greatest number: " + num4);
}





// let day = "wednesday"; 
//   let food;

//   if (day === "sunday") {
//       food = "Pancakes";
//   } else if (day === "monday") {
//       food = "Pasta";
//   } else if (day === "tuesday") {
//       food = "Tacos";
//   } else if (day === "wednesday") {
//       food = "Biryani";
//   } else if (day === "thursday") {
//       food = "Noodles";
//   } else if (day === "friday") {
//       food = "Pizza";
//   } else if (day === "saturday") {
//       food = "Burger";
//   } else {
//       food = "Empty";
//   }

//   console.log(food); 



//  // your code goes here
//    const readline = require("readline");

//     const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//         });
//         //step 1

//   rl.question("", (input) => {
//    let n = Number(input)
//         if (n>=2025){
//                 console.log("Yes")
//                 }else
//                     {
//           console.log("NO")
//                    }
//        rl.close();
//              });















