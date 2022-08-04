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


