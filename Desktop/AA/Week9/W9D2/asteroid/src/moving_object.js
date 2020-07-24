
// function MovingObject(position, velocity, radius, color) {
//     this.position = position;
//     this.velocity = velocity;
//     this.radius = radius;
//     this.color = color;
// }
function MovingObject(options) {
    this.position = options.position;
    this.velocity = options.velocity;
    this.radius = options.radius;
    this.color = options.color;
}

MovingObject.prototype.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(this.position[0],this.position[1], this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    // this.move();
}

MovingObject.prototype.move = function(ctx){
    this.position += this.velocity;
}

module.exports = MovingObject;

