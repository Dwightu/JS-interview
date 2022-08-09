// 1. What are the data types present in js?
// primitive types-String, Number, BigInt, Boolean, Undefined, Null
// non-primitive types?
// Object
var obj1={
    x:43,
    y:"Hello world",
    z:function(){
        return this.x;
    }
}

// 2. Explain Hoisting in Javascript;
hoistedVariable=3;
console.log(hoistedVariable);
var hoistedVariable; 

// 3. debugger
// 4. == vs ===


// 5. let vs var
// let has scope block; let will not be hoisted

var x=3;
var y="3";
x+y //"33"

x-y // 0

// 6. NaN means Not a Number

// 7. primitive value is passed by value but object is passed by reference

// 8. Immediately Invoked function
(function(){
    //Do something
})();

// 9. Curried function
function add(a){
    return function(b){
        return a+b;
    }
}

add(3)(4)


// 10. Closures functions
// A closure is a functionm that accesses variables "outside" itself, in another function's scope,even if it's closed.
function outer() {
    let counter = 0;
  
    function incrementCounter() {
      // we have access to counter here even though it's defined in the parent scope
      counter += 1;
      return counter;
    }
    return incrementCounter();
  }
  
  console.log(outer()); //1 
  console.log(outer()); //1




  function outer() {
    let counter = 0;
  
    function incrementCounter() {
      // we have access to counter here even though it's defined in the parent scope
      counter += 1;
      return counter;
    }
    return incrementCounter;
  }
  
  let myFunc = outer();
  console.log(myFunc());// 1
  console.log(myFunc());// 2
// The ability of a function to store a variable for further reference even after it's executed is called Closure;


// 11. What are object prototypes?
// Like array prototype

let arr=[];
arr.push(2);
console.log(arr);
// The javascript engine sees that the method push does not exist on the current array object
// and therefore, looks for the method push inside the Array prototype and it finds the method.


// 12. Callback functions?
// A callback function is a function that will be executed after another function is executed.


// 13. var vs let
var variable1=23;
let variable2=89;

window.variable2;// underfinded
//the variables declared with the var keyword in the global scope are not added to the window/global object

// 14. A block means the code written inside the curly braces{}
// variables declared with var won;t affect by scope



// 15. Spread operator.
let fourNums=[1,2,3,4]

function addFourNum(num1,num2,num3,num4){
  return num1+num2+num3+num4;
}

addFourNum(...fourNums);

// 16. Promise
// four states:
// 1. pending - initial state of promise.
// 2. Fulfilled.
// 3. Rejected.
// 4. Settled. 
function sumOfThreeNums(...elements){
  return new Promise((resolve,reject)=>{
    if(elements.length>3){
      reject("we only support 3 elements!!!");
    }else{
      let sum=0;
      elements.forEach(el=>{
        sum+=el;
      })
    }
    resolve("Sum has been calculated!!!!");
    
  })
}