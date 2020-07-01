Array.prototype.uniq = function(){
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if (arr.indexOf(this[i]) === -1) {
            arr.push(this[i]);
        }
         
    }
    return arr;
}
// let arr = [1,1,2,3,4];
// console.log(arr.uniq());

// '5' == 5 => true => 'bad'
// '5' === 5  => false

Array.prototype.two_sum = function(){
    let arr = [];
    for(let i=0;i<this.length;i++){
        for (let j = 0; j < this.length; j++){
            if(this[i]+this[j]===0)
                arr.push([i,j]);
            

        }

    }
    return arr;
}

// let arr = [1, -1, 3,4,5,-5,-3]
// console.log(arr.two_sum())



Array.prototype.transpose = function(){
    let outsideLength = this.length;
    outerLength = function () {
        return Array.from({ outsideLength })
    }
    let arr = Array.from({length: this[0].length}, outerLength)

    for(let i = 0; i < this.length; i++) { 
        for(let j = 0; j < this[0].length; j++) { // set to outerLength
            debugger
            arr[j][i] = this[i][j];
        }
    }
    return arr;
}

// let arr = [[1,2], [3,4], [5,6]]; //[1,3][2,4]
// console.log(arr.transpose());




