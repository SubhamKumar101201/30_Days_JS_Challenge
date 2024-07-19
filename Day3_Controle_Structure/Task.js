// Activity 1 : If - Else Statements

// Task1:

const num = 0

if (num >= 0) {
    if (num == 0) {
        console.log("Number is Zero");
    } else {
        console.log("Number is Positive");
    }
} else {
    console.log("Number is Negative");
}

// Task2:

const personAge = -22

if (personAge >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not Eligible for vote");
}

// Activity 2 : Nested If - Else Statements

// Task3:

const a = 20, b = 1, c = 5

if (a > b) {
    if (a > c) {
        console.log("A is greater");
    } else {
        console.log("C is greater");
    }
} else {
    if (b > c) {
        console.log("B is greater");
    } else {
        console.log("C is greater");
    }
}

// Activity 3 : Switch cases

// Task4:

const day = 1

switch (day) {
    case 0: 
        console.log("Sunday");    
        break;
    case 1: 
        console.log("Monday");    
        break;
    case 2: 
        console.log("Tuesday");    
        break;
    case 3: 
        console.log("Thursday");    
        break;
    case 4: 
        console.log("Friday");    
        break;
    case 5: 
        console.log("Saturday");    
        break;
    default:
        break;
}

// Task5:

const score = 60

switch (score) {
    case (score>=90): console.log("A");
        break;
    case (score>=80): console.log("B");
        break;
    case (score>=70): console.log("C");
        break;
    case (score>=60): console.log("D");
        break;
    case (score>=50): console.log("E");
        break;
    default: console.log("F");
}