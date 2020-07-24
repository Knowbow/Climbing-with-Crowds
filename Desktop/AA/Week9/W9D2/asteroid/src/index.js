const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Utils = require("./utils.js");
const Game = require("./game.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('game-canvas');
    canvas.width = 600;
    canvas.height = 600;

    console.log('Webpack is working...');
    const ctx = canvas.getContext('2d');
    
    const game = new Game()
    game.draw();

    // const circle1 = new MovingObject({ 
    //     position: [300,30],
    //     velocity: [1,1],
    //     radius: 30,
    //     color: "white"        
    // });

    // const asteroid1 = new Asteroid({
    //     position: [250, 250],
    //     velocity: [1, 1],
        
    // });

    

    // function animate() {
    //     circle1.draw(ctx);
    //     circle1.move(ctx);
    //     requestAnimationFrame(animate);
    // }
    // requestAnimationFrame(animate);

    // setInterval(function () {
    //     ctx.clearRect(0,0, 600,600);
    //     ctx.fillRect(0, 0, 600, 600);
        
    //     circle1.draw(ctx);
    //     circle1.move(ctx);
    //     // circle1.draw(ctx);
    //     // asteroid1.draw(ctx);
    // } , 1000);


    //const moMoney = new MovingObject( [30, 30], [10, 10], 5, "#00FF00");
    // window.moMoney = moMoney;
});

