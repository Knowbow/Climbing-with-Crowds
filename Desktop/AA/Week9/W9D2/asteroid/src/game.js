const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Utils = require("./utils.js");

// const DEFAULTS = {
//     DIM_X = 600,
//     DIM_Y = 600,
//     NUM_ASTEROIDS = 3
// }

function Game(){
    this.DIM_X = 600;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 3;
    this.asteroids = [];
    this.addAsteroids();
    
}

Game.prototype.addAsteroids = function(){
    while (this.asteroids.length < DEFAULTS.NUM_ASTEROIDS) {
        this.asteroids.push(new Asteroid({
            position: this.randomPosition()
        }))
    }

}

Game.prototype.randomPosition = function(){
    return [
        Math.floor(Math.random() * 600)+1,
        Math.floor(Math.random() * 600)+1
        ]; 
}

Game.prototype.draw = function(ctx){
    for (let i = 0; i < this.asteroids.length; i++) {
        let rock = this.asteroids[i];
        ctx.clearRect();
        rock.draw(ctx); 
        
    }
}

Game.prototype.moveObjects = function(ctx){
    for (let i=0; i<this.asteroids.length;i++){
        let rock = this.asteroids[i];
        rock.move(ctx);
    }
}

module.exports = Game;