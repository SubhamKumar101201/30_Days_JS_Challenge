// Activity 1 : Array creation and access

// Task1:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr);

// Task2:

console.log(`first element of array is ${arr[0]} and last element of array is ${arr[arr.length-1]}`);

// Activity 2 : Array methods

// Task3:

arr.push(11)

console.log(arr);

// Task4:

arr.pop()

console.log(arr);

// Task5:

arr.shift()
arr.shift()

console.log(arr);

// Task6:

arr.unshift(2)
arr.unshift(0,1)

console.log(arr);

// Activity - 3 : Array methods

// Task7:

let val = []

arr.shift()

arr.map((item) => val.push(item*2))

console.log(val);

// Task8:

const even = arr.filter(item => item % 2 == 0)

console.log(even);

// Task9:

const sum = arr.reduce((accum,item) => accum+item)

console.log(sum);

// Activity - 4 : Array iteration

// Task10:

for(let i=0 ; i<even.length ; i++) {
    process.stdout.write(even[i].toString()+" ")
}

console.log();

// Task11:

arr.forEach(item => console.log(item))

// Activity - 5 : Multi-dimensional array

// Task12:

const arr2 = [[1,2,3],[4,5,6],[7,8]]

console.log(arr2);

// Task13: