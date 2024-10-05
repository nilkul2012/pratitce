// **To check given string is palendrome or Not-----**

// const isPalendrome =(str) => {
//     return str === str.split('').reverse().join('') ? true : false;
// }

// console.log(isPalendrome("aba"));
// console.log(isPalendrome("abad"));
// console.log(isPalendrome("olo"));

// **To check given string is palendrome or Not withOut using inbuilt function----**

// const isPalendrome = (str) => {
//     let rev_str='';
//     for(let i=str.length;i>0;i--){
//         rev_str=rev_str+str[i-1]
//     }
//     return str===rev_str ? true : false;
// }

// console.log(isPalendrome("aba"));
// console.log(isPalendrome("abad"));
// console.log(isPalendrome("olo"));

// **To check given number is palendrome or Not-----------------**

// const isPalendrome =(num) => {
//     return num.toString() === num.toString().split('').reverse().join('') ? true : false;
// }

// console.log(isPalendrome(1213))
// console.log(isPalendrome(121))

// **To check given number is palendrome or Not without converting number to string**

// const isPalendrome = (num) => {
//     let reminder = 0;
//     let newNum = num;
//     let rev_num = 0;
//     while (newNum > 0) {
//         reminder = newNum % 10;
//         newNum = (newNum - reminder) / 10;
//         rev_num = rev_num * 10 + reminder;
//     }
//     return num === rev_num ? true : false;
// }

// console.log(isPalendrome(1212));
// console.log(isPalendrome(121));

// **isPalendrome by removing at-max one character:-----------------------------------------------**

// const isPalendrome = (str) => {
//     if(str === str.split('').reverse().join('')){
//         return true;
//     }
//     for(let i=0; i<str.length; i++){
//         let strArr= str.split('')
//         let newStrArr = strArr.splice(i,1);
//         if(strArr.join('') === strArr.reverse().join('')){
//             return true
//         }
//     } 
//     return false
// }


// console.log(isPalendrome('abad'));
// console.log(isPalendrome('126'));

// **get all the the fimaly mambers names from below objects :-------------------------------**
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
//         family.forEach((ele)=>{
//             getFamilyMambers(ele)
//         })
//     }else if(typeof(family)==='object'){
//         let values = Object.values(family);
//         values.forEach((val)=>{
//             getFamilyMambers(val)
//         })
//     }else{
//         familyMambers.push(family)
//     }
//     return familyMambers
// }

// console.log(getFamilyMambers(family))

// **Getting all numbers in a Array:--------------------------------------**
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
//         array.forEach((ele)=>{
//             getNumbers(ele)
//         })
//     }else if(typeof(array) === 'object'){
//         let values = Object.values(array);
//         values.forEach((val)=>{
//             getNumbers(val)
//         })
//     }else{
//         numbers.push(array);
//     }
//     return numbers
// }

// console.log(getNumbers(array));

// **printing numbers from 1 to 100 if number devisiable by 3 then print Fizz insted of number if number is devisable by 5 then print Buzz and if number is divisible by both 3 & 5 print FizzBuzz.**

// function fizzbuzz(a, b) {
//     for (let i = a; i <= b; i++) {
//         if(i%5===0 && i%3===0){
//             console.log('FizzBuzz');
//         }else if(i%5===0){
//             console.log('Buzz');
//         }else if(i%3===0){
//             console.log('Fizz');
//         }else{
//             console.log(i)
//         }
//     }
// }

// fizzbuzz(1, 200)

// **get maximum number in given Array------------------------------------**

// let numbers = [10, 45, 157, 2, 547, 1, 4, 45, 74];
// const getMaxNumber = (num) =>{
//     return num.reduce((a,b)=>a<b ? b : a ,0)
// }

// console.log(getMaxNumber(numbers))

// **to find common divisor of 2 numbers :-----------------------------------------**

// const getCommonDivisor = (a, b) => {
//     if (a === b) {
//         return a;
//     } else if (a > b) {
//         for (let i = b; i > 0; i--) {
//             if (a % i === 0 && b % i === 0) {
//                 return i
//             }
//         }
//     } else if (b > a) {
//         for (let i = a; i > 0; i--) {
//             if (a % i === 0 && b % i === 0) {
//                 return i
//             }
//         }
//     }
// }

// console.log(getCommonDivisor(18, 36))

// **n kids are sitting in circle
// k toys aviable to distribute
// i start possition
// what is the last position?**

// const getLastPossition = (n,k,i) =>{
//  return i+(k%n-1)%n
// }

// console.log(getLastPossition(3,10,3))

// **sorting numbers in array and get middle number**
// let numbers = [1,1285,2574,474,4,1,475,2587,471,147,5];

// const getMiddleNum = (num) =>{
//     // let order=num.sort((a,b)=> a-b);
//     let n=num.length;
//     for(let i=0; i<n; i++){
//         for(let j=0;j<n-i-1;j++){
//             if(num[j]>num[j+1]){
//                 [num[j],num[j+1]] = [num[j+1],num[j]]
//             }
//         }
//     }
//     console.log(num)
//     if(num.length %2 ===0){
//         return Math.round((num[num.length/2]+num[(num.length/2)+1])/2)
//     }else {
//         return num[Math.floor(num.length/2)+1]
//     }
// }

// console.log(getMiddleNum(numbers))

//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.

// let sentance ='The function should ignore leading and trailing whitespace when determining the longest word'

// const findLongestWord = (str) => {
// if (str.trim().length === 0) {
//     return false;
// }
//     let arr = str.split(' ');
//     return arr.reduce((a,b)=> a.length<b.length? b:a,'')
// }
// console.log(findLongestWord(sentance))

//*---------------------------------------------------------
//*  Interview Question: Count Occurrences of Character
//*---------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

// const generateHash = (str) => {
//         let arr = str.split(' ');
//         let words = arr.map(ele => ele.replace(ele[0],ele[0].toUpperCase()));
//         return `#${words.join('')}`
//     }
// ______________________________________
// const generateHash = (str) => {
//         let arr = str.split(' ');
//         let words = arr.map(ele => ele.charAt(0).toUpperCase() + ele.slice(1));
//         return `#${words.join('')}`
//     }
// __________________________________________________________
// const generateHash = (str) => {
//         let arr = str.split(' ');
//         let words = arr.map(ele => ele.charAt(0).toUpperCase() + ele.substring(1));
//         return `#${words.join('')}`
//     }

//     console.log(generateHash('Hi, this is gokul this 2nd Project in this vedio'))

//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".

// const countChar = (str, char) => {
//     let arr = str.toLowerCase().split('');
//     let count = 0
//     return arr.reduce((a, b) =>{
//         if(char.toLowerCase()===b){
//             a++
//         }
//         return a
//     },0)
// }

// const countChar = (str, char) => {
//         let arr = str.toLowerCase().split('');
//         let count = 0
//         for(let i=0; i<arr.length; i++){
//             if(arr[i] === char.toLowerCase()){
//                 count++
//             }
//         }
//         return count;
// }

// console.log(countChar('asdfghjkasdfghjbchasgdstdgbhhh', 'H'))


//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene".

// const checkTriangleType = (a,b,c) =>{
//     if(a===b && a===c){
//         return "equilateral"
//     }else if(a===b || a===c){
//         return "isosceles"
//     }else{
//         return "scalene"
//     }
//     }

//     console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
//     console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
//     console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"


//*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------

// ? Write a function to sort an array of numbers in an ascending order.

//todo Requirements:
//? The function should take an array of numbers as input.
//? It should return a new array with the numbers sorted in ascending order.
//? The original array should remain unchanged.
//? You are not allowed to use the built-in sort() method.

// Note
//// Without a comparator function, the sort method sorts the array elements as strings by default, which might not always yield the correct numeric sorting, especially for numbers with more than one digit.

// const sortAscending = (arr) => {
//     return arr.sort((a,b)=>(a-b))
// }


// const sortAscending = (arr) => {
//     let n=arr.length
//     for(let i=0; i<n; i++){
//         for(let j=0;j<n-i-1; j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }

// console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
// console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]

// ------------------------------------------------------------------------------
// write a function to determine whether a given string is a palindrome or Not. A palindrome is a Word, phrase, number, or other sequence of characters that reads the same forward and backword, ignoring spaces, punctuation, and capitalization.

// -----------------
// Constraints:
// -----------------

// the input string may contain letters, digits, spaces,punctuation, and special characters.
// the function should be case-insensitive, meaning 'Racecar' and 'racecar' should be considered the same.
// Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
// the function should return true if the input string is a palindrome and false otherwise.

// const isPalendrome = (str)=>{
//     str=str.toLowerCase().replace(/\W/g,'');
//     //'/\W/g' select Non words characters from string expect[a-z,A-Z,0-9]
//     //'/\w/g' select words characters from string like[a-z,A-Z,0-9]
//     return str===str.split('').reverse().join('') ? true : false;
// }

// console.log(isPalendrome('nbsdkhd dhiuh3'))
// console.log(isPalendrome('A man, a plan, a canal, Panama'))

// ---------------------------------------------------------------------------------------
//write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

// const findMax =(arr)=>{
//     return arr.reduce((a,b) => a<b ? b : a, arr[0])
// }

// const findMax =(arr)=>{
//     let maxNum= arr[0];
//     arr.map((ele)=> ele>maxNum ? maxNum=ele :maxNum)
//     return maxNum
// }

// const findMax =(arr) => {
//     let maxNum= arr[0];
//     for(i=0; i<arr.length; i++){
//         if(maxNum<arr[i]){
//             maxNum=arr[i];
//         }
//     }
//     return maxNum
// }


// console.log(findMax([1,5,3,9,2])); //Output: 9
// console.log(findMax([-10,-5,-3,-9,-2])); //Output: -2
// console.log(findMax([5])); //Output: 5

// -------------------------------------------------------------------------
// write a function factorial that takes a non-negative integer num as input and returns its factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less then or equal to n. the factorial of 0 is defined as 1.

// here are some examples of factorial calculations:
// factorial(0) => 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120
// your function should work for any non negative integer inputs

// const factorial = (num) => {
//     let facto = 1;
//     if(num<0){
//         return 'Please input a Possitive Integer'
//     }else if(num===0){
//         return 1
//     }
//     for(let i=1; i<=num; i++){
//         facto = facto*i;
//         // console.log(facto)
//     }
//     return facto;
// }

// console.log(factorial(5)); //Output: 120
// console.log(factorial(0)); //Output: 1
// console.log(factorial(3)); //Output: 6

// ------------------------------------------------------------------------------
// challenge : Calculate the Average

// write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should :

// accept an array of numbers as input.
// calculate the sum of all numbers in the array.
// Devide the sum by the total number of elements in array to find the average.
// Return the calculated average.

// const calculateAverage = (arr) =>{
//     return (arr.reduce((total,ele)=> total+ele,0))/arr.length; 
// }
// _______________________________________________________
// const calculateAverage = (arr) =>{
//     let total =0;
//     for(let i=0; i<arr.length;i++){
//         total+=arr[i]
//     }
//     return total/arr.length;
// }

// console.log(calculateAverage([5, 10, 2, 8])); //Output: 6.25

// -----------------------------------------------------------------------------------------
// write a function arrayAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

// Note:
// the function should returns false if the arrays have different length.
// the function should compare each element of arr1 with the corresonding elements in arr2.
// the function should return true only if all elements in arr1 are equal to  their corresonding elements in arr2.

// const arrayAreEqual =(arr1,arr2) =>{
//     if(arr1.length !== arr2.length){
//         return false;
//     }else if(arr1.length===0 && arr2.length===0){
//         return true
//     }else{
//         let result=false;
//         for(let i=0;i<arr1.length;i++){
//             if(arr1[i]===arr2[i]){
//                 result=true;
//             }else{
//                 return false
//             }
//         }
//         return result
//     }
// }

// console.log(arrayAreEqual([1,2,3],[1,2,3])); //Output: true
// console.log(arrayAreEqual([1,2,3],[1,2,3,4])); //Output: false
// console.log(arrayAreEqual([],[])); //Output: true

// -------------------------------------------------------------------------------------------
// write a function that takes a number as input and returns the sum of its digits.

// constraints:
// the input number will always be a positive interger.
// the number cxan have multipale digits.
// the output should be the sum of all the digits in the input number.

// const sumofDigits =(num)=>{
//     let arr = Array.from(String(num),Number);
//     return arr.reduce((a,b)=> a+=b ,0)
// }

// const sumofDigits =(num)=>{
//     let arr = num.toString().split('').map(Number);
//     return arr.reduce((a,b)=> a+=b ,0)
// }

// console.log(sumofDigits(1234)); //Output: 10
// console.log(sumofDigits(4321)); //Output: 10
// console.log(sumofDigits(123456)); //Output: 21


// -----------------------------------------------------------------------------------------
// Homework:
// this function calculates the sum of digits without converting the number to a string.

// const sumofDigits =(num)=>{
//     let total=0;
//     let newNum= num;
//     let reminder=0;
//     while(newNum>0){
//         reminder= newNum % 10;
//         newNum= (newNum-reminder)/10;
//         total= total+reminder;
//     }
//     return total
// }

// console.log(sumofDigits(1234)); //Output: 10
// console.log(sumofDigits(4321)); //Output: 10
// console.log(sumofDigits(123456)); //Output: 21

// ------------------------------------------------------------------------------------
// write a function that takes an array of intergers as input and removeDuplicate elements, returning a new array with only the unique elements.

// the new set() method in JS creates a new set object. A set object is a collection of unique values. it can store any type of value, whether primitive values or object references.

// Constraints:
// the input array may contain both positive and negative integers.
// the input array may be empty.
// the elements in the input array are not guaranteed to be StylePropertyMapReadOnly.
// the output array should retain the original oredr of elements from the input array.

// const removeDuplicate =(arr) => {
//     return [... new Set(arr)]
// }
// ________________________________________________
// const removeDuplicate =(arr) => {
//     let newArr=[];
//     for(let i=0;i<arr.length;i++){
//         if(newArr.includes(arr[i])){
//             continue
//         }else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeDuplicate([1,2,3,2,1,4])) //Output: [1,2,3,4]
// console.log(removeDuplicate([5,6,7,7,8,8,9])) //Output: [5,6,7,8,9]
// console.log(removeDuplicate([1,2,3,4,8,7,8,8,8,9])) //Output: [1,2,3,4]
// console.log(removeDuplicate([])) //Output: []

// write a function that takes a string as input and returns the count of vowels in thet string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).

// constraints:
// the input string may contain letters in both uppercase and lowercase.
// the output should be a non-negative integer representing the count of vowels in the string.

// const countVowels =(str) =>{
//     const vowels=['a','e','i','o','u'];
//     let strArr = str.toLowerCase().split('');
//     let volCount=0;
//     strArr.forEach(ele=> {
//         if(vowels.includes(ele)){
//             volCount++
//         }
//     });
//     return volCount;
// }

// console.log(countVowels('hello world')) //Output: 3
// console.log(countVowels('ThE quIck brown fox')) //Output: 5
// console.log(countVowels('bbbbbbb')) //Output: 0

// write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

