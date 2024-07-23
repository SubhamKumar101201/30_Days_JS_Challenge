// // Activity 1 : Array creation and access

// // Task1:

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr);

// // Task2:

// console.log(`first element of array is ${arr[0]} and last element of array is ${arr[arr.length-1]}`);

// // Activity 2 : Array methods

// // Task3:

// arr.push(11)

// console.log(arr);

// // Task4:

// arr.pop()

// console.log(arr);

// // Task5:

// arr.shift()
// arr.shift()

// console.log(arr);

// // Task6:

// arr.unshift(2)
// arr.unshift(0,1)

// console.log(arr);

// // Activity - 3 : Array methods

// // Task7:

// let val = []

// arr.shift()

// arr.map((item) => val.push(item*2))

// console.log(val);

// // Task8:

// const even = arr.filter(item => item % 2 == 0)

// console.log(even);

// // Task9:

// const sum = arr.reduce((accum,item) => accum+item)

// console.log(sum);

// // Activity - 4 : Array iteration

// // Task10:

// for(let i=0 ; i<even.length ; i++) {
//     process.stdout.write(even[i].toString()+" ")
// }

// console.log();

// // Task11:

// arr.forEach(item => console.log(item))

// // Activity - 5 : Multi-dimensional array

// // Task12:

// const mulArr = [[1,2],[3,4]]

// console.table(mulArr);

// // Task13:

// console.log(mulArr[0][1]);

// Pollyfill of Map method 

Array.prototype.myMap = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(cb(this[i], i, this));
    }
    return res
}

// Pollyfill of Filter method 

Array.prototype.myFilter = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) res.push(this[i])
    }
    return res
}

// Pollyfill of Reduce method 

Array.prototype.myReduce = function (cb,intialVal) {
    let res = intialVal;

    for (let i = 0; i < this.length; i++) {
        res = res ? cb(res,this[i],i,this) : this[0]
    }
    return res
}

const arr = [1,2,4,6,2,6,8,22,25]

let map = arr.myMap((i) => {
    return i
})

let filter = arr.myFilter((i,v) => {
    return i < v
})

const arr1 = [1,2,3,4,5]

let reduce = arr1.myReduce((acc,item) => {
    return acc + item
})

console.log(map);

console.log(filter);

console.log(reduce);

