//Step 1
let obj1 = {
    x: 5,
    string: "This is object one",
    arr: [3, 6, 9],
    obj: { y: 10 }
}

//Step 2
let obj2 = Object.create(Object.prototype)
obj2.z = 2;
obj2.string2 = "This is object 2";
console.log(obj2);

//Step 3
let obj2OwnProperties = Object.getOwnPropertyNames(obj2);
console.log(obj2OwnProperties)

//Step 4
let obj2Prototype = Object.getPrototypeOf(obj2)
console.log(obj2Prototype)

//Step 5
let o1 = { a: 1 }

let o2 = Object.create(o1)
o2.b = 3;

let o3 = Object.create(o2)
o3.c = 5;

let o3OwnProperties = Object.getOwnPropertyNames(o3)
console.log(o3OwnProperties)

let o3InheritedProperties = Object.getPrototypeOf(o3)
console.log(o3InheritedProperties)

//Step 6
let aIsInO3 = "a" in o3;
let bIsInO3 = "b" in o3;
console.log("a is in o3: " + aIsInO3)
console.log("b is in o3: " + bIsInO3)

//Step 7
let aISOwnPropertyOfO3 = o3.hasOwnProperty("a")
let bISOwnPropertyOfO3 = o3.hasOwnProperty("b")
console.log("a is own property of o3: " + aISOwnPropertyOfO3)
console.log("b is own property of o3: " + bISOwnPropertyOfO3)

//Step 8
let aISEnumerable = o3.propertyIsEnumerable("a")
let bISEnumerable = o3.propertyIsEnumerable("b")
console.log("a is enumerable: " + aISEnumerable)
console.log("b is enumerable: " + bISEnumerable)

//Step 9
let o3EnumerableProperties = Object.keys(o3)
console.log("o3 enumerable properties: " + o3EnumerableProperties)

//Step 10

        //First Method
        let source = { x: 2, y: 4, z: "Even Numbers" }
        let target = { y: 6 }

        for (key in source) {
            target.hasOwnProperty(key) || (target[key] = source[key])
        }
        console.log(target)

        //Second Method
        let source2 = { a: 1, b: 3, c: "Odd Numbers" }
        let target2 = { a: 5 }

        Object.keys(source2).forEach(key => {
            if (!target2.hasOwnProperty(key)) {
                target2[key] = source2[key]
            }
        })
        console.log(target2)

//Step 11

let o4 = {x:"Hello", y: "World"}

let o5 = Object.create(o4)
o5.z = "Programming is fun!"

let s = JSON.stringify(o5)
console.log(s)

//Step 12
let o6 = JSON.parse(JSON.stringify(o4))
console.log(o6)

//Step 13

let o7 = {
    name: "Laura",
    age: 19,
    toString: () => {return `${o7.name}, ${o7.age}`}
}

console.log(String(o7))

//Step 14

let k = 10; 
let l = 20;

let o8 = {k, l}
console.log(o8)

//Step 15

let o9 = {v:"Blue", x: "Red"}
let o10 = {y:"Yellow", z: "Green"}

let o11 = {...o9, ...o10}
console.log(o11)

//Step 16

let student = {
    year: "Sophomre",
    get schoolYear() {
        return this.year;
    },
    set schoolYear(schoolYear) {
        this.year = schoolYear;
    }
}

console.log(student.schoolYear)
student.schoolYear = "Junior"
console.log(student)







