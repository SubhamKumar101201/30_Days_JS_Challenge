const user = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Mike',  
        age: 20
    },
    {
        name: 'subham',
        age: 25
    },
    {
        name: 'sonu',
        age:12
    },
    {
        name: 'sunny',
        age: 15
    },
    {
        name: 'sunny',
        age: 15
    }
]

const res = user.filter(item => item.age > 18).map(item => item.name)

console.log(res);

const arr = [1,2,3,4,2,3,6,6,8,2,4,2,3,9,5]

const val = arr => [...new Set(arr)]

console.log(val(arr));

const str = 'hello subham kumar'

const output = str.split(" ").reverse().join(" ")

console.log(output);


const obj1 = {
    name: 'subham',
    age: 25,
    height: 5.2,
    weight: 90
}

const obj2 = {
    name: 'kumar',
    age: 25,
    height: 4.6,
    weight: 85
}

const merge = (obj1,obj2) => ({...obj1,...obj2})

console.log(merge(obj1,obj2));

const date = new Date().toISOString().split('T')[0]

console.log(date);

const array = [1,2,3,4,5,6,7,8,9,10]

const value = array.map((_,index,arr) => {
    let res = []
    if(index === 0) {res.push(arr[0])} else {
        let val = 0;
        for(let i=0;i<index;i++) {
            val += arr[i]
        }
        res.push(val)
    }
    return res
})

console.log(value);