
// Question 1 Falsy or Truthy?
// Given 2 values, return 1st one if its falsy, otherwise return 2nd one 

/*TERNARY FUNCTION
function filterOutFalsy(value1, value2) {
    return !value1 ? value1 : value2
}
*/

function filterOutFalsy(elem1, elem2) {
     if(!elem1) {
        return elem1
     } else {
       return elem2
     }
}
/* ! one exclamation in front of element = opposite, !! = shows if element is falsy */
console.log(filterOutFalsy(0,500))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy(true, 'Dog'))



// Question 2 Return length of any given array

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4, 1]))
console.log(arrLength([]))


// Question 3 Get Last Element in Array

function lastElem(arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null, 5, false]))


// Question 4 Find Sum Of An Array

function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        //this is how you loo through every element in an array
        // console.log(arr[i]) to post all elements being looped through in array
        sum = sum + arr[i]
    }
    return sum
}

console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))
//to loop through any array, you need a for loop


/* Question 5 Add Up Numbers From A Single Number
Given a number, add up all the numbers from one to the number that is given. E.g. input of 4 will give 1 + 2 + 3 + 4 = 10 */

function progressiveSum(num) {
    let sum = 0 //when I hear sum, create variable for the sum values
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))


/*Question 6 Calculate the TimeRanges, given a number in seconds, return this number in mm:ss format */

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60)  //Math.floor rounds down to nearest integer
    let timerSeconds = seconds % 60

    if (timerMinutes.toString().length === 1) { // toString converts to string
        timerMinutes = '0' + timerMinutes
    }

    if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds
    }

    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))


/* Question 7 Find the Largest Number
Given an array of SVGAnimatedNumberList, return the largest number of array */

function getMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) { // let i = 1, since the max is already starting at 0, don't need to start at 0, redundant **more advanced
        if ((arr[i]) > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(getMax([5, 100, 0]))
console.log(getMax([12, 10, -20]))
console.log(getMax([-300, -100, -200]))


/* Question 8 Reverse a String
Given a string, return the reversed string
    1.use an incrementing for loop
    2.use a decrementing for loop
    3.use the array reverse property
*/

/*function reverseString(string) {
    let reversedString = ''
     for(let i=0; i < string.length; i++) {
        //This is how you loop through ever character in a string
        // console.log(string[i])
        reversedString = string[i] + reversedString
     }
     return reversedString
}
//increment ^^^ */

/*function reverseString(string) {
    let reversedString = ''
    for (let i = string.length - 1; i >= 0; i--) {
       reversedString += string[i]
    }
    return reversedString
}
//decrement */

// **can only .reverse an array not a string 
//convert a string into an array use .split('') with an empty string
// .join('') with empty string converts array back to a string
function reverseString(string) {
    return string.split('').reverse().join('')
}

console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))
// using reverse property


/* Question 9 Turn ever element in an array into 0
Given an array of elements, return the same length array filled with 0's
    1.Solution: For loop
    2.Solution: Array 'fill'
    3.Solution: Array 'map' 
*/

// function convertToZeros(arr) {
//     let zeroArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         zeroArray[i] = 0 
//     }
//     return zeroArray;
// }
//  Solution 1. For Loop


// function convertToZeros(arr) {
//     return new Array(arr.length).fill(0);
// }
// not commonly used method but will be using this method in future FES projects
//     Solution 2. Array 'fill'


function convertToZeros(arr) {
    return arr.map(elem => 0) 
}
// Using .map method - .map method allows you to convert elements in array to something else

console.log(convertToZeros([5, 100, 0]));
console.log(convertToZeros([12]));
console.log(convertToZeros([1, 2, 3,4, 5]));


/* Question 10  - Filter out all the apples
Given an array of fruits, if it is an apple remove it from the array.

Solution 1: For loop
Solution 2: Array ' filter'
*/

// function removeApples(arr) {
//     let noApples = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 'Apple'){
//             noApples.push(arr[i])
//         }
//     }
//     return noApples
// }
// // Solution 1 - For Loop


function removeApples(arr) {
    return arr.filter(elem => elem !== 'Apple')
    /* return arr.filter(elem => {
        return elem !== 'Apple' })*/
}
// .filter similar to .map and needs to be returned

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Orange', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple']))


/* Question 11 - Filter out all the falsy values
GIven an array of values, fliter out all the falsy values and only return the truthy values

* Solution 1: For Loop
* Solution 2: Array ' filter' */

function filterOutFalsy(arr) {
    let truthyArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i])
        }
    }
    return truthyArr
}
// Solution 1 - For Loop

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }
// // Solution 2 - filter method

// console.log(filterOutFalsy(['', [], 0, null, undefined, '0']))
// console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))
// console.log(filterOutFalsy(['Banana', 'Orange', 'Apple']))

//MY OWN TAKE
// function filterOutFalsy(arr) {
//     let truthyArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!!arr[i] === true) {
//             truthyArray.push(arr[i])
//         }
//     }
//     return truthyArray
// }

// console.log(filterOutFalsy(['Banana', 0, null, undefined, 1, 'f', false]))

// function filterOutFalsy(arr) {
//     return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(['Strawberries', 'Banana', 0, null, undefined, 1, 'f', false]))


/* Question 12 - Truthy to true, Falsy to false
Given an array of truthy and falsy values, return the same array of elements into its boolean value. */

function convertToBoolean(arr) {
    return arr.map(elem => !!elem)
}

console.log(convertToBoolean([500, 0, 'David', '', []]))