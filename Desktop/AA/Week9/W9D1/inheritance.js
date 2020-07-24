Function.prototype.inherits = function(superClass){
    function Surrogate(){}
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits1 = function (superClass) {
    this.prototype = Object.create(superClass.prototype);
    this.prototype.constructor = this;
}


function MovingObject() { 
    
}
MovingObject.prototype.hi = function(){
    return 'hi';
}

function Ship() {
}
Ship.inherits1(MovingObject);

Ship.prototype.pew = function() {
    console.log("Ship shot at asteroid");
}
// Ship.inherits(MovingObject);

function Asteroid() { 

}
Asteroid.inherits1(MovingObject);
Asteroid.prototype.smash = function() {
    return "Asteroid demolished the ship, oh the humanity!";
}


let a = new Ship();
console.log(a);
a.pew();
// console.log(a.smash());
console.log(a.hi());
