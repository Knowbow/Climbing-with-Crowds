/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst DEFAULT = {\n    COLOR: \"gray\",\n    RADIUS: 60\n};\n\nfunction Asteroid(options) {\n    // Utils.inherits(this, MovingObject);\n    MovingObject.call(this, options.position, options.velocity);\n    \n    // this.COLOR = options.color || \"gray\";\n    // this.RADIUS = options.radius || 60;\n    this.position = options.position;\n    this.velocity = options.velocity || Utils.randomVec(3);\n    this.color = options.color || DEFAULT.COLOR;\n    this.radius = options.radius || DEFAULT.RADIUS;\n}\n\nUtils.inherits(Asteroid, MovingObject); \n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n// const DEFAULTS = {\n//     DIM_X = 600,\n//     DIM_Y = 600,\n//     NUM_ASTEROIDS = 3\n// }\n\nfunction Game(){\n    this.DIM_X = 600;\n    this.DIM_Y = 600;\n    this.NUM_ASTEROIDS = 3;\n    this.asteroids = [];\n    this.addAsteroids();\n    \n}\n\nGame.prototype.addAsteroids = function(){\n    while (this.asteroids.length < DEFAULTS.NUM_ASTEROIDS) {\n        this.asteroids.push(new Asteroid({\n            position: this.randomPosition()\n        }))\n    }\n\n}\n\nGame.prototype.randomPosition = function(){\n    return [\n        Math.floor(Math.random() * 600)+1,\n        Math.floor(Math.random() * 600)+1\n        ]; \n}\n\nGame.prototype.draw = function(ctx){\n    for (let i = 0; i < this.asteroids.length; i++) {\n        let rock = this.asteroids[i];\n        ctx.clearRect();\n        rock.draw(ctx); \n        \n    }\n}\n\nGame.prototype.moveObjects = function(ctx){\n    for (let i=0; i<this.asteroids.length;i++){\n        let rock = this.asteroids[i];\n        rock.move(ctx);\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 600;\n    canvas.height = 600;\n\n    console.log('Webpack is working...');\n    const ctx = canvas.getContext('2d');\n    \n    const game = new Game()\n    game.draw();\n\n    // const circle1 = new MovingObject({ \n    //     position: [300,30],\n    //     velocity: [1,1],\n    //     radius: 30,\n    //     color: \"white\"        \n    // });\n\n    // const asteroid1 = new Asteroid({\n    //     position: [250, 250],\n    //     velocity: [1, 1],\n        \n    // });\n\n    \n\n    // function animate() {\n    //     circle1.draw(ctx);\n    //     circle1.move(ctx);\n    //     requestAnimationFrame(animate);\n    // }\n    // requestAnimationFrame(animate);\n\n    // setInterval(function () {\n    //     ctx.clearRect(0,0, 600,600);\n    //     ctx.fillRect(0, 0, 600, 600);\n        \n    //     circle1.draw(ctx);\n    //     circle1.move(ctx);\n    //     // circle1.draw(ctx);\n    //     // asteroid1.draw(ctx);\n    // } , 1000);\n\n\n    //const moMoney = new MovingObject( [30, 30], [10, 10], 5, \"#00FF00\");\n    // window.moMoney = moMoney;\n});\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// function MovingObject(position, velocity, radius, color) {\n//     this.position = position;\n//     this.velocity = velocity;\n//     this.radius = radius;\n//     this.color = color;\n// }\nfunction MovingObject(options) {\n    this.position = options.position;\n    this.velocity = options.velocity;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function(ctx){\n    ctx.beginPath();\n    ctx.arc(this.position[0],this.position[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n    // this.move();\n}\n\nMovingObject.prototype.move = function(ctx){\n    this.position += this.velocity;\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate(){}\n\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = Surrogate.prototype;\n\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n      },\n      // Scale the length of a vector by the given amount.\n      scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });