let str = "example";
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed); // Output: "elpmaxe"


let str2 = "count me";
let count = 0;
for (let i = 0; i < str2.length; i++) {
    count++;
}
console.log(count); // Output: 8


let sentence = "hello world from js";
let words = sentence.split(' ');
let capitalizedSentence = '';
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    capitalizedSentence += word.charAt(0).toUpperCase() + word.slice(1);
    if (i !== words.length - 1) {
        capitalizedSentence += ' ';
    }
}
console.log(capitalizedSentence); // Output: "Hello World From Js"

let arr = [10, 5, 3, 12, 7];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max); // Output: 12
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min); // Output: 3

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum); // Output: 37

let condition = num => num > 5;
let filtered = [];
for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
        filtered.push(arr[i]);
    }
}
console.log(filtered); // Output: [10, 12, 7]

let n = 5;
let result = 1;
for (let i = 2; i <= n; i++) {
    result *= i;
}
console.log(result); // Output: 120

let num = 29;
let isPrime = num > 1;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime); // Output: true

let fibTerms = 7;
let fibSequence = [0, 1];
for (let i = 2; i < fibTerms; i++) {
    fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
}
console.log(fibSequence.slice(0, fibTerms)); // Output: [0, 1, 1, 2, 3, 5, 8]