// Notes:
// the input num will be positive integer.
// Zero (0) and negative integers are not considered powers of two.
// the function should return true if the given number is a power of 2, and false otherwise.
// we can solve it using bitwise operator too but its your chance to do it and let me know in the comment section

// const isPowerOfTwo = (num) =>{
//     let result = false;
//     for(let i=1; i<num; i++){
//         if(2**i===num){
//             result= true
//         }
//     }
//     return result
// }

// console.log(isPowerOfTwo(8)); //Output: true
// console.log(isPowerOfTwo(7)); //Output: false

//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------

//? 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

// const sumOfSquares =(arr)=>{
//     return arr.reduce((a,ele)=>a+ele**2 ,0)
// }
// ____________________________________________________
// const sumOfSquares =(arr)=>{
//     let total=0;
//     arr.forEach((ele)=>total+=ele**2)
//     return total
// }

// console.log(sumOfSquares([1,2,3]))

//*---------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in an Array
//*---------------------------------------------------------
//? 16: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

//* Note:
//? Ensure the function handles edge cases gracefully, such as an empty input array.
//? Consider using ES6 features like the spread syntax (...) for a concise implementation.

//todo In JavaScript, the spread syntax (...) is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
//? For example, if arr is [5, 10, 2, 8], then ...arr expands to 5, 10, 2, 8.

// const findMin =(arr) =>{
//     if(arr.length ===0){
//         return 'array not contain any value'
//     }
//     arr.sort((a,b)=>(a-b))
//     return arr[0]
// }
// ____________________________________
// const findMin = (arr) => {
//     let min = arr[0];
//     if (arr.length === 0) {
//         return 'array not contain any value'
//     }
//     arr.forEach(ele => {
//         min > ele ? min = ele : min;
//     });
//     return min
// }
// console.log(findMin([5, 10, 2, 8])); // Output: 2
// console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
// console.log(findMin([])); // Output: undefined (or any suitable message for empty array)

//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 17: Write a function to check if a character is uppercase or lowercase.

//* Constraints:
//? The input char will be a single character.
//? The character can be any printable ASCII character.
//? You can assume that the input will always be a string of length 1.

//* Notes:
//? Ensure that the function correctly identifies uppercase characters based on their ASCII values.
//? Optimize the function to handle edge cases efficiently.

// const isUpperCase =(str) =>{
//     if(str.charCodeAt(0) >= 65 && str.charCodeAt(0)<= 90){
//         return true
//     }
//     return false
// }

// console.log(isUpperCase("S")); // Output: true
// console.log(isUpperCase("b")); // Output: false

//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 18: Write a function to convert a string to camelCase.

// const toCamelCase = (str)=>{
//     let strArr = str.toLowerCase().trim().split(' ')
//     .map((ele,i)=>{
//         if(i===0){
//             return ele
//         }else{
//             return ele.charAt(0).toUpperCase() + ele.substring(1)
//         }
//     })
//     return strArr.join('')
// }


// // Example usage:
// console.log(toCamelCase("hello world thApa")); // Output: helloWorld

//todo HomeWork:
//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 18: Write a function to convert a string to snake_case.

// const toSnakeCase =(str) =>{
//     return str.trim().toLowerCase().split(' ').join('_')
// }

// console.log(toSnakeCase("hello World")); // Output: hello_world

//*--------------------------------
//* Coding Challenge
//*--------------------------------
//?19: Write a function to check if a given string starts with a specific substring.

// Input:

//? str: A string (e.g., "Hello world").
//? subStr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

// const startsWith = (str, word)=>{
//     strArr=str.toLowerCase().split(' ');
//     word =word.toLowerCase();
//     return strArr[0] === word ? true : false;
// }

// // Example usage:
// console.log(startsWith("Hello world", "hello")); // Output: true
// console.log(startsWith("Hello world", "World")); // Output: false

//*--------------------------------
//* Coding Challenge
//*--------------------------------

//? Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//todo
// In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

//? Constraints:
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.

// const calculateMean = (arr) =>{
//     if(arr.length===0){
//         return 0
//     }
//     let total= arr.reduce((total, num)=> total+=num,0)
//     return total/arr.length
// }

// console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
// console.log(calculateMean([10, 20, 30])); // Output: 20
// console.log(calculateMean([-1, 0, 1])); // Output: 0
// console.log(calculateMean([])); // Output: 0

//*---------------------------
//* Coding Challenge
//*---------------------------

//? Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//todo  Tips
//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.

// const findMedian = (arr) => {
//     let sortArr = arr.sort((a, b) => (a - b));
//     if (arr.length % 2 === 0) {
//         return Math.round((sortArr[arr.length / 2]+sortArr[(arr.length / 2)-1])/2)
//     }else {
//         return sortArr[Math.floor(arr.length/2)]
//     }
// }

// console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
// console.log(findMedian([2, 4, 6, 8])); // Output: 5
// console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6

// ---------------------------------------------------------------------
// write a JS function to count the occurrences of each element in an array and store the counts in an Object.the keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.

// to do:
// Accept an array of numbers as input.
// create an empty object called counts to store the counts of each element.
// Iterate through each number in the array
// for each number, increment the count in the counts object.
// if the count for a number does not exist yet, initialize it to 1.
// return the counts object containing the counts of each element

// constraints:
// the input array may contain positive integers only

// const numbers = [1, 2, 2, 3, 1, 4, 2];

// const countOccurrences = (arr) =>{
//     let counts ={};
//     arr.forEach(ele=> {
//         counts[ele] =(counts[ele] || 0)+1;
//     });
//     console.log(counts)
// }
// countOccurrences(numbers)
// output { '1': 2, '2' : 3, '4' : 1 }

//*---------------------------
//* Coding Challenge: Find the Mode in an Array
//*---------------------------

//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).

// const findMode = (arr) =>{
//     let obj={};
//     let objName;
//     let maxnum = 0;
//     for(ele of arr){
//         obj[ele]= (obj[ele] || 0)+1;
//         if(obj[ele]>maxnum){
//             maxnum = obj[ele];
//             objName= ele
//         }
//     }
//     return objName;
// }

// Example usage:
// console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2

//*---------------------------
//* Coding Challenge
//*---------------------------

//* Write a function to calculate the factorial of a number.(using Recursion)

//* Recursion:
//? Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input until it reaches a base case.

//* Base Case:
//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

//* Recursive Case:
//? The recursive case is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.
// // Base Case:
// // The base case is if (n === 1), where the function returns 1.
// // This condition stops the recursion when n becomes 1, preventing further recursive calls.
// // Recursive Case:
// // The recursive case is return n * factorial(n - 1).
// // This part of the function calls itself with a smaller input (n - 1), moving closer to the base case with each recursive call.
// // It calculates the factorial of n by multiplying n with the factorial of n - 1.

// const factorial = (num) =>{
//     let facto = 1;
//     if(num===0){
//         return 1
//     }
//     while(num>0){
//         facto = facto*num;
//         num--;
//     }
//     return facto
// }
// // Example usage:
// console.log(factorial(5)); // Output: 120

//*---------------------------
//* Coding Challenge
//*---------------------------

//* Write a function to find the nth Fibonacci number.

//? The Fibonacci series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the Fibonacci series looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//todo Fibonacci number is calculated using the following formula:
//todo syntax:  F(n) = F(n-1) + F(n-2), Where, F(1) = F(2) = 1.

// const fibonacci =(num) => {
//     if(num<=1){
//         return num;
//     }else{
//         return fibonacci(num-2)+fibonacci(num-1)
//     }
// }

// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(2)); // Output: 1
// console.log(fibonacci(3)); // Output: 2
// console.log(fibonacci(4)); // Output: 3
// console.log(fibonacci(5)); // Output: 5

//*--------------------------------------
//* Coding Challenge: Repeat a String
//*--------------------------------------

//* Write a function called repeatString that takes two parameters:

//? str: A string that needs to be repeated.
//?  num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.

//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The input number num will be a non-negative integer.
//? The output string length should not exceed the length of str multiplied by num.

// const repeatString = (str,num) => {
//     let reStr ='';
//     while(num>0){
//         reStr = `${reStr}${str}`
//         num--
//     }
//     return reStr
// }

// Example usage:
// console.log(repeatString("abc", 3)); // Output: "abcabcabcabcabc"


//*--------------------------------------
//* Coding Challenge: Truncate a String
//*--------------------------------------

//* Write a function called truncateString that takes two parameters:

//? str: A string that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the truncated string.

//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The maximum length maxLength will be a positive integer.
//? The output string length should not exceed maxLength + 3 characters due to the addition of '...'.

// const truncateString =(str,num) => {
//     str=str.split(' ').join('');
//     return `${str.substring(0,num)}...`
// }

// // Example usage:
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Output: "A-tisket..."

//*-----------------------------------------------
//* Coding Challenge: Simple Password Validator
//*-----------------------------------------------

//* Write a function called simplePasswordValidator that takes a single parameter:

//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:

//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise, it should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? false otherwise.

//* Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.

// const simplePasswordValidator =(str) =>{
//     let hasLowerCase = false;
//     let hasUpperCase = false;
//     let hasNumber = false;
//     for(char of str){
//         if(char.charCodeAt(0)>=65 &&char.charCodeAt(0)<=90){
//             hasUpperCase= true;
//         }else if(char.charCodeAt(0)>=97 &&char.charCodeAt(0)<=122){
//             hasLowerCase= true;
//         }else if(!isNaN(Number(char))){
//             hasNumber= true;
//         }
//     }
//     return(hasLowerCase === true && hasUpperCase === true && hasNumber === true && str.length >= 8) ? true : false;
// }

// console.log(simplePasswordValidator("afkdsfadsf")); // Output: false
// console.log(simplePasswordValidator("afkdsfadsf1")); // Output: false
// console.log(simplePasswordValidator("afkdsfadsf1A")); // Output: true
// console.log(simplePasswordValidator("afkdsfadsf1Aa")); // Output: true

//*-----------------------------------------------
//* Coding Challenge: Recursive Number Range Generator
//*-----------------------------------------------

//? Write a recursive function called numberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to b (inclusive).

//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b.

// const numberRangeRecursive =(a,b) => {
//     let numArr =[];
//     for(let i=a; i<=b; i++){
//         numArr.push(i)
//     }
//     return numArr
// }
// _______________________________________________________
// const numberRangeRecursive =(a,b,arr=[]) => {
//     if(a<=b){
//         arr.push(a);
//         return numberRangeRecursive(a+1,b,arr)
//     }
//     return arr
// }


// console.log(numberRangeRecursive(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
// console.log(numberRangeRecursive(3, 7)); // Output: [3, 4, 5, 6, 7]
// console.log(numberRangeRecursive(-2, 2)); // Output: [-2, -1, 0, 1, 2]

//*----------------------------------------------
//* Coding Challenge: Number Range Generator
//*----------------------------------------------

//? Write a function called numberRange that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to b (inclusive).

//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b

// const numberRange =(a,b) => {
//     let numArr =[];
//     for(let i=a; i<=b; i++){
//         numArr.push(i)
//     }
//     return numArr
// }
// _______________________________________________________
// const numberRange =(a,b,arr=[]) => {
//     if(a<=b){
//         arr.push(a);
//         return numberRange(a+1,b,arr)
//     }
//     return arr
// }

// console.log(numberRange(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
// console.log(numberRange(3, 7)); // Output: [3, 4, 5, 6, 7]
// console.log(numberRange(-2, 2)); // Output: [-2, -1, 0, 1, 2]