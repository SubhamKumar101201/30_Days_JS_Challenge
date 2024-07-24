// // Activity 1 : Template literals

// // Task1:

const name = 'subham kumar', age = 22

console.log(`My name is ${name} and I am ${age} years old`)

console.log();

// // Task2:

console.log(`My name is ${name} \nI am ${age} years old`)

// // Activity 2 : Destructuring

// // Task3:

console.log();

const numbers = [10, 20, 30, 40, 50];

const [first,second] = numbers;

console.log(first);  // Output: 10
console.log(second); // Output: 20
 

console.log();

// // Task4:
 
const user = {
    userName: 'Subham Kumar',
    userAge: 22,
    address: 'Odisha, India',
    email: 'subhamkumar@gmail.com'
}

const {userName, userAge, email} = user

console.log(userName,userAge);

// // Activity - 3 : Spread and Rest operators

// // Task5:

const newArr = [...numbers,...[60,70,80,90,100]]

console.log(newArr);

console.log();

// // Task6:

function sum(...arg) {
    let sum = 0;
    for (let i = 0; i < arg.length; i++) {
        sum += arg[i];
    }
    return sum
}

console.log(sum(10,20,30,40,50,60,70,80))

console.log();

// // Activity - 4 : 

// // Task7:
 


// // Activity - 5 : Default parameters

// // Task8:
 
function prod(num1, num2 = 1) {
    return num1 * num2
}

console.log(prod(44,2));

console.log();

// // Task9:

const prop1 = 'firstName'
const prop2 = 'lastName'

const userObj = {
    [prop1]: 'Subham',
    [prop2]: 'Kumar',
    [`get${prop1.charAt(0).toUpperCase() + prop1.slice(1)}`]() {
        return this[prop1]
    },
    [`get${prop2.charAt(0).toUpperCase() + prop2.slice(1)}`]() {
        return this[prop2]
    }
}

console.log(`${userObj[prop1]} ${userObj[prop2]}`);
console.log(userObj.getFirstName());
console.log(userObj.getLastName());

