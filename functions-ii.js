function multiply(x) {
  return function g(y) {
    return x * y;
  }
}


// console.log(multiply4(6))


//CLOSURE: function with a bit of external environment that it carries around with it

multiply(4)(6);
console.log(multiply(4)(6))
//24