// To check given string is palendrome or Not
// const isPalendrome = (str) =>{
//     rev_str = str.split('').reverse().join('')
//     return str === rev_str ? true : false;
// }
// console.log(isPalendrome("aba"));
// console.log(isPalendrome("abad"));
// console.log(isPalendrome("olo"));

// To check given string is palendrome or Not withOut using inbuilt function
// const isPalendrome = (str) =>{
//     let rev_str = '';
//     for(let i = str.length; i>0; i--){
//         rev_str = rev_str + str[i-1];
//     }
//     return str === rev_str ? true : false;
// }

// console.log(isPalendrome("aba"));
// console.log(isPalendrome("abad"));
// console.log(isPalendrome("olo"));

// To check given number is palendrome or Not
// const isPalendrome = (number) => {
//     let rev_num = number.toString().split('').reverse().join('');
//     console.log(rev_num)
//     return number.toString() === rev_num ? true : false;
// }
// console.log(isPalendrome(1213))
// console.log(isPalendrome(121))

// To check given number is palendrome or Not without converting number to string
// const isPalendrome = (num) => {
//   let rev_num = 0;
//   let reminder;
//   let newNum = num;
//   while (newNum > 0) {
//     reminder = newNum % 10;
//     newNum = (newNum - reminder) / 10;
//     rev_num = rev_num * 10 + reminder;
//   }
//   return num === rev_num ? true : false;
// };
// console.log(isPalendrome(1212));
// console.log(isPalendrome(121));

// isPalendrome by removing at-max one character:-----------------------------------------------
// const isPalendrome = (str) => {
//     let rev_str = str.split('').reverse().join('');
//     if(str === rev_str){
//         return true;
//     }else{
//         let result = false;
//         for(let i = 0; i<str.length; i++){
//             let strArray = str.split('');
//             let newArray = strArray.splice(i,1);
//             console.log(strArray.join(''), strArray.reverse().join(''))
//             if(strArray.join('') === strArray.reverse().join('')){
//                 result = true;
//                 break
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
// let familyMembers=[];
// const getFamilyMambers = (family) =>{
//     if (Array.isArray(family)){
//         family.forEach((mamber) => {
//             getFamilyMambers(mamber)
//         })
//     }else if( typeof(family) === 'object'){
//         let data = Object.values(family)
//         data.forEach((person) => {
//             getFamilyMambers(person)
//         })
//     }else{
//         familyMembers.push(family)
//     }
//     return familyMembers;
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

// let numbers=[];
// const getNumbers = (arr) => {
//     if(Array.isArray(arr)){
//         arr.forEach((num)=> {
//             getNumbers(num)
//         })
//     }else if(typeof(arr) === 'object'){
//         let nums = Object.values(arr);
//         nums.forEach((data) => {
//             getNumbers(data)
//         })
//     }else{
//         numbers.push(arr)
//     }
//     return numbers
// }
// console.log(getNumbers(array))

// printing numbers from 1 to 100 if number devisiable by 3 then print Fizz insted of number if number is devisable by 5 then print Buzz and if number is divisible by both 3 & 5 print FizzBuzz.
// const fizzbuzz = (a, b) => {
//     for (i = a; i <= b; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz");
//         } else if (i % 3 === 0) {
//             console.log('Fizz')
//         }else if( i%5=== 0) {
//             console.log('Buzz')
//         }else{
//             console.log(i)
//         }
//     }
// };
// fizzbuzz(1,1000)

// get maximum number in given Array------------------------------------
// let numbers = [10, 45, 157, 2, 547, 1, 4, 45, 74];
// const getMaxNumber = (arr) => {
//   let maxNum = 0;
//   for (i = 0; i < arr.length; i++) {
//     if(maxNum<arr[i]){
//         maxNum=arr[i]
//     }
//   }
//   return maxNum;
// };
// console.log(getMaxNumber(numbers));

// to find common divisor of 2 numbers :-----------------------------------------
// const getCommonDivisor = (a, b) => {
//   let divisor;
//   if (a == b) {
//     return (divisor = a);
//   } else if (a > b) {
//     for (let i = b; i > 0; i--) {
//         if (a % i === 0 && b % i === 0) {                         
//         divisor = i;
//         break;
//       }
//     }
//   } else {
//     for (let i = a; i > 0; i--) {
//       if (b % i === 0 && a % i === 0) {
//         divisor = i;
//         break;
//       }
//     }
// }
// return divisor;
// };
// console.log(getCommonDivisor(12, 5));

// n kids are sitting in circle
// k toys aviable to distribute
// i start possition
// what is the last position?

const getLastPosition = (n,k,i) =>{
    // let lastPosition;
    lastPosition= (i + (k%n) -1)%n
    return lastPosition
}

console.log(getLastPosition(5,3,2))