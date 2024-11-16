console.log("Hello World!");

//This is a single line comment.
/* This is 
        a multi-line
                comment.
*/

let x = 5;
console.log("The value of the variable x is " + x);

let y;
y = "This is variable y.";
console.log(y);
console.log("y is a " + typeof(y));

let oddNum = [1,3,5,7,9];
console.log("The type of oddNum is " + typeof(oddNum));
console.log("The length of the array oddNum is " + oddNum.length);

let num = 5;
const pi = 3.14;
let area = Math.sqrt(num) * pi;
console.log("The area of a circle with radius 5 is " + area);

x += 10;
console.log("The value of x now is " + x);

let num1 = 0;
let z = false;

console.log("Statement 1: num1 == z.");
console.log("Statement 2: num1 === z.");

if(num1 == z){
        console.log("Statement 1 is true.");
}
else{
        console.log("Statement 1 is false.");
}

if(num1 === z){
        console.log("Statement 2 is true.");
}
else{
        console.log("Statement 2 is false.");
}

function add(x,y){
        return x + y;
}

function multiply(x, y){
        return x * y;
}

let num2 = multiply(add(x,num1), 10);
console.log("Num2 is " + num2);

let a = [];
a.push(x, num1, num2);

console.log("These are the elements of array a:");
for(let i = 0; i < a.length; i++){
        console.log(a[i]);
}

a.reverse();
console.log("These are the elements of array a in reverse order:");
for(let i = 0; i < a.length; i++){
        console.log(a[i]);
}

class Circle{
        constructor(radius){
                this.radius = radius;
        }

        circumference(){
                return 2 * 3.14 * this.radius;
        }

        area(){
                return Math.sqrt(this.radius) * 3.14;
        }
}

let c = new Circle(2);
console.log("The circumeference of circle c is " + c.circumference());
console.log("The area of circle c is " + c.area());

console.log("Here are some emojis: ");

console.log("\u{1F61c}")
console.log("\u{1F601}");
console.log("\u{1F60E}");
console.log("\u{1F4AB}");
console.log("\u{270C}");
console.log("\u{1F469}\u{200D}\u{1F4BB}");
console.log("\u{1F9CB}");