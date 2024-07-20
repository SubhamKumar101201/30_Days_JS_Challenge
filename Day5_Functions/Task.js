// Activity 1 : Function Declaration

// Task1:

function EvenOrOdd(num) {
    return num % 2 == 0 ? "Even" : "Odd"
}

console.log(`${7} is ${EvenOrOdd(7)}`);
console.log(`${4} is ${EvenOrOdd(4)}`);

// Task2:

function square(num) {
    return num * num;
}

console.log(`square of 5 is ${square(5)}`);

// Activity 2 : Function expression

// Task3:

function maxNum(num1,num2) {
    return num1 > num2 ? num1 : num2
}

console.log(`max number between two number is ${maxNum(5,3)}`);

// Task4:

function strConcatenate(str1, str2) {
    return str1+str2
}

console.log(`Concatenation of strings is "${strConcatenate("hello", " Subham")}"`);

// Activity 3 : Arrow Function

// Task5:

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(`sum of two numbers is ${sum(5,3)}`);

// Task6:

const checkStr = (char) => {
    return "Subham Kumar Das".includes(char) ? true : false
}

console.log(`string contains this character is ${checkStr('u')}`);

// Activity 4 : Function Parameters and Default Values

// Task7

function productNum(num1, num2 = 4) {
    return num1 * num2
}

console.log(`Product of two number is ${productNum(3)}`);

// Task8:

function greeting(name, age = 22) {
    console.log(`Hello ${name} for your ${age}th birthday`);
}

greeting("Subham", 23)

// Activity 5 : Higher Order Function

// Task9:

function arg(num) {
    console.log(`inner function call ${num} time`);
}

function iterationFun (arg, num) {
    for(let i=0;i<num;i++) {
        arg(i+1);
    }
}
iterationFun(arg, 5)

// Task10:

function arg1(num) {
    return num * num
}

function arg2(num) {
    return num * num
}

function highOrder(arg1,arg2,val) {
    return arg2(arg1(val))
}

console.log(`Four multiple of ${11} is ${highOrder(arg1, arg2, 11)}`);

