// To check given string is palendrome or Not

// const isPalendrome =(str) => {
//     return str === str.split('').reverse().join('') ? true : false;
// }

// console.log(isPalendrome("aba"));
// console.log(isPalendrome("abad"));
// console.log(isPalendrome("olo"));

// To check given string is palendrome or Not withOut using inbuilt function

// const isPalendrome = (str) => {
//     let rev_str = '';
//     for (let i = str.length; i > 0; i--) {
//         rev_str = rev_str + str[i-1];
//     }
//     console.log(rev_str)
//     return str === rev_str ? true : false;
// }

// console.log(isPalendrome("aba"));
// console.log(isPalendrome("abad"));
// console.log(isPalendrome("olo"));

// To check given number is palendrome or Not

// const isPalendrome =(num) => {
//     return num.toString() === num.toString().split('').reverse().join('') ? true : false;
// }

// console.log(isPalendrome(1213))
// console.log(isPalendrome(121))

// To check given number is palendrome or Not without converting number to string

// const isPalendrome = (num) => {
//     let reminder = 0;
//     let newNum =num;
//     let rev_num= 0;
//     while (newNum > 0) {
//         reminder = newNum %10;
//         newNum = (newNum-reminder)/10;
//         rev_num = rev_num*10+reminder            
//     }
//     return num === rev_num ? true : false;
// }

// console.log(isPalendrome(1212));
// console.log(isPalendrome(121));

// isPalendrome by removing at-max one character:-----------------------------------------------

// const isPalendrome = (str) => {
//     if(str === str.split('').reverse().join('')){
//         return true
//     }else{
//         let result= false;
//         for (let i=0; i<str.length;i++){
//             let strArray= str.split('')
//             let newArray = strArray.splice(i,1)
//             if(strArray.join('') === strArray.reverse().join('')){
//                 result = true
//                 break;
//             }
//         }
//         return result
//     }
// }


// console.log(isPalendrome('abad'));
// console.log(isPalendrome('126'));

// get all the the fimaly mambers names from below objects :-------------------------------
// const family = {
//   name: "Revu",
//   childrens: [
//     {
//       name: "Babu",
//       childrens: [
//         {
//           name: "Aravind",
//           childrens: [
//             {
//               name: "Dummi",
//             },
//             {
//               name: "Dumma",
//             },
//           ],
//         },
//         {
//           name: "Anand",
//           childrens: [
//             {
//               name: "Kid1",
//             },
//             {
//               name: "Kid2",
//             },
//             {
//               name: "Kid3",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Somalu",
//       childrens: [
//         {
//           name: "Sunil",
//           childrens: [
//             {
//               name: "Satwik",
//             },
//             {
//               name: "Janu",
//             },
//           ],
//         },
//         {
//           name: "Anil",
//           childrens: [
//             {
//               name: "Aayush",
//             },
//           ],
//         },
//         {
//           name: "Nakul",
//         },
//         {
//           name: "Gokul",
//         },
//         {
//           name: "Archana",
//         },
//       ],
//     },
//   ],
// };

// const familyMambers =[];
// const getFamilyMambers = (family) =>{
//     if(Array.isArray(family)){
//         family.forEach((mamber)=>{
//             getFamilyMambers(mamber)
//         })
//     }else if(typeof(family)==='object'){
//         let values = Object.values(family)
//         values.forEach((value)=>{
//             getFamilyMambers(value)
//         })
//     }else{
//         familyMambers.push(family)
//     }
//     return familyMambers
// }

// console.log(getFamilyMambers(family))

// Getting all numbers in a Array:--------------------------------------
// const array = [
//   5,
//   6,
//   [
//     7,
//     8,
//     [
//       9,
//       1,
//       2,
//       [4, 5],
//       6,
//       {
//         arr: {
//           brr: [2, 3, [4, 6, [7], [9]]],
//           crr: [2, 3, [4, 6, [7], [9]]],
//         },
//         drr: [2, 3, [4, 6, [7], [9]]],
//       },
//     ],
//   ],
// ];

// const numbers = [];
// const getNumbers = (array) =>{
//     if(Array.isArray(array)){
//         array.forEach(element => {
//             getNumbers(element)
//         });
//     } else if(typeof(array)==='object'){
//         let values = Object.values(array)
//         values.forEach((val)=>{
//             getNumbers(val)
//         })
//     } else {
//         numbers.push(array)
//     }
//     return numbers
// }

// console.log(getNumbers(array));

// printing numbers from 1 to 100 if number devisiable by 3 then print Fizz insted of number if number is devisable by 5 then print Buzz and if number is divisible by both 3 & 5 print FizzBuzz.

// function fizzbuzz(a,b){
//     for(let i=a;i<=b;i++){
//         if(i%5===0 && i%3===0){
//             console.log('FizzBuzz')
//         }else if(i%5===0){
//             console.log('Fizz')
//         }else if(i%3===0){
//             console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// }

// fizzbuzz(1,200)

// get maximum number in given Array------------------------------------

// let numbers = [10, 45, 157, 2, 547, 1, 4, 45, 74];
// const getMaxNumber = (num) =>{
//     let maxnumber=0;
//     num.forEach(element => {
//         if(maxnumber<element){
//             maxnumber = element
//         }
//     });
//     return maxnumber
// }

// console.log(getMaxNumber(numbers))

// to find common divisor of 2 numbers :-----------------------------------------

// const getCommonDivisor = (a,b) =>{
//     if(a===b){
//         return a;
//     }else if(a<b){
//         for(let i=b; i>0; i--){
//             if(a%i===0 && b%i===0){
//                 return i
//                 break
//             }
//         }
//     }else{
//         for(let i=a; i>0; i--){
//             if(a%i===0 && b%i===0){
//                 return i
//                 break
//             }
//         }
//     }
// }

// console.log(getCommonDivisor(27,3))

// n kids are sitting in circle
// k toys aviable to distribute
// i start possition
// what is the last position?

// const getLastPossition = (n,k,i) =>{
//     let lastPossition = ((k%n)+i-1)%n
//     return lastPossition
// }

// console.log(getLastPossition(5,3,2))

