function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i ++) {
        total += arguments[i]
    }
    return total;
}
// console.log(sum(1, 2, 3, 4));

function addition(...n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
        total += n[i]
    }
    return total;
}

//console.log(addition(1, 2, 3, 4));

// Function.prototype.myBind = function (ctx) {
    
//     let that = this; // explicitly saving ctx and closing over it with function declaration below
//     return function () { // es5 anon func, can't preserve context like fat-arrow
     
//         return that.apply(ctx); // `call` and `apply` are ways to invoke the function with the context passed in
//     }
// };

// Function.prototype.myBind = function(ctx) {
//     let that = this;
//     let binds = Array.prototype.slice.call(arguments).slice(1);  //bind time
//     return function binding(){
//         let calls = Array.prototype.slice.call(arguments);  //call time
//         return that.apply(ctx, binds.concat(calls));
//     }
// }

Function.prototype.myBind = function (ctx, ...bindargs) {
    let that = this;
    return function binding(...callargs) {
      
        return that.apply(ctx, bindargs.concat(callargs));
    }
}


// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// console.log(notMarkovSays("meow", "me"));
// // Pavlov says meow to me!
// // true

function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(args) {
        numbers.push(args)
        if (numbers.length === numArgs) {
            let total = 0;
            for (let i = 0; i < numbers.length; i++) {
                total += numbers[i];
            }
            return total;
        } else{
            return _curriedSum;
        }
    }
    return _curriedSum;
}

const total1 = curriedSum(4)(19)(20)(93)(1);
console.log(total1(19)(20)(93)(1))

Function.prototype.curry = function(numArgs) {
    let args = [];
    let that = this;
    function _curriedFunction(arg) {
        args.push(arg)
        if (args.length === numArgs) {
            return that(...args);
        } 
        else {
            return _curriedFunction;
        }
    }
    return _curriedFunction;
}

let a = sum.curry(3);

// console.log(a(1)(5)(10));
// console.log(sum(1, 5,10))
// // b(5);
// b(10);
