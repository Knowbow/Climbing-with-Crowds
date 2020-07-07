const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js");

const DEFAULT = {
    COLOR: "gray",
    RADIUS: 60
};

function Asteroid(options) {
    // Utils.inherits(this, MovingObject);
    MovingObject.call(this, options.position, options.velocity);
    
    // this.COLOR = options.color || "gray";
    // this.RADIUS = options.radius || 60;
    this.position = options.position;
    this.velocity = options.velocity || Utils.randomVec(3);
    this.color = options.color || DEFAULT.COLOR;
    this.radius = options.radius || DEFAULT.RADIUS;
}

Utils.inherits(Asteroid, MovingObject); 

module.exports = Asteroid;