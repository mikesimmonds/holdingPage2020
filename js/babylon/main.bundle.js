/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action-util.ts":
/*!****************************!*\
  !*** ./src/action-util.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// https://doc.babylonjs.com/how_to/how_to_use_actions
var ActionUtil = /** @class */ (function () {
    function ActionUtil() {
    }
    // mesh is the thing to click on, fn is the function to call when it is dbl clicked
    ActionUtil.onDoubleClick = function (mesh, fn, scene) {
        // Attach Action Manager to the mesh
        mesh.actionManager = new BABYLON.ActionManager(scene);
        // Register some actions on the AM
        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnDoublePickTrigger, fn));
    };
    ActionUtil.onSingleClick = function (mesh, fn, scene) {
        // Attach Action Manager to the mesh
        mesh.actionManager = new BABYLON.ActionManager(scene);
        // Register some actions on the AM
        mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, fn));
    };
    return ActionUtil;
}());
exports.ActionUtil = ActionUtil;


/***/ }),

/***/ "./src/anim-util.ts":
/*!**************************!*\
  !*** ./src/anim-util.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_util_1 = __webpack_require__(/*! ./math-util */ "./src/math-util.ts");
var AnimUtil = /** @class */ (function () {
    function AnimUtil() {
    }
    AnimUtil.flyAnimation = function () {
        var animationBox = new BABYLON.Animation("myAnimation", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        // An array with all animation keys
        var keys = [
            {
                frame: 0,
                value: 1
            },
            {
                frame: 40,
                value: math_util_1.MathUtil.getRandomInt(200, 500)
            },
            {
                frame: 1000,
                value: 8000
            }
        ];
        animationBox.setKeys(keys);
        return animationBox;
    };
    return AnimUtil;
}());
exports.AnimUtil = AnimUtil;


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BABYLON = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
var math_util_1 = __webpack_require__(/*! ./math-util */ "./src/math-util.ts");
var rocket_1 = __webpack_require__(/*! ./rocket */ "./src/rocket.ts");
var scroll_move_1 = __webpack_require__(/*! ./scroll-move */ "./src/scroll-move.ts");
var Game = /** @class */ (function () {
    // private _sharkMesh: BABYLON.AbstractMesh;
    // private _sharkAnimationTime = 0;
    // private _swim: boolean = false;
    // private _txtCoordinates: { txtX: GUI.TextBlock, txtY: GUI.TextBlock, txtZ: GUI.TextBlock } = null;
    function Game(canvasElement) {
        // Create canvas and engine
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        // create a basic BJS Scene object
        this._scene = new BABYLON.Scene(this._engine);
        // Set background color
        var greyVal = 0.1;
        this._scene.clearColor = new BABYLON.Color4(greyVal, greyVal, greyVal, 0);
        // creates the sandy ground
        // let ground = GameUtils.createGround(this._scene);
        // https://doc.babylonjs.com/babylon101/cameras#universal-camera
        // Create a UniversalCamera Parameters : name, position, scene
        var camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(10, 85, 40), this._scene);
        // Targets the camera to a particular position. In this case the scene origin
        camera.setTarget(new BABYLON.Vector3(0, 0, -600));
        // Attach the camera to the canvas
        camera.attachControl(this._canvas, true);
        this._light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this._scene);
        // Add scroll wheel support
        scroll_move_1.ScrollMove.scrollMoveInit(this._scene);
        var rockets = [];
        //Create some rockets
        for (var i = 0; i < 84; i++) {
            var yPos = 0; // So they are on the ground
            var xPos = math_util_1.MathUtil.getRandomInt(-300, 300);
            var zPos = math_util_1.MathUtil.getRandomInt(250, -600);
            rockets.push(rocket_1.Rocket.createRocket(xPos, yPos, zPos, this._scene));
        }
        window.addEventListener('keydown', function (e) {
            if (e.key == " ") {
                rockets.forEach(function (rocket) { return rocket.play(false); });
                return true;
            }
        });
        // Physics engine also works
        var gravity = new BABYLON.Vector3(0, -0.9, 0);
        this._scene.enablePhysics(gravity, new BABYLON.CannonJSPlugin());
    };
    /**
     * Starts the animation loop.
     */
    Game.prototype.animate = function () {
        // this._scene.registerBeforeRender(() => {
        //     let deltaTime: number = (1 / this._engine.getFps());
        //     this.animateShark(deltaTime);
        // });
        var _this = this;
        // run the render loop
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // the canvas/window resize event handler
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! babylonjs-loaders */ "./node_modules/babylonjs-loaders/babylonjs.loaders.min.js");
var game_1 = __webpack_require__(/*! ./game */ "./src/game.ts");
var CANNON = __webpack_require__(/*! cannon */ "./node_modules/cannon/build/cannon.js");
window.addEventListener('DOMContentLoaded', function () {
    // Set global variable for cannonjs physics engine
    window.CANNON = CANNON;
    var game = new game_1.Game('renderCanvas');
    game.createScene();
    game.animate();
});


/***/ }),

/***/ "./src/math-util.ts":
/*!**************************!*\
  !*** ./src/math-util.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };
    return MathUtil;
}());
exports.MathUtil = MathUtil;


/***/ }),

/***/ "./src/model-utils.ts":
/*!****************************!*\
  !*** ./src/model-utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModelUtils = /** @class */ (function () {
    function ModelUtils() {
    }
    // https://doc.babylonjs.com/babylon101/parametric_shapes
    ModelUtils.makeLine = function (name, scene, xPos, yPos, zPos) {
        //Array of points to construct lines
        var myPoints = [
            new BABYLON.Vector3(xPos + 0, yPos + 0, zPos + 0),
            new BABYLON.Vector3(xPos + 0, yPos + 10, zPos + 0),
            new BABYLON.Vector3(xPos + 0, yPos + 10, zPos + 10),
            new BABYLON.Vector3(xPos + 20, yPos + 10, zPos + 10),
            new BABYLON.Vector3(xPos + 20, yPos + 20, zPos + 10),
        ];
        //Create lines
        return BABYLON.MeshBuilder.CreateLines(name, { points: myPoints }, scene);
    };
    // https://doc.babylonjs.com/babylon101/particles#particle-emitter
    ModelUtils.createParticles = function (name, emitter, scene) {
        var particleSystem;
        if (BABYLON.GPUParticleSystem.IsSupported) {
            particleSystem = new BABYLON.GPUParticleSystem(name, { capacity: 10000 }, scene);
        }
        else {
            particleSystem = new BABYLON.ParticleSystem("particles", 50000, scene);
        }
        particleSystem.emitRate = 1000;
        particleSystem.particleEmitterType = new BABYLON.SphereParticleEmitter(1);
        particleSystem.particleTexture = new BABYLON.Texture("/textures/flare.png", scene);
        particleSystem.maxLifeTime = 10;
        particleSystem.minSize = 0.01;
        particleSystem.maxSize = 0.1;
        particleSystem.emitter = emitter;
        return particleSystem;
    };
    return ModelUtils;
}());
exports.ModelUtils = ModelUtils;


/***/ }),

/***/ "./src/rocket.ts":
/*!***********************!*\
  !*** ./src/rocket.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var action_util_1 = __webpack_require__(/*! ./action-util */ "./src/action-util.ts");
var anim_util_1 = __webpack_require__(/*! ./anim-util */ "./src/anim-util.ts");
var model_utils_1 = __webpack_require__(/*! ./model-utils */ "./src/model-utils.ts");
var Rocket = /** @class */ (function () {
    function Rocket() {
    }
    Rocket.createRocket = function (xPos, yPos, zPos, scene) {
        // Create Lines
        var lines = model_utils_1.ModelUtils.makeLine('lines', scene, xPos, yPos, zPos);
        //Create a box to attach particles to
        var rocketEngine = BABYLON.MeshBuilder.CreateBox("rocketEngine", { height: 0.1, width: 0.1, depth: 0.1 }, scene);
        rocketEngine.position = new BABYLON.Vector3(xPos, yPos, zPos);
        //Create box to help with clicking
        var clickBox = BABYLON.MeshBuilder.CreateBox("clickBox", { height: 20, width: 20, depth: 10 }, scene);
        clickBox.position = new BABYLON.Vector3(xPos + 10, yPos + 10, zPos + 5);
        var invisibeMaterial = new BABYLON.StandardMaterial("invisibleMaterial", scene);
        invisibeMaterial.alpha = 0;
        clickBox.material = invisibeMaterial;
        // Add Particles to lines
        var particleEmitter = model_utils_1.ModelUtils.createParticles('particles', rocketEngine, scene);
        // Animations
        var upDownAnim = anim_util_1.AnimUtil.flyAnimation();
        //CreateAnimation Group
        var animationGroup = new BABYLON.AnimationGroup("rocket");
        // Add mesh and animation to the group
        animationGroup.addTargetedAnimation(upDownAnim, lines);
        animationGroup.addTargetedAnimation(upDownAnim, rocketEngine);
        //Start animation on object when called
        var beginAnimation = function () {
            // Start the particle party
            particleEmitter.start();
            var timer = setTimeout(function () {
                // Play animation
                animationGroup.play(false);
                clearTimeout(timer);
            }, 500);
        };
        //Set up Action on trigger
        action_util_1.ActionUtil.onSingleClick(clickBox, beginAnimation, scene);
        return animationGroup;
    };
    return Rocket;
}());
exports.Rocket = Rocket;


/***/ }),

/***/ "./src/scroll-move.ts":
/*!****************************!*\
  !*** ./src/scroll-move.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//  stolen from https://playground.babylonjs.com/#6FHKHC#17
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollMove = /** @class */ (function () {
    function ScrollMove() {
    }
    ScrollMove.scrollMoveInit = function (scene) {
        // wingnut crap.
        scene.onPrePointerObservable.add(function (pointerInfo, eventState) {
            // console.log(pointerInfo);
            var event = pointerInfo.event;
            // console.log("got event:", event);
            var delta = 0;
            if (event.deltaY) {
                delta = event.deltaY;
                // console.log("got delta:", delta);
            }
            else if (event.detail) {
                delta = -event.detail;
            }
            if (delta) {
                // console.log(delta);
                var dir = scene.activeCamera.getDirection(BABYLON.Axis.Z);
                // console.log("dir: ", dir);
                //scene.activeCamera.position.z += delta/10;
                if (delta < 0)
                    scene.activeCamera.position.addInPlace(dir);
                else
                    scene.activeCamera.position.subtractInPlace(dir);
                // scene.activeCamera.???;
                // if (event.preventDefault) {
                //     if (!noPreventDefault) {
                //         event.preventDefault();
                //     }
                // }
            }
        }, BABYLON.PointerEventTypes.POINTERWHEEL, false);
    };
    return ScrollMove;
}());
exports.ScrollMove = ScrollMove;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njcm9sbC1tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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QyxDQUFDO2dCQUNuRCwwQkFBMEI7Z0JBRTFCLDhCQUE4QjtnQkFDOUIsK0JBQStCO2dCQUMvQixrQ0FBa0M7Z0JBQ2xDLFFBQVE7Z0JBQ1IsSUFBSTthQUNMO1FBQ0gsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQWxDWSxnQ0FBVSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcbi8vIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vaG93X3RvL2hvd190b191c2VfYWN0aW9uc1xuZXhwb3J0IGNsYXNzIEFjdGlvblV0aWwge1xuICAvLyBtZXNoIGlzIHRoZSB0aGluZyB0byBjbGljayBvbiwgZm4gaXMgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBpdCBpcyBkYmwgY2xpY2tlZFxuICBwdWJsaWMgc3RhdGljIG9uRG91YmxlQ2xpY2sobWVzaCwgZm4sIHNjZW5lICkge1xuICAgIC8vIEF0dGFjaCBBY3Rpb24gTWFuYWdlciB0byB0aGUgbWVzaFxuICAgIG1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgIC8vIFJlZ2lzdGVyIHNvbWUgYWN0aW9ucyBvbiB0aGUgQU1cbiAgICBtZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24oXG4gICAgICBuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uRG91YmxlUGlja1RyaWdnZXIsXG4gICAgICAgIGZuXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBvblNpbmdsZUNsaWNrKG1lc2gsIGZuLCBzY2VuZSApIHtcbiAgICAvLyBBdHRhY2ggQWN0aW9uIE1hbmFnZXIgdG8gdGhlIG1lc2hcbiAgICBtZXNoLmFjdGlvbk1hbmFnZXIgPSBuZXcgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyKHNjZW5lKTtcbiAgICAvLyBSZWdpc3RlciBzb21lIGFjdGlvbnMgb24gdGhlIEFNXG4gICAgbWVzaC5hY3Rpb25NYW5hZ2VyLnJlZ2lzdGVyQWN0aW9uKFxuICAgICAgbmV3IEJBQllMT04uRXhlY3V0ZUNvZGVBY3Rpb24oXG4gICAgICAgIEJBQllMT04uQWN0aW9uTWFuYWdlci5PblBpY2tUcmlnZ2VyLFxuICAgICAgICBmblxuICAgICAgKVxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IHtNYXRoVXRpbH0gZnJvbSBcIi4vbWF0aC11dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBBbmltVXRpbCB7XG5cbiAgcHVibGljIHN0YXRpYyBmbHlBbmltYXRpb24oKTogQkFCWUxPTi5BbmltYXRpb24ge1xuICAgIHZhciBhbmltYXRpb25Cb3ggPSBuZXcgQkFCWUxPTi5BbmltYXRpb24oXG4gICAgICBcIm15QW5pbWF0aW9uXCIsXG4gICAgICBcInBvc2l0aW9uLnlcIixcbiAgICAgIDMwLCBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05UWVBFX0ZMT0FULCBCQUJZTE9OLkFuaW1hdGlvbi5BTklNQVRJT05MT09QTU9ERV9DWUNMRVxuICAgICk7XG4gICAgLy8gQW4gYXJyYXkgd2l0aCBhbGwgYW5pbWF0aW9uIGtleXNcbiAgICB2YXIga2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgZnJhbWU6IDAsXG4gICAgICAgIHZhbHVlOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcmFtZTogNDAsXG4gICAgICAgIHZhbHVlOiBNYXRoVXRpbC5nZXRSYW5kb21JbnQoMjAwLCA1MDApXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmcmFtZTogMTAwMCxcbiAgICAgICAgdmFsdWU6IDgwMDBcbiAgICAgIH1cbiAgICBdO1xuICAgIGFuaW1hdGlvbkJveC5zZXRLZXlzKGtleXMpO1xuICAgIHJldHVybiBhbmltYXRpb25Cb3hcbiAgfVxufVxuXG5cbiIsIiBpbXBvcnQgKiBhcyBCQUJZTE9OIGZyb20gJ2JhYnlsb25qcyc7XG5pbXBvcnQgKiBhcyBHVUkgZnJvbSAnYmFieWxvbmpzLWd1aSc7XG4gaW1wb3J0IHtBY3Rpb25VdGlsfSBmcm9tIFwiLi9hY3Rpb24tdXRpbFwiO1xuIGltcG9ydCB7TWF0aFV0aWx9IGZyb20gXCIuL21hdGgtdXRpbFwiO1xuIGltcG9ydCB7Um9ja2V0fSBmcm9tIFwiLi9yb2NrZXRcIjtcbiBpbXBvcnQge1Njcm9sbE1vdmV9IGZyb20gXCIuL3Njcm9sbC1tb3ZlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICAgIC8vIFRPRE86XG4gICAgLypcbiAgICBUb2RvOiB0aGlzIGdldHMgeW91ciBtYWNoaW5lIHJlYWxseSBob3QgICAuLi4uLi4gXG4gICAgICovXG5cbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgX2VuZ2luZTogQkFCWUxPTi5FbmdpbmU7XG4gICAgcHJpdmF0ZSBfc2NlbmU6IEJBQllMT04uU2NlbmU7XG4gICAgcHJpdmF0ZSBfY2FtZXJhOiBCQUJZTE9OLlVuaXZlcnNhbENhbWVyYTtcbiAgICBwcml2YXRlIF9saWdodDogQkFCWUxPTi5MaWdodDtcbiAgICAvLyBwcml2YXRlIF9zaGFya01lc2g6IEJBQllMT04uQWJzdHJhY3RNZXNoO1xuICAgIC8vIHByaXZhdGUgX3NoYXJrQW5pbWF0aW9uVGltZSA9IDA7XG4gICAgLy8gcHJpdmF0ZSBfc3dpbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vIHByaXZhdGUgX3R4dENvb3JkaW5hdGVzOiB7IHR4dFg6IEdVSS5UZXh0QmxvY2ssIHR4dFk6IEdVSS5UZXh0QmxvY2ssIHR4dFo6IEdVSS5UZXh0QmxvY2sgfSA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNhbnZhcyBhbmQgZW5naW5lXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fZW5naW5lID0gbmV3IEJBQllMT04uRW5naW5lKHRoaXMuX2NhbnZhcywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2NlbmUoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGJhc2ljIEJKUyBTY2VuZSBvYmplY3RcbiAgICAgICAgdGhpcy5fc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZSh0aGlzLl9lbmdpbmUpO1xuICAgICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICBjb25zdCBncmV5VmFsID0gMC4xO1xuICAgICAgICB0aGlzLl9zY2VuZS5jbGVhckNvbG9yID0gbmV3IEJBQllMT04uQ29sb3I0KGdyZXlWYWwsIGdyZXlWYWwsIGdyZXlWYWwsIDApO1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgdGhlIHNhbmR5IGdyb3VuZFxuICAgICAgICAvLyBsZXQgZ3JvdW5kID0gR2FtZVV0aWxzLmNyZWF0ZUdyb3VuZCh0aGlzLl9zY2VuZSk7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9iYWJ5bG9uMTAxL2NhbWVyYXMjdW5pdmVyc2FsLWNhbWVyYVxuICAgICAgICAvLyBDcmVhdGUgYSBVbml2ZXJzYWxDYW1lcmEgUGFyYW1ldGVycyA6IG5hbWUsIHBvc2l0aW9uLCBzY2VuZVxuICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgQkFCWUxPTi5Vbml2ZXJzYWxDYW1lcmEoXG4gICAgICAgICAgXCJVbml2ZXJzYWxDYW1lcmFcIixcbiAgICAgICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKDEwLCA4NSwgNDApLFxuICAgICAgICAgIHRoaXMuX3NjZW5lXG4gICAgICAgICk7XG4gICAgICAgIC8vIFRhcmdldHMgdGhlIGNhbWVyYSB0byBhIHBhcnRpY3VsYXIgcG9zaXRpb24uIEluIHRoaXMgY2FzZSB0aGUgc2NlbmUgb3JpZ2luXG4gICAgICAgIGNhbWVyYS5zZXRUYXJnZXQobmV3IEJBQllMT04uVmVjdG9yMygwLDAsLTYwMCkpO1xuICAgICAgICAgICAgLy8gQXR0YWNoIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xuICAgICAgICBjYW1lcmEuYXR0YWNoQ29udHJvbCh0aGlzLl9jYW52YXMsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2xpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCksIHRoaXMuX3NjZW5lKTtcblxuICAgICAgICAvLyBBZGQgc2Nyb2xsIHdoZWVsIHN1cHBvcnRcbiAgICAgICAgU2Nyb2xsTW92ZS5zY3JvbGxNb3ZlSW5pdCh0aGlzLl9zY2VuZSlcblxuICAgICAgICBjb25zdCByb2NrZXRzID0gW107XG4gICAgICAgIC8vQ3JlYXRlIHNvbWUgcm9ja2V0c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHlQb3MgPSAwOyAvLyBTbyB0aGV5IGFyZSBvbiB0aGUgZ3JvdW5kXG4gICAgICAgICAgICBjb25zdCB4UG9zID0gTWF0aFV0aWwuZ2V0UmFuZG9tSW50KC0zMDAsIDMwMCk7XG4gICAgICAgICAgICBjb25zdCB6UG9zID0gTWF0aFV0aWwuZ2V0UmFuZG9tSW50KDI1MCwgLTYwMCk7XG4gICAgICAgICAgICByb2NrZXRzLnB1c2goUm9ja2V0LmNyZWF0ZVJvY2tldCh4UG9zLCB5UG9zLCB6UG9zLCAgdGhpcy5fc2NlbmUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgcm9ja2V0cy5mb3JFYWNoKHJvY2tldCA9PiByb2NrZXQucGxheShmYWxzZSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvLyBQaHlzaWNzIGVuZ2luZSBhbHNvIHdvcmtzXG4gICAgICAgIGxldCBncmF2aXR5ID0gbmV3IEJBQllMT04uVmVjdG9yMygwLCAtMC45LCAwKTtcbiAgICAgICAgdGhpcy5fc2NlbmUuZW5hYmxlUGh5c2ljcyhncmF2aXR5LCBuZXcgQkFCWUxPTi5DYW5ub25KU1BsdWdpbigpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIGFuaW1hdGlvbiBsb29wLlxuICAgICAqL1xuICAgIGFuaW1hdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuX3NjZW5lLnJlZ2lzdGVyQmVmb3JlUmVuZGVyKCgpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCBkZWx0YVRpbWU6IG51bWJlciA9ICgxIC8gdGhpcy5fZW5naW5lLmdldEZwcygpKTtcbiAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0ZVNoYXJrKGRlbHRhVGltZSk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIHJ1biB0aGUgcmVuZGVyIGxvb3BcbiAgICAgICAgdGhpcy5fZW5naW5lLnJ1blJlbmRlckxvb3AoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2NlbmUucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoZSBjYW52YXMvd2luZG93IHJlc2l6ZSBldmVudCBoYW5kbGVyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9lbmdpbmUucmVzaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIENyZWF0ZXMgdGhlIEJBQllMT05KUyBTY2VuZVxuICAgIC8vICAqL1xuICAgIC8vIGNyZWF0ZVNjZW5lKCk6IHZvaWQge1xuICAgIC8vICAgICAvLyBjcmVhdGUgYSBiYXNpYyBCSlMgU2NlbmUgb2JqZWN0XG4gICAgLy8gICAgIHRoaXMuX3NjZW5lID0gbmV3IEJBQllMT04uU2NlbmUodGhpcy5fZW5naW5lKTtcbiAgICAvLyAgICAgLy8gY3JlYXRlIGEgRnJlZUNhbWVyYSwgYW5kIHNldCBpdHMgcG9zaXRpb24gdG8gKHg6MCwgeTo1LCB6Oi0xMClcbiAgICAvLyAgICAgdGhpcy5fY2FtZXJhID0gbmV3IEJBQllMT04uQXJjUm90YXRlQ2FtZXJhKFwiQ2FtZXJhXCIsIDMgKiBNYXRoLlBJIC8gMiwgTWF0aC5QSSAvIDQsIDMwLCBCQUJZTE9OLlZlY3RvcjMuWmVybygpLCB0aGlzLl9zY2VuZSk7XG4gICAgLy8gICAgIHRoaXMuX2NhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMuX2NhbnZhcywgdHJ1ZSk7XG4gICAgLy8gICAgIC8vIGNyZWF0ZSBhIGJhc2ljIGxpZ2h0LCBhaW1pbmcgMCwxLDAgLSBtZWFuaW5nLCB0byB0aGUgc2t5XG4gICAgLy8gICAgIHRoaXMuX2xpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodChcImxpZ2h0XCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMSwgMCksIHRoaXMuX3NjZW5lKTtcbiAgICAvLyAgICAgLy8gY3JlYXRlIHRoZSBza3lib3hcbiAgICAvLyAgICAgbGV0IHNreWJveCA9IEdhbWVVdGlscy5jcmVhdGVTa3lib3goXCJza3lib3hcIiwgXCIuL2Fzc2V0cy90ZXh0dXJlL3NreWJveC9Ucm9waWNhbFN1bm55RGF5XCIsIHRoaXMuX3NjZW5lKTtcbiAgICAvLyAgICAgLy8gY3JlYXRlcyB0aGUgc2FuZHkgZ3JvdW5kXG4gICAgLy8gICAgIGxldCBncm91bmQgPSBHYW1lVXRpbHMuY3JlYXRlR3JvdW5kKHRoaXMuX3NjZW5lKTtcbiAgICAvLyAgICAgLy8gY3JlYXRlcyB0aGUgd2F0ZXJtYXRlcmlhbCBhbmQgYWRkcyB0aGUgcmVsZXZhbnQgbm9kZXMgdG8gdGhlIHJlbmRlcmxpc3RcbiAgICAvLyAgICAgbGV0IHdhdGVyTWF0ZXJpYWwgPSBHYW1lVXRpbHMuY3JlYXRlV2F0ZXIodGhpcy5fc2NlbmUpO1xuICAgIC8vICAgICB3YXRlck1hdGVyaWFsLmFkZFRvUmVuZGVyTGlzdChza3lib3gpO1xuICAgIC8vICAgICB3YXRlck1hdGVyaWFsLmFkZFRvUmVuZGVyTGlzdChncm91bmQpO1xuICAgIC8vICAgICAvLyBjcmVhdGUgYSBzaGFyayBtZXNoIGZyb20gYSAub2JqIGZpbGVcbiAgICAvLyAgICAgR2FtZVV0aWxzLmNyZWF0ZVNoYXJrKHRoaXMuX3NjZW5lKVxuICAgIC8vICAgICAgICAgLnN1YnNjcmliZShzaGFya01lc2ggPT4ge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuX3NoYXJrTWVzaCA9IHNoYXJrTWVzaDtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLl9zaGFya01lc2guZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKFxuICAgIC8vICAgICAgICAgICAgICAgICBtZXNoID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdhdGVyTWF0ZXJpYWwuYWRkVG9SZW5kZXJMaXN0KG1lc2gpO1xuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAvLyBmaW5hbGx5IHRoZSBuZXcgdWlcbiAgICAvLyAgICAgbGV0IGd1aVRleHR1cmUgPSBHYW1lVXRpbHMuY3JlYXRlR1VJKCk7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gQnV0dG9uIHRvIHN0YXJ0IHNoYXJrIGFuaW1hdGlvblxuICAgIC8vICAgICBHYW1lVXRpbHMuY3JlYXRlQnV0dG9uU3dpbShndWlUZXh0dXJlLCBcIlN0YXJ0IFN3aW1taW5nXCIsXG4gICAgLy8gICAgICAgICAoYnRuKSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IHRleHRDb250cm9sID0gYnRuLmNoaWxkcmVuWzBdIGFzIEdVSS5UZXh0QmxvY2s7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5fc3dpbSA9ICF0aGlzLl9zd2ltO1xuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLl9zd2ltKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRleHRDb250cm9sLnRleHQgPSBcIlN0b3AgU3dpbW1pbmdcIjtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuX3NoYXJrQW5pbWF0aW9uVGltZSA9IDA7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRleHRDb250cm9sLnRleHQgPSBcIlN0YXJ0IFN3aW1taW5nXCI7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gRGVidWcgVGV4dCBmb3IgU2hhcmsgY29vcmRpbmF0ZXNcbiAgICAvLyAgICAgdGhpcy5fdHh0Q29vcmRpbmF0ZXMgPSBHYW1lVXRpbHMuY3JlYXRlQ29vcmRpbmF0ZXNUZXh0KGd1aVRleHR1cmUpO1xuICAgIC8vXG4gICAgLy8gICAgIC8vIFBoeXNpY3MgZW5naW5lIGFsc28gd29ya3NcbiAgICAvLyAgICAgbGV0IGdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0wLjksIDApO1xuICAgIC8vICAgICB0aGlzLl9zY2VuZS5lbmFibGVQaHlzaWNzKGdyYXZpdHksIG5ldyBCQUJZTE9OLkNhbm5vbkpTUGx1Z2luKCkpO1xuICAgIC8vIH1cblxuICAgIC8vXG5cbiAgICAvL1xuICAgIC8vIGFuaW1hdGVTaGFyayhkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLmRlYnVnRmlyc3RNZXNoQ29vcmRpbmF0ZSh0aGlzLl9zaGFya01lc2ggYXMgQkFCWUxPTi5NZXNoKTtcbiAgICAvLyAgICAgaWYgKHRoaXMuX3NoYXJrTWVzaCAmJiB0aGlzLl9zd2ltKSB7XG4gICAgLy8gICAgICAgICB0aGlzLl9zaGFya0FuaW1hdGlvblRpbWUgKz0gZGVsdGFUaW1lO1xuICAgIC8vICAgICAgICAgdGhpcy5fc2hhcmtNZXNoLmdldENoaWxkcmVuKCkuZm9yRWFjaChcbiAgICAvLyAgICAgICAgICAgICBtZXNoID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHJlYWxNZXNoID0gPEJBQllMT04uTWVzaD4gbWVzaDtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHZlcnRleERhdGEgPSBCQUJZTE9OLlZlcnRleERhdGEuRXh0cmFjdEZyb21NZXNoKHJlYWxNZXNoKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9ucyA9IHZlcnRleERhdGEucG9zaXRpb25zO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyT2ZQb2ludHMgPSBwb3NpdGlvbnMubGVuZ3RoIC8gMztcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlBvaW50czsgaSsrKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgdmVydGV4ID0gbmV3IEJBQllMT04uVmVjdG9yMyhwb3NpdGlvbnNbaSAqIDNdLCBwb3NpdGlvbnNbaSAqIDMgKyAxXSwgcG9zaXRpb25zW2kgKiAzICsgMl0pO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdmVydGV4LnggKz0gKE1hdGguc2luKDAuMTUgKiB2ZXJ0ZXgueiArIHRoaXMuX3NoYXJrQW5pbWF0aW9uVGltZSAqIDQgLSAxLjYpICogMC4wNSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gdmVydGV4Lng7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICB2ZXJ0ZXhEYXRhLmFwcGx5VG9NZXNoKG1lc2ggYXMgQkFCWUxPTi5NZXNoKTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICApO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogUHJpbnRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgZmlyc3QgdmVydGV4IG9mIGEgbWVzaFxuICAgIC8vICAqL1xuICAgIC8vIHB1YmxpYyBkZWJ1Z0ZpcnN0TWVzaENvb3JkaW5hdGUobWVzaDogQkFCWUxPTi5NZXNoKSB7XG4gICAgLy8gICAgIGlmKCFtZXNoIHx8ICFtZXNoLmdldENoaWxkcmVuKCkpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgZmlyc3RNZXNoID0gKG1lc2guZ2V0Q2hpbGRyZW4oKVswXSBhcyBCQUJZTE9OLk1lc2gpXG4gICAgLy8gICAgIGxldCB2ZXJ0ZXhEYXRhID0gQkFCWUxPTi5WZXJ0ZXhEYXRhLkV4dHJhY3RGcm9tTWVzaChmaXJzdE1lc2gpO1xuICAgIC8vICAgICBsZXQgcG9zaXRpb25zID0gdmVydGV4RGF0YS5wb3NpdGlvbnM7XG4gICAgLy8gICAgIGxldCBmaXJzdFZlcnRleCA9IG5ldyBCQUJZTE9OLlZlY3RvcjMocG9zaXRpb25zWzBdLCBwb3NpdGlvbnNbMV0sIHBvc2l0aW9uc1szXSk7XG4gICAgLy8gICAgIHRoaXMudXBkYXRlQ29vcmRpbmF0ZVRleHR1cmUoZmlyc3RWZXJ0ZXgpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIC8qKlxuICAgIC8vICAqIFByaW50cyB0aGUgZ2l2ZW4gVmVjdG9yM1xuICAgIC8vICAqIEBwYXJhbSBjb29yZGluYXRlc1xuICAgIC8vICAqL1xuICAgIC8vIHB1YmxpYyB1cGRhdGVDb29yZGluYXRlVGV4dHVyZShjb29yZGluYXRlczogQkFCWUxPTi5WZWN0b3IzKSB7XG4gICAgLy8gICAgIGlmKCFjb29yZGluYXRlcykge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuX3R4dENvb3JkaW5hdGVzLnR4dFgudGV4dCA9IFwiWDogXCIgKyBjb29yZGluYXRlcy54O1xuICAgIC8vICAgICB0aGlzLl90eHRDb29yZGluYXRlcy50eHRZLnRleHQgPSBcIlk6IFwiICsgY29vcmRpbmF0ZXMueTtcbiAgICAvLyAgICAgdGhpcy5fdHh0Q29vcmRpbmF0ZXMudHh0Wi50ZXh0ID0gXCJaOiBcIiArIGNvb3JkaW5hdGVzLno7XG4gICAgLy8gfVxuXG59XG4iLCJpbXBvcnQgJ2JhYnlsb25qcy1sb2FkZXJzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IENBTk5PTiA9IHJlcXVpcmUoJ2Nhbm5vbicpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gU2V0IGdsb2JhbCB2YXJpYWJsZSBmb3IgY2Fubm9uanMgcGh5c2ljcyBlbmdpbmVcbiAgd2luZG93LkNBTk5PTiA9IENBTk5PTjtcbiAgbGV0IGdhbWUgPSBuZXcgR2FtZSgncmVuZGVyQ2FudmFzJyk7XG4gIGdhbWUuY3JlYXRlU2NlbmUoKTtcbiAgZ2FtZS5hbmltYXRlKCk7XG59KTtcbiIsImV4cG9ydCBjbGFzcyBNYXRoVXRpbCB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47IC8vVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgfVxufVxuIiwiaW1wb3J0IHtMaW5lc01lc2h9IGZyb20gXCJiYWJ5bG9uanMvTWVzaGVzL2xpbmVzTWVzaFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBNb2RlbFV0aWxzIHtcblxuICAvLyBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2JhYnlsb24xMDEvcGFyYW1ldHJpY19zaGFwZXNcbiAgcHVibGljIHN0YXRpYyBtYWtlTGluZShuYW1lLCBzY2VuZSwgeFBvcywgeVBvcywgelBvcyk6IEJBQllMT04uTGluZXNNZXNoIHtcbiAgICAvL0FycmF5IG9mIHBvaW50cyB0byBjb25zdHJ1Y3QgbGluZXNcbiAgICB2YXIgbXlQb2ludHMgPSBbXG4gICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MrMCwgeVBvcyswLCB6UG9zKzApLFxuICAgICAgbmV3IEJBQllMT04uVmVjdG9yMyh4UG9zKzAsIHlQb3MrMTAsIHpQb3MrMCksXG4gICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MrMCwgeVBvcysxMCwgelBvcysxMCksXG4gICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MrMjAsIHlQb3MrMTAsIHpQb3MrMTApLFxuICAgICAgbmV3IEJBQllMT04uVmVjdG9yMyh4UG9zKzIwLCB5UG9zKzIwLCB6UG9zKzEwKSxcbiAgICBdO1xuXG4gICAgLy9DcmVhdGUgbGluZXNcbiAgICByZXR1cm4gQkFCWUxPTi5NZXNoQnVpbGRlci5DcmVhdGVMaW5lcyhuYW1lLCB7cG9pbnRzOiBteVBvaW50c30sIHNjZW5lKTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vYmFieWxvbjEwMS9wYXJ0aWNsZXMjcGFydGljbGUtZW1pdHRlclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVBhcnRpY2xlcyhuYW1lLCBlbWl0dGVyLCBzY2VuZSkge1xuICAgIGxldCBwYXJ0aWNsZVN5c3RlbTtcbiAgICBpZiAoQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbS5Jc1N1cHBvcnRlZCkge1xuICAgICAgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5HUFVQYXJ0aWNsZVN5c3RlbShuYW1lLCB7IGNhcGFjaXR5OjEwMDAwIH0sIHNjZW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydGljbGVTeXN0ZW0gPSBuZXcgQkFCWUxPTi5QYXJ0aWNsZVN5c3RlbShcInBhcnRpY2xlc1wiLCA1MDAwMCAsIHNjZW5lKTtcbiAgICB9XG4gICAgcGFydGljbGVTeXN0ZW0uZW1pdFJhdGUgPSAxMDAwO1xuICAgIHBhcnRpY2xlU3lzdGVtLnBhcnRpY2xlRW1pdHRlclR5cGUgPSBuZXcgQkFCWUxPTi5TcGhlcmVQYXJ0aWNsZUVtaXR0ZXIoMSk7XG4gICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVUZXh0dXJlID0gbmV3IEJBQllMT04uVGV4dHVyZShcIi90ZXh0dXJlcy9mbGFyZS5wbmdcIiwgc2NlbmUpO1xuICAgIHBhcnRpY2xlU3lzdGVtLm1heExpZmVUaW1lID0gMTA7XG4gICAgcGFydGljbGVTeXN0ZW0ubWluU2l6ZSA9IDAuMDE7XG4gICAgcGFydGljbGVTeXN0ZW0ubWF4U2l6ZSA9IDAuMTtcbiAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0dGVyID0gZW1pdHRlcjtcbiAgICByZXR1cm4gcGFydGljbGVTeXN0ZW1cbiAgfVxuXG59XG4iLCJpbXBvcnQge0FjdGlvblV0aWx9IGZyb20gXCIuL2FjdGlvbi11dGlsXCI7XG5pbXBvcnQge0FuaW1VdGlsfSBmcm9tIFwiLi9hbmltLXV0aWxcIjtcbmltcG9ydCB7TW9kZWxVdGlsc30gZnJvbSBcIi4vbW9kZWwtdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJvY2tldCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZVJvY2tldCh4UG9zOiBudW1iZXIsIHlQb3M6IG51bWJlciwgelBvczogbnVtYmVyLCBzY2VuZSkge1xuICAgIC8vIENyZWF0ZSBMaW5lc1xuICAgIGxldCBsaW5lcyA9IE1vZGVsVXRpbHMubWFrZUxpbmUoJ2xpbmVzJywgc2NlbmUsIHhQb3MsIHlQb3MsIHpQb3MpO1xuXG4gICAgLy9DcmVhdGUgYSBib3ggdG8gYXR0YWNoIHBhcnRpY2xlcyB0b1xuICAgIHZhciByb2NrZXRFbmdpbmUgPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUJveChcInJvY2tldEVuZ2luZVwiLCB7aGVpZ2h0OiAwLjEsIHdpZHRoOiAwLjEsIGRlcHRoOiAwLjF9LCBzY2VuZSk7XG4gICAgcm9ja2V0RW5naW5lLnBvc2l0aW9uID0gbmV3IEJBQllMT04uVmVjdG9yMyh4UG9zLCB5UG9zLCB6UG9zKTtcblxuICAgIC8vQ3JlYXRlIGJveCB0byBoZWxwIHdpdGggY2xpY2tpbmdcbiAgICBsZXQgY2xpY2tCb3ggPSBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUJveChcImNsaWNrQm94XCIsIHtoZWlnaHQ6MjAsIHdpZHRoOiAyMCwgZGVwdGg6IDEwfSwgc2NlbmUpXG4gICAgY2xpY2tCb3gucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MgKzEwLCB5UG9zICsxMCwgelBvcys1KTtcbiAgICBsZXQgaW52aXNpYmVNYXRlcmlhbCA9IG5ldyBCQUJZTE9OLlN0YW5kYXJkTWF0ZXJpYWwoXCJpbnZpc2libGVNYXRlcmlhbFwiLCBzY2VuZSk7XG4gICAgaW52aXNpYmVNYXRlcmlhbC5hbHBoYSA9IDA7XG4gICAgY2xpY2tCb3gubWF0ZXJpYWwgPSBpbnZpc2liZU1hdGVyaWFsXG5cblxuICAgIC8vIEFkZCBQYXJ0aWNsZXMgdG8gbGluZXNcbiAgICBjb25zdCBwYXJ0aWNsZUVtaXR0ZXIgPSBNb2RlbFV0aWxzLmNyZWF0ZVBhcnRpY2xlcygncGFydGljbGVzJywgcm9ja2V0RW5naW5lLCBzY2VuZSk7XG5cbiAgICAvLyBBbmltYXRpb25zXG5cbiAgICBjb25zdCB1cERvd25BbmltID0gQW5pbVV0aWwuZmx5QW5pbWF0aW9uKCk7XG5cbiAgICAvL0NyZWF0ZUFuaW1hdGlvbiBHcm91cFxuICAgIHZhciBhbmltYXRpb25Hcm91cCA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbkdyb3VwKFwicm9ja2V0XCIpO1xuICAgIC8vIEFkZCBtZXNoIGFuZCBhbmltYXRpb24gdG8gdGhlIGdyb3VwXG4gICAgYW5pbWF0aW9uR3JvdXAuYWRkVGFyZ2V0ZWRBbmltYXRpb24odXBEb3duQW5pbSwgbGluZXMpXG4gICAgYW5pbWF0aW9uR3JvdXAuYWRkVGFyZ2V0ZWRBbmltYXRpb24odXBEb3duQW5pbSwgcm9ja2V0RW5naW5lKVxuXG4gICAgLy9TdGFydCBhbmltYXRpb24gb24gb2JqZWN0IHdoZW4gY2FsbGVkXG4gICAgY29uc3QgYmVnaW5BbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAvLyBTdGFydCB0aGUgcGFydGljbGUgcGFydHlcbiAgICAgIHBhcnRpY2xlRW1pdHRlci5zdGFydCgpO1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAvLyBQbGF5IGFuaW1hdGlvblxuICAgICAgICBhbmltYXRpb25Hcm91cC5wbGF5KGZhbHNlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgfSwgNTAwKVxuICAgIH07XG5cbiAgICAvL1NldCB1cCBBY3Rpb24gb24gdHJpZ2dlclxuICAgIEFjdGlvblV0aWwub25TaW5nbGVDbGljayhjbGlja0JveCwgYmVnaW5BbmltYXRpb24sIHNjZW5lIClcbiAgICByZXR1cm4gYW5pbWF0aW9uR3JvdXBcblxuICB9XG5cbn1cbiIsIi8vICBzdG9sZW4gZnJvbSBodHRwczovL3BsYXlncm91bmQuYmFieWxvbmpzLmNvbS8jNkZIS0hDIzE3XG5cbmV4cG9ydCBjbGFzcyBTY3JvbGxNb3ZlIHtcbiAgcHVibGljIHN0YXRpYyBzY3JvbGxNb3ZlSW5pdChzY2VuZSkge1xuICAgIC8vIHdpbmdudXQgY3JhcC5cbiAgICBzY2VuZS5vblByZVBvaW50ZXJPYnNlcnZhYmxlLmFkZCggZnVuY3Rpb24ocG9pbnRlckluZm8sIGV2ZW50U3RhdGUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBvaW50ZXJJbmZvKTtcbiAgICAgIHZhciBldmVudCA9IHBvaW50ZXJJbmZvLmV2ZW50O1xuICAgICAgLy8gY29uc29sZS5sb2coXCJnb3QgZXZlbnQ6XCIsIGV2ZW50KTtcbiAgICAgIHZhciBkZWx0YSA9IDA7XG4gICAgICBpZiAoZXZlbnQuZGVsdGFZKSB7XG4gICAgICAgIGRlbHRhID0gZXZlbnQuZGVsdGFZO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdvdCBkZWx0YTpcIiwgZGVsdGEpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuZGV0YWlsKSB7XG4gICAgICAgIGRlbHRhID0gLWV2ZW50LmRldGFpbDtcbiAgICAgIH1cbiAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkZWx0YSk7XG4gICAgICAgIHZhciBkaXIgPSBzY2VuZS5hY3RpdmVDYW1lcmEuZ2V0RGlyZWN0aW9uKEJBQllMT04uQXhpcy5aKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkaXI6IFwiLCBkaXIpO1xuICAgICAgICAvL3NjZW5lLmFjdGl2ZUNhbWVyYS5wb3NpdGlvbi56ICs9IGRlbHRhLzEwO1xuICAgICAgICBpZiAoZGVsdGE8MClcbiAgICAgICAgICBzY2VuZS5hY3RpdmVDYW1lcmEucG9zaXRpb24uYWRkSW5QbGFjZShkaXIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgc2NlbmUuYWN0aXZlQ2FtZXJhLnBvc2l0aW9uLnN1YnRyYWN0SW5QbGFjZShkaXIpO1xuICAgICAgICAvLyBzY2VuZS5hY3RpdmVDYW1lcmEuPz8/O1xuXG4gICAgICAgIC8vIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAvLyAgICAgaWYgKCFub1ByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIC8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0sIEJBQllMT04uUG9pbnRlckV2ZW50VHlwZXMuUE9JTlRFUldIRUVMLCBmYWxzZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=