//DataTypes
var name = 'Naveen';
var age = 27;
var hasHobbies = true;

function summaryUser(userName, userAge, userHobbey){
    return(
        'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHobbey
    );
};

console.log(summaryUser(name, age, hasHobbies));

function varScoping(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x);
    }
    console.log(x);
}

varScoping();

function letScoping(){
    let x = 1;
    if(true){
        let x = 2;
        console.log(x);
    }
    console.log(x);
}

letScoping();

const varConst = 2;
//varConst = 3; // cannot reassign value
console.log(varConst);

const username = 'Naveen';
let userage = 27;
const userhasHobbies = true;

console.log(summaryUser(username, userage, userhasHobbies));


let a = 100;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);

let x = '10';
let y = parseInt(x);
console.log('x: ' + typeof x + '\ny: ' + typeof y);

let m = "101.1";
let n = parseFloat(m);
console.log('m: ' + typeof m + '\nn: ' + typeof n);

let p = "text";
console.log(isNaN(p+10));

let q = 100;
let r = q/0;
console.log(r);

console.log(isFinite(r) ? r : 0);

var t;
console.log(t);

var u = null;
console.log(u);

const sym = Symbol();
const sym2 = Symbol('sym');
const sym3 = Symbol('sym');

console.log(sym2 === sym3);

//Arrow Functions
const af1 = (a,b) => {
    return a+b;
}

console.log(af1(1,2));

const af2 = (a,b) => a+b;
console.log(af2(1,2));

const af3 = a => a+1;
console.log(af3(3));

const af4 = () => 4+1;
console.log(af4()); 

//Objects: Properties & Methods
const objects = {
    name: 'Naveen',
    age: 27,
    greet: () =>{
        console.log('Hi I\'m ' + this.name);
    }
};

console.log(objects);
objects.greet();

const objects2 = {
    name: 'Naveen',
    age: 27,
    greet(){
        console.log('Hi I\'m ' + this.name);
    }
};
objects2.greet();

const objects3 = {
    name: 'Naveen',
    age: 27,
    greet: function(){
        console.log('Hi I\'m ' + this.name);
    }
};
objects3.greet();

//Arrays & Array Methods, Reference Types
const arr = ['Naveen', 27, true, { job: 'SDE' }];
for(let item of arr){
    console.log(item);
}

console.log(arr.map(item =>{
    return 'Element: ' + item
}));
console.log(arr.map(item => 'Element: ' + item));
console.log(arr);

const arr2 = ['Naveen', 27, true, [10, 20]];
console.log(arr2.map(item => 'Element: ' + item));

arr.push('Programming');
console.log(arr);


//Spread operator
const person = {
    name: 'Spread',
    id: 1
};
const copyPerson = {...person};
console.log(copyPerson);

const array = [10, 20];
const copyArray = [...array];
console.log(copyArray);

//Rest operator
const restoperator = (...args) => {
    return args;
}
console.log(restoperator(1,2,3));
console.log(restoperator(1,2))

//Destruction of object and array
//object
const printPerson = () =>{
    console.log(person.name);
};
const destructingObject = ({name}) =>{
    console.log(name);
}
printPerson(person);
destructingObject(person);

const {id} = person;
console.log(id);

//array
const hobbey = ['Coding', 'Travelling'];
const [hobbey1, hobbey2] = hobbey;
console.log(hobbey2);

//Callback function
function greeting(name){
    console.log('Hello ' + name);
};
function processUserInput(callback){
    const uname = 'Naveen';
    callback(uname);
};
processUserInput(greeting);

//Closures
function init(){
    let name = 'closure';
    function display(){
        console.log(name);
    }
    display();
}
init();

//Async Code & Promises
/*const fetch = callback => {
    setTimeout(() => {
        callback('fetch callback');
    }, 1500);
}

setTimeout(() => {
    console.log('Done');
    fetch(text => {
        console.log(text);
    })
    
}, 2000);
console.log('Hello');*/

/*const fetchData = () =>{
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('Resolved!');
        }, 1500);
    });
    return promise;
}
setTimeout(() => {
    console.log('settimeout');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
            .then(text => {
                console.log(text);
            })
}, 2000);*/

//Async Await Promise
async function test(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1500);
    });
    let result = await promise;
    console.log(result);
    console.log('Last');
}

test()
