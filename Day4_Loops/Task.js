// Activity 1 : For Loop

// Task1:

for( let i = 1; i<=10; i++ ) {
    console.log(i)
}

// Task2:

for(let i=1;i<=10;i++) {
    console.log(`5 X ${i} = ${i*5}`)
}

// Activity 2 : While Loop

// Task3:

let sum=0,i=1
while(i<=10) {
    sum+=i
    i++
}

console.log(`Sum of numbers is ${sum}`);

// Task4:

let num = 10

while (num>0) {
    console.log(num);
    num--
}

// Activity 3 : Do - While Loop

// Task5:

let val = 1
do {
    console.log(val)
    val++
} while (val<=5)

// Task6:

let number = 5, fact = 1

do {
    fact *= number
    number--
} while (number>0)

console.log(`factorial of 5 is ${fact}`);


// Activity 4 : Nested Loops

// Task7:

for(let i=1;i<=5;i++){
    for(let j=0;j<i;j++){
        process.stdout.write("* ")
    }
    console.log()
}

// Activity 5 : Nested Loops

// Task8:

let str = ""
for (let index = 1; index <= 10; index++) {
    if(index === 5) continue
    str += index + " "
}
console.log(str)

// Task9:
let strg = ""

for (let index = 1; index <= 10; index++) {
    if ( index === 7 ) break
    strg += index+" "
}

console.log(strg);



