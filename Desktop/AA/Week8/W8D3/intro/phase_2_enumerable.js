Array.prototype.myEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
    
}

Array.prototype.myMap = function (callback) {
    let arr = new Array(this.length); // also could push into empty array
    for (let i = 0; i < this.length; i++) {
        arr[i] = callback(this[i]);
    }
    return arr;
}

timesTwo = function (num) {
    return num * 2;
}

// let arr = [1,2,3,4,5];
// console.log(arr.myMap(timesTwo))
// console.log(arr)

Array.prototype.myReduce = function (callback, initialValue=0) {
    let a = initialValue;
    for(let i = 0; i < this.length; i++){
        a = a + this[i]; 
    }
    
    return a;
}
adding = function (num1, num2) {
    return num1+num2;
}

// let arr = [1,2,3];
// console.log(arr.myReduce(adding, 10));

Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted){
        sorted = true;

        for(let i =0;i<this.length;i++){
            for(let j=0;j<this.length;j++) {
                if (i < j && this[i] > this[j]) {
                    // this[j],this[i] = this[i],this[j];
                    let a = this[j];
                    let b = this[i];
                    this[i] = a;
                    this[j] = b;
                    sorted = false;
                }
            }
        }
    }
    return this;
}
// let arr = [7,5,7,8,9];
// console.log(arr.bubbleSort());



String.prototype.subStrings = function (){
    
    let arr = [];
    
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length+1; j++) {
            if (i < j) {
                arr.push(this.slice(i,j));
            }
        }
    }
    return arr
}

// let string = "Ball";
// console.log(string.subStrings());
// console.log(string.slice(0,3));

range = function(start, end) {
    // base case
    if(start===end){
        return [start];
    }
    
    // recursive call
    return range(start, end-1).concat(end)
}

//console.log(range(1,5))

sumRec = function(arr){ 
    // base case
    if (arr.length === 0){
        return 0;
    }
    //iterative step 
    return arr[arr.length - 1] + sumRec(arr.slice(0, arr.length-1));
}

// arr = [1,2,3,4,5]
// console.log(sumRec(arr))


exponent = function(base, exp) {
    //base case
    if (exp === 1) {
        return base; 
    }

    // iterative step 
      return exponent(base, exp-1)*base;
}

// console.log(exponent(2, 3))

fibonacci = function(n) {
    //base case
    if (n === 0){
        return [1]
    }
    else if (n===1) {
        [1,1]
    }

    //recursive step
    

}

console.log(fibonacci(3))