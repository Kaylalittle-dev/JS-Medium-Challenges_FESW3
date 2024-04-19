
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
    -use an incrementing for loop
    -use a decrementing for loop
    -use the array reverse property
*/

function reverseString(string) {
     
}

console.log(reverseString('abc'))
console.log(reverseString('David'))
console.log(reverseString('This is cool'))