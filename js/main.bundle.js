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
        action_util_1.ActionUtil.onSingleClick(lines, beginAnimation, scene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njcm9sbC1tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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QUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNyQixvQ0FBb0M7YUFDckM7aUJBQ0ksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNyQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCw2QkFBNkI7Z0JBQzdCLDRDQUE0QztnQkFDNUMsSUFBSSxLQUFLLEdBQUMsQ0FBQztvQkFDVCxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7O29CQUU1QyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25ELDBCQUEwQjtnQkFFMUIsOEJBQThCO2dCQUM5QiwrQkFBK0I7Z0JBQy9CLGtDQUFrQztnQkFDbEMsUUFBUTtnQkFDUixJQUFJO2FBQ0w7UUFDSCxDQUFDLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBbENZLGdDQUFVIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuLy8gaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9ob3dfdG8vaG93X3RvX3VzZV9hY3Rpb25zXG5leHBvcnQgY2xhc3MgQWN0aW9uVXRpbCB7XG4gIC8vIG1lc2ggaXMgdGhlIHRoaW5nIHRvIGNsaWNrIG9uLCBmbiBpcyB0aGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGl0IGlzIGRibCBjbGlja2VkXG4gIHB1YmxpYyBzdGF0aWMgb25Eb3VibGVDbGljayhtZXNoLCBmbiwgc2NlbmUgKSB7XG4gICAgLy8gQXR0YWNoIEFjdGlvbiBNYW5hZ2VyIHRvIHRoZSBtZXNoXG4gICAgbWVzaC5hY3Rpb25NYW5hZ2VyID0gbmV3IEJBQllMT04uQWN0aW9uTWFuYWdlcihzY2VuZSk7XG4gICAgLy8gUmVnaXN0ZXIgc29tZSBhY3Rpb25zIG9uIHRoZSBBTVxuICAgIG1lc2guYWN0aW9uTWFuYWdlci5yZWdpc3RlckFjdGlvbihcbiAgICAgIG5ldyBCQUJZTE9OLkV4ZWN1dGVDb2RlQWN0aW9uKFxuICAgICAgICBCQUJZTE9OLkFjdGlvbk1hbmFnZXIuT25Eb3VibGVQaWNrVHJpZ2dlcixcbiAgICAgICAgZm5cbiAgICAgIClcbiAgICApXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG9uU2luZ2xlQ2xpY2sobWVzaCwgZm4sIHNjZW5lICkge1xuICAgIC8vIEF0dGFjaCBBY3Rpb24gTWFuYWdlciB0byB0aGUgbWVzaFxuICAgIG1lc2guYWN0aW9uTWFuYWdlciA9IG5ldyBCQUJZTE9OLkFjdGlvbk1hbmFnZXIoc2NlbmUpO1xuICAgIC8vIFJlZ2lzdGVyIHNvbWUgYWN0aW9ucyBvbiB0aGUgQU1cbiAgICBtZXNoLmFjdGlvbk1hbmFnZXIucmVnaXN0ZXJBY3Rpb24oXG4gICAgICBuZXcgQkFCWUxPTi5FeGVjdXRlQ29kZUFjdGlvbihcbiAgICAgICAgQkFCWUxPTi5BY3Rpb25NYW5hZ2VyLk9uUGlja1RyaWdnZXIsXG4gICAgICAgIGZuXG4gICAgICApXG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQge01hdGhVdGlsfSBmcm9tIFwiLi9tYXRoLXV0aWxcIjtcblxuZXhwb3J0IGNsYXNzIEFuaW1VdGlsIHtcblxuICBwdWJsaWMgc3RhdGljIGZseUFuaW1hdGlvbigpOiBCQUJZTE9OLkFuaW1hdGlvbiB7XG4gICAgdmFyIGFuaW1hdGlvbkJveCA9IG5ldyBCQUJZTE9OLkFuaW1hdGlvbihcbiAgICAgIFwibXlBbmltYXRpb25cIixcbiAgICAgIFwicG9zaXRpb24ueVwiLFxuICAgICAgMzAsIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTlRZUEVfRkxPQVQsIEJBQllMT04uQW5pbWF0aW9uLkFOSU1BVElPTkxPT1BNT0RFX0NZQ0xFXG4gICAgKTtcbiAgICAvLyBBbiBhcnJheSB3aXRoIGFsbCBhbmltYXRpb24ga2V5c1xuICAgIHZhciBrZXlzID0gW1xuICAgICAge1xuICAgICAgICBmcmFtZTogMCxcbiAgICAgICAgdmFsdWU6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiA0MCxcbiAgICAgICAgdmFsdWU6IE1hdGhVdGlsLmdldFJhbmRvbUludCgyMDAsIDUwMClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZyYW1lOiAxMDAwLFxuICAgICAgICB2YWx1ZTogODAwMFxuICAgICAgfVxuICAgIF07XG4gICAgYW5pbWF0aW9uQm94LnNldEtleXMoa2V5cyk7XG4gICAgcmV0dXJuIGFuaW1hdGlvbkJveFxuICB9XG59XG5cblxuIiwiIGltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnYmFieWxvbmpzJztcbmltcG9ydCAqIGFzIEdVSSBmcm9tICdiYWJ5bG9uanMtZ3VpJztcbiBpbXBvcnQge0FjdGlvblV0aWx9IGZyb20gXCIuL2FjdGlvbi11dGlsXCI7XG4gaW1wb3J0IHtNYXRoVXRpbH0gZnJvbSBcIi4vbWF0aC11dGlsXCI7XG4gaW1wb3J0IHtSb2NrZXR9IGZyb20gXCIuL3JvY2tldFwiO1xuIGltcG9ydCB7U2Nyb2xsTW92ZX0gZnJvbSBcIi4vc2Nyb2xsLW1vdmVcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuXG4gICAgLy8gVE9ETzpcbiAgICAvKlxuICAgIFRvZG86IHRoaXMgZ2V0cyB5b3VyIG1hY2hpbmUgcmVhbGx5IGhvdCAgIC4uLi4uLiBcbiAgICAgKi9cblxuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfZW5naW5lOiBCQUJZTE9OLkVuZ2luZTtcbiAgICBwcml2YXRlIF9zY2VuZTogQkFCWUxPTi5TY2VuZTtcbiAgICBwcml2YXRlIF9jYW1lcmE6IEJBQllMT04uVW5pdmVyc2FsQ2FtZXJhO1xuICAgIHByaXZhdGUgX2xpZ2h0OiBCQUJZTE9OLkxpZ2h0O1xuICAgIC8vIHByaXZhdGUgX3NoYXJrTWVzaDogQkFCWUxPTi5BYnN0cmFjdE1lc2g7XG4gICAgLy8gcHJpdmF0ZSBfc2hhcmtBbmltYXRpb25UaW1lID0gMDtcbiAgICAvLyBwcml2YXRlIF9zd2ltOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy8gcHJpdmF0ZSBfdHh0Q29vcmRpbmF0ZXM6IHsgdHh0WDogR1VJLlRleHRCbG9jaywgdHh0WTogR1VJLlRleHRCbG9jaywgdHh0WjogR1VJLlRleHRCbG9jayB9ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IHN0cmluZykge1xuICAgICAgICAvLyBDcmVhdGUgY2FudmFzIGFuZCBlbmdpbmVcbiAgICAgICAgdGhpcy5fY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnQpO1xuICAgICAgICB0aGlzLl9lbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUodGhpcy5fY2FudmFzLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTY2VuZSgpIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgYmFzaWMgQkpTIFNjZW5lIG9iamVjdFxuICAgICAgICB0aGlzLl9zY2VuZSA9IG5ldyBCQUJZTE9OLlNjZW5lKHRoaXMuX2VuZ2luZSk7XG4gICAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgIGNvbnN0IGdyZXlWYWwgPSAwLjE7XG4gICAgICAgIHRoaXMuX3NjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjQoZ3JleVZhbCwgZ3JleVZhbCwgZ3JleVZhbCwgMCk7XG5cbiAgICAgICAgLy8gY3JlYXRlcyB0aGUgc2FuZHkgZ3JvdW5kXG4gICAgICAgIC8vIGxldCBncm91bmQgPSBHYW1lVXRpbHMuY3JlYXRlR3JvdW5kKHRoaXMuX3NjZW5lKTtcblxuICAgICAgICAvLyBodHRwczovL2RvYy5iYWJ5bG9uanMuY29tL2JhYnlsb24xMDEvY2FtZXJhcyN1bml2ZXJzYWwtY2FtZXJhXG4gICAgICAgIC8vIENyZWF0ZSBhIFVuaXZlcnNhbENhbWVyYSBQYXJhbWV0ZXJzIDogbmFtZSwgcG9zaXRpb24sIHNjZW5lXG4gICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBCQUJZTE9OLlVuaXZlcnNhbENhbWVyYShcbiAgICAgICAgICBcIlVuaXZlcnNhbENhbWVyYVwiLFxuICAgICAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoMTAsIDg1LCA0MCksXG4gICAgICAgICAgdGhpcy5fc2NlbmVcbiAgICAgICAgKTtcbiAgICAgICAgLy8gVGFyZ2V0cyB0aGUgY2FtZXJhIHRvIGEgcGFydGljdWxhciBwb3NpdGlvbi4gSW4gdGhpcyBjYXNlIHRoZSBzY2VuZSBvcmlnaW5cbiAgICAgICAgY2FtZXJhLnNldFRhcmdldChuZXcgQkFCWUxPTi5WZWN0b3IzKDAsMCwtNjAwKSk7XG4gICAgICAgICAgICAvLyBBdHRhY2ggdGhlIGNhbWVyYSB0byB0aGUgY2FudmFzXG4gICAgICAgIGNhbWVyYS5hdHRhY2hDb250cm9sKHRoaXMuX2NhbnZhcywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KFwibGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgdGhpcy5fc2NlbmUpO1xuXG4gICAgICAgIC8vIEFkZCBzY3JvbGwgd2hlZWwgc3VwcG9ydFxuICAgICAgICBTY3JvbGxNb3ZlLnNjcm9sbE1vdmVJbml0KHRoaXMuX3NjZW5lKVxuXG4gICAgICAgIGNvbnN0IHJvY2tldHMgPSBbXTtcbiAgICAgICAgLy9DcmVhdGUgc29tZSByb2NrZXRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeVBvcyA9IDA7IC8vIFNvIHRoZXkgYXJlIG9uIHRoZSBncm91bmRcbiAgICAgICAgICAgIGNvbnN0IHhQb3MgPSBNYXRoVXRpbC5nZXRSYW5kb21JbnQoLTMwMCwgMzAwKTtcbiAgICAgICAgICAgIGNvbnN0IHpQb3MgPSBNYXRoVXRpbC5nZXRSYW5kb21JbnQoMjUwLCAtNjAwKTtcbiAgICAgICAgICAgIHJvY2tldHMucHVzaChSb2NrZXQuY3JlYXRlUm9ja2V0KHhQb3MsIHlQb3MsIHpQb3MsICB0aGlzLl9zY2VuZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICByb2NrZXRzLmZvckVhY2gocm9ja2V0ID0+IHJvY2tldC5wbGF5KGZhbHNlKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFBoeXNpY3MgZW5naW5lIGFsc28gd29ya3NcbiAgICAgICAgbGV0IGdyYXZpdHkgPSBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIC0wLjksIDApO1xuICAgICAgICB0aGlzLl9zY2VuZS5lbmFibGVQaHlzaWNzKGdyYXZpdHksIG5ldyBCQUJZTE9OLkNhbm5vbkpTUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgYW5pbWF0aW9uIGxvb3AuXG4gICAgICovXG4gICAgYW5pbWF0ZSgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5fc2NlbmUucmVnaXN0ZXJCZWZvcmVSZW5kZXIoKCkgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGRlbHRhVGltZTogbnVtYmVyID0gKDEgLyB0aGlzLl9lbmdpbmUuZ2V0RnBzKCkpO1xuICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRlU2hhcmsoZGVsdGFUaW1lKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gcnVuIHRoZSByZW5kZXIgbG9vcFxuICAgICAgICB0aGlzLl9lbmdpbmUucnVuUmVuZGVyTG9vcCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zY2VuZS5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhlIGNhbnZhcy93aW5kb3cgcmVzaXplIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2VuZ2luZS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogQ3JlYXRlcyB0aGUgQkFCWUxPTkpTIFNjZW5lXG4gICAgLy8gICovXG4gICAgLy8gY3JlYXRlU2NlbmUoKTogdm9pZCB7XG4gICAgLy8gICAgIC8vIGNyZWF0ZSBhIGJhc2ljIEJKUyBTY2VuZSBvYmplY3RcbiAgICAvLyAgICAgdGhpcy5fc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZSh0aGlzLl9lbmdpbmUpO1xuICAgIC8vICAgICAvLyBjcmVhdGUgYSBGcmVlQ2FtZXJhLCBhbmQgc2V0IGl0cyBwb3NpdGlvbiB0byAoeDowLCB5OjUsIHo6LTEwKVxuICAgIC8vICAgICB0aGlzLl9jYW1lcmEgPSBuZXcgQkFCWUxPTi5BcmNSb3RhdGVDYW1lcmEoXCJDYW1lcmFcIiwgMyAqIE1hdGguUEkgLyAyLCBNYXRoLlBJIC8gNCwgMzAsIEJBQllMT04uVmVjdG9yMy5aZXJvKCksIHRoaXMuX3NjZW5lKTtcbiAgICAvLyAgICAgdGhpcy5fY2FtZXJhLmF0dGFjaENvbnRyb2wodGhpcy5fY2FudmFzLCB0cnVlKTtcbiAgICAvLyAgICAgLy8gY3JlYXRlIGEgYmFzaWMgbGlnaHQsIGFpbWluZyAwLDEsMCAtIG1lYW5pbmcsIHRvIHRoZSBza3lcbiAgICAvLyAgICAgdGhpcy5fbGlnaHQgPSBuZXcgQkFCWUxPTi5IZW1pc3BoZXJpY0xpZ2h0KFwibGlnaHRcIiwgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgdGhpcy5fc2NlbmUpO1xuICAgIC8vICAgICAvLyBjcmVhdGUgdGhlIHNreWJveFxuICAgIC8vICAgICBsZXQgc2t5Ym94ID0gR2FtZVV0aWxzLmNyZWF0ZVNreWJveChcInNreWJveFwiLCBcIi4vYXNzZXRzL3RleHR1cmUvc2t5Ym94L1Ryb3BpY2FsU3VubnlEYXlcIiwgdGhpcy5fc2NlbmUpO1xuICAgIC8vICAgICAvLyBjcmVhdGVzIHRoZSBzYW5keSBncm91bmRcbiAgICAvLyAgICAgbGV0IGdyb3VuZCA9IEdhbWVVdGlscy5jcmVhdGVHcm91bmQodGhpcy5fc2NlbmUpO1xuICAgIC8vICAgICAvLyBjcmVhdGVzIHRoZSB3YXRlcm1hdGVyaWFsIGFuZCBhZGRzIHRoZSByZWxldmFudCBub2RlcyB0byB0aGUgcmVuZGVybGlzdFxuICAgIC8vICAgICBsZXQgd2F0ZXJNYXRlcmlhbCA9IEdhbWVVdGlscy5jcmVhdGVXYXRlcih0aGlzLl9zY2VuZSk7XG4gICAgLy8gICAgIHdhdGVyTWF0ZXJpYWwuYWRkVG9SZW5kZXJMaXN0KHNreWJveCk7XG4gICAgLy8gICAgIHdhdGVyTWF0ZXJpYWwuYWRkVG9SZW5kZXJMaXN0KGdyb3VuZCk7XG4gICAgLy8gICAgIC8vIGNyZWF0ZSBhIHNoYXJrIG1lc2ggZnJvbSBhIC5vYmogZmlsZVxuICAgIC8vICAgICBHYW1lVXRpbHMuY3JlYXRlU2hhcmsodGhpcy5fc2NlbmUpXG4gICAgLy8gICAgICAgICAuc3Vic2NyaWJlKHNoYXJrTWVzaCA9PiB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5fc2hhcmtNZXNoID0gc2hhcmtNZXNoO1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuX3NoYXJrTWVzaC5nZXRDaGlsZHJlbigpLmZvckVhY2goXG4gICAgLy8gICAgICAgICAgICAgICAgIG1lc2ggPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgd2F0ZXJNYXRlcmlhbC5hZGRUb1JlbmRlckxpc3QobWVzaCk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICApO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIC8vIGZpbmFsbHkgdGhlIG5ldyB1aVxuICAgIC8vICAgICBsZXQgZ3VpVGV4dHVyZSA9IEdhbWVVdGlscy5jcmVhdGVHVUkoKTtcbiAgICAvL1xuICAgIC8vICAgICAvLyBCdXR0b24gdG8gc3RhcnQgc2hhcmsgYW5pbWF0aW9uXG4gICAgLy8gICAgIEdhbWVVdGlscy5jcmVhdGVCdXR0b25Td2ltKGd1aVRleHR1cmUsIFwiU3RhcnQgU3dpbW1pbmdcIixcbiAgICAvLyAgICAgICAgIChidG4pID0+IHtcbiAgICAvLyAgICAgICAgICAgICBsZXQgdGV4dENvbnRyb2wgPSBidG4uY2hpbGRyZW5bMF0gYXMgR1VJLlRleHRCbG9jaztcbiAgICAvLyAgICAgICAgICAgICB0aGlzLl9zd2ltID0gIXRoaXMuX3N3aW07XG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMuX3N3aW0pIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dENvbnRyb2wudGV4dCA9IFwiU3RvcCBTd2ltbWluZ1wiO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5fc2hhcmtBbmltYXRpb25UaW1lID0gMDtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGV4dENvbnRyb2wudGV4dCA9IFwiU3RhcnQgU3dpbW1pbmdcIjtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICAvLyBEZWJ1ZyBUZXh0IGZvciBTaGFyayBjb29yZGluYXRlc1xuICAgIC8vICAgICB0aGlzLl90eHRDb29yZGluYXRlcyA9IEdhbWVVdGlscy5jcmVhdGVDb29yZGluYXRlc1RleHQoZ3VpVGV4dHVyZSk7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gUGh5c2ljcyBlbmdpbmUgYWxzbyB3b3Jrc1xuICAgIC8vICAgICBsZXQgZ3Jhdml0eSA9IG5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgLTAuOSwgMCk7XG4gICAgLy8gICAgIHRoaXMuX3NjZW5lLmVuYWJsZVBoeXNpY3MoZ3Jhdml0eSwgbmV3IEJBQllMT04uQ2Fubm9uSlNQbHVnaW4oKSk7XG4gICAgLy8gfVxuXG4gICAgLy9cblxuICAgIC8vXG4gICAgLy8gYW5pbWF0ZVNoYXJrKGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XG4gICAgLy8gICAgIHRoaXMuZGVidWdGaXJzdE1lc2hDb29yZGluYXRlKHRoaXMuX3NoYXJrTWVzaCBhcyBCQUJZTE9OLk1lc2gpO1xuICAgIC8vICAgICBpZiAodGhpcy5fc2hhcmtNZXNoICYmIHRoaXMuX3N3aW0pIHtcbiAgICAvLyAgICAgICAgIHRoaXMuX3NoYXJrQW5pbWF0aW9uVGltZSArPSBkZWx0YVRpbWU7XG4gICAgLy8gICAgICAgICB0aGlzLl9zaGFya01lc2guZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKFxuICAgIC8vICAgICAgICAgICAgIG1lc2ggPT4ge1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcmVhbE1lc2ggPSA8QkFCWUxPTi5NZXNoPiBtZXNoO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgdmVydGV4RGF0YSA9IEJBQllMT04uVmVydGV4RGF0YS5FeHRyYWN0RnJvbU1lc2gocmVhbE1lc2gpO1xuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25zID0gdmVydGV4RGF0YS5wb3NpdGlvbnM7XG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBudW1iZXJPZlBvaW50cyA9IHBvc2l0aW9ucy5sZW5ndGggLyAzO1xuICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUG9pbnRzOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGxldCB2ZXJ0ZXggPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHBvc2l0aW9uc1tpICogM10sIHBvc2l0aW9uc1tpICogMyArIDFdLCBwb3NpdGlvbnNbaSAqIDMgKyAyXSk7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXgueCArPSAoTWF0aC5zaW4oMC4xNSAqIHZlcnRleC56ICsgdGhpcy5fc2hhcmtBbmltYXRpb25UaW1lICogNCAtIDEuNikgKiAwLjA1KTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSB2ZXJ0ZXgueDtcbiAgICAvL1xuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIHZlcnRleERhdGEuYXBwbHlUb01lc2gobWVzaCBhcyBCQUJZTE9OLk1lc2gpO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyAvKipcbiAgICAvLyAgKiBQcmludHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCB2ZXJ0ZXggb2YgYSBtZXNoXG4gICAgLy8gICovXG4gICAgLy8gcHVibGljIGRlYnVnRmlyc3RNZXNoQ29vcmRpbmF0ZShtZXNoOiBCQUJZTE9OLk1lc2gpIHtcbiAgICAvLyAgICAgaWYoIW1lc2ggfHwgIW1lc2guZ2V0Q2hpbGRyZW4oKSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGxldCBmaXJzdE1lc2ggPSAobWVzaC5nZXRDaGlsZHJlbigpWzBdIGFzIEJBQllMT04uTWVzaClcbiAgICAvLyAgICAgbGV0IHZlcnRleERhdGEgPSBCQUJZTE9OLlZlcnRleERhdGEuRXh0cmFjdEZyb21NZXNoKGZpcnN0TWVzaCk7XG4gICAgLy8gICAgIGxldCBwb3NpdGlvbnMgPSB2ZXJ0ZXhEYXRhLnBvc2l0aW9ucztcbiAgICAvLyAgICAgbGV0IGZpcnN0VmVydGV4ID0gbmV3IEJBQllMT04uVmVjdG9yMyhwb3NpdGlvbnNbMF0sIHBvc2l0aW9uc1sxXSwgcG9zaXRpb25zWzNdKTtcbiAgICAvLyAgICAgdGhpcy51cGRhdGVDb29yZGluYXRlVGV4dHVyZShmaXJzdFZlcnRleCk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gLyoqXG4gICAgLy8gICogUHJpbnRzIHRoZSBnaXZlbiBWZWN0b3IzXG4gICAgLy8gICogQHBhcmFtIGNvb3JkaW5hdGVzXG4gICAgLy8gICovXG4gICAgLy8gcHVibGljIHVwZGF0ZUNvb3JkaW5hdGVUZXh0dXJlKGNvb3JkaW5hdGVzOiBCQUJZTE9OLlZlY3RvcjMpIHtcbiAgICAvLyAgICAgaWYoIWNvb3JkaW5hdGVzKSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5fdHh0Q29vcmRpbmF0ZXMudHh0WC50ZXh0ID0gXCJYOiBcIiArIGNvb3JkaW5hdGVzLng7XG4gICAgLy8gICAgIHRoaXMuX3R4dENvb3JkaW5hdGVzLnR4dFkudGV4dCA9IFwiWTogXCIgKyBjb29yZGluYXRlcy55O1xuICAgIC8vICAgICB0aGlzLl90eHRDb29yZGluYXRlcy50eHRaLnRleHQgPSBcIlo6IFwiICsgY29vcmRpbmF0ZXMuejtcbiAgICAvLyB9XG5cbn1cbiIsImltcG9ydCAnYmFieWxvbmpzLWxvYWRlcnMnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5pbXBvcnQgQ0FOTk9OID0gcmVxdWlyZSgnY2Fubm9uJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBTZXQgZ2xvYmFsIHZhcmlhYmxlIGZvciBjYW5ub25qcyBwaHlzaWNzIGVuZ2luZVxuICB3aW5kb3cuQ0FOTk9OID0gQ0FOTk9OO1xuICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCdyZW5kZXJDYW52YXMnKTtcbiAgZ2FtZS5jcmVhdGVTY2VuZSgpO1xuICBnYW1lLmFuaW1hdGUoKTtcbn0pO1xuIiwiZXhwb3J0IGNsYXNzIE1hdGhVdGlsIHtcbiAgcHVibGljIHN0YXRpYyBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjsgLy9UaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICB9XG59XG4iLCJpbXBvcnQge0xpbmVzTWVzaH0gZnJvbSBcImJhYnlsb25qcy9NZXNoZXMvbGluZXNNZXNoXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1vZGVsVXRpbHMge1xuXG4gIC8vIGh0dHBzOi8vZG9jLmJhYnlsb25qcy5jb20vYmFieWxvbjEwMS9wYXJhbWV0cmljX3NoYXBlc1xuICBwdWJsaWMgc3RhdGljIG1ha2VMaW5lKG5hbWUsIHNjZW5lLCB4UG9zLCB5UG9zLCB6UG9zKTogQkFCWUxPTi5MaW5lc01lc2gge1xuICAgIC8vQXJyYXkgb2YgcG9pbnRzIHRvIGNvbnN0cnVjdCBsaW5lc1xuICAgIHZhciBteVBvaW50cyA9IFtcbiAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoeFBvcyswLCB5UG9zKzAsIHpQb3MrMCksXG4gICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MrMCwgeVBvcysxMCwgelBvcyswKSxcbiAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoeFBvcyswLCB5UG9zKzEwLCB6UG9zKzEwKSxcbiAgICAgIG5ldyBCQUJZTE9OLlZlY3RvcjMoeFBvcysyMCwgeVBvcysxMCwgelBvcysxMCksXG4gICAgICBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MrMjAsIHlQb3MrMjAsIHpQb3MrMTApLFxuICAgIF07XG5cbiAgICAvL0NyZWF0ZSBsaW5lc1xuICAgIHJldHVybiBCQUJZTE9OLk1lc2hCdWlsZGVyLkNyZWF0ZUxpbmVzKG5hbWUsIHtwb2ludHM6IG15UG9pbnRzfSwgc2NlbmUpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9kb2MuYmFieWxvbmpzLmNvbS9iYWJ5bG9uMTAxL3BhcnRpY2xlcyNwYXJ0aWNsZS1lbWl0dGVyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlUGFydGljbGVzKG5hbWUsIGVtaXR0ZXIsIHNjZW5lKSB7XG4gICAgbGV0IHBhcnRpY2xlU3lzdGVtO1xuICAgIGlmIChCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtLklzU3VwcG9ydGVkKSB7XG4gICAgICBwYXJ0aWNsZVN5c3RlbSA9IG5ldyBCQUJZTE9OLkdQVVBhcnRpY2xlU3lzdGVtKG5hbWUsIHsgY2FwYWNpdHk6MTAwMDAgfSwgc2NlbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWNsZVN5c3RlbSA9IG5ldyBCQUJZTE9OLlBhcnRpY2xlU3lzdGVtKFwicGFydGljbGVzXCIsIDUwMDAwICwgc2NlbmUpO1xuICAgIH1cbiAgICBwYXJ0aWNsZVN5c3RlbS5lbWl0UmF0ZSA9IDEwMDA7XG4gICAgcGFydGljbGVTeXN0ZW0ucGFydGljbGVFbWl0dGVyVHlwZSA9IG5ldyBCQUJZTE9OLlNwaGVyZVBhcnRpY2xlRW1pdHRlcigxKTtcbiAgICBwYXJ0aWNsZVN5c3RlbS5wYXJ0aWNsZVRleHR1cmUgPSBuZXcgQkFCWUxPTi5UZXh0dXJlKFwiL3RleHR1cmVzL2ZsYXJlLnBuZ1wiLCBzY2VuZSk7XG4gICAgcGFydGljbGVTeXN0ZW0ubWF4TGlmZVRpbWUgPSAxMDtcbiAgICBwYXJ0aWNsZVN5c3RlbS5taW5TaXplID0gMC4wMTtcbiAgICBwYXJ0aWNsZVN5c3RlbS5tYXhTaXplID0gMC4xO1xuICAgIHBhcnRpY2xlU3lzdGVtLmVtaXR0ZXIgPSBlbWl0dGVyO1xuICAgIHJldHVybiBwYXJ0aWNsZVN5c3RlbVxuICB9XG5cbn1cbiIsImltcG9ydCB7QWN0aW9uVXRpbH0gZnJvbSBcIi4vYWN0aW9uLXV0aWxcIjtcbmltcG9ydCB7QW5pbVV0aWx9IGZyb20gXCIuL2FuaW0tdXRpbFwiO1xuaW1wb3J0IHtNb2RlbFV0aWxzfSBmcm9tIFwiLi9tb2RlbC11dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUm9ja2V0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlUm9ja2V0KHhQb3M6IG51bWJlciwgeVBvczogbnVtYmVyLCB6UG9zOiBudW1iZXIsIHNjZW5lKSB7XG4gICAgLy8gQ3JlYXRlIExpbmVzXG4gICAgbGV0IGxpbmVzID0gTW9kZWxVdGlscy5tYWtlTGluZSgnbGluZXMnLCBzY2VuZSwgeFBvcywgeVBvcywgelBvcyk7XG5cbiAgICAvL0NyZWF0ZSBhIGJveCB0byBhdHRhY2ggcGFydGljbGVzIHRvXG4gICAgdmFyIHJvY2tldEVuZ2luZSA9IEJBQllMT04uTWVzaEJ1aWxkZXIuQ3JlYXRlQm94KFwicm9ja2V0RW5naW5lXCIsIHtoZWlnaHQ6IDAuMSwgd2lkdGg6IDAuMSwgZGVwdGg6IDAuMX0sIHNjZW5lKTtcbiAgICByb2NrZXRFbmdpbmUucG9zaXRpb24gPSBuZXcgQkFCWUxPTi5WZWN0b3IzKHhQb3MsIHlQb3MsIHpQb3MpO1xuXG4gICAgLy8gQWRkIFBhcnRpY2xlcyB0byBsaW5lc1xuICAgIGNvbnN0IHBhcnRpY2xlRW1pdHRlciA9IE1vZGVsVXRpbHMuY3JlYXRlUGFydGljbGVzKCdwYXJ0aWNsZXMnLCByb2NrZXRFbmdpbmUsIHNjZW5lKTtcblxuICAgIC8vIEFuaW1hdGlvbnNcblxuICAgIGNvbnN0IHVwRG93bkFuaW0gPSBBbmltVXRpbC5mbHlBbmltYXRpb24oKTtcblxuICAgIC8vQ3JlYXRlQW5pbWF0aW9uIEdyb3VwXG4gICAgdmFyIGFuaW1hdGlvbkdyb3VwID0gbmV3IEJBQllMT04uQW5pbWF0aW9uR3JvdXAoXCJyb2NrZXRcIik7XG4gICAgLy8gQWRkIG1lc2ggYW5kIGFuaW1hdGlvbiB0byB0aGUgZ3JvdXBcbiAgICBhbmltYXRpb25Hcm91cC5hZGRUYXJnZXRlZEFuaW1hdGlvbih1cERvd25BbmltLCBsaW5lcylcbiAgICBhbmltYXRpb25Hcm91cC5hZGRUYXJnZXRlZEFuaW1hdGlvbih1cERvd25BbmltLCByb2NrZXRFbmdpbmUpXG5cbiAgICAvL1N0YXJ0IGFuaW1hdGlvbiBvbiBvYmplY3Qgd2hlbiBjYWxsZWRcbiAgICBjb25zdCBiZWdpbkFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIC8vIFN0YXJ0IHRoZSBwYXJ0aWNsZSBwYXJ0eVxuICAgICAgcGFydGljbGVFbWl0dGVyLnN0YXJ0KCk7XG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgIC8vIFBsYXkgYW5pbWF0aW9uXG4gICAgICAgIGFuaW1hdGlvbkdyb3VwLnBsYXkoZmFsc2UpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB9LCA1MDApXG4gICAgfTtcblxuICAgIC8vU2V0IHVwIEFjdGlvbiBvbiB0cmlnZ2VyXG4gICAgQWN0aW9uVXRpbC5vblNpbmdsZUNsaWNrKGxpbmVzLCBiZWdpbkFuaW1hdGlvbiwgc2NlbmUgKVxuICAgIHJldHVybiBhbmltYXRpb25Hcm91cFxuXG4gIH1cblxufVxuIiwiLy8gIHN0b2xlbiBmcm9tIGh0dHBzOi8vcGxheWdyb3VuZC5iYWJ5bG9uanMuY29tLyM2RkhLSEMjMTdcblxuZXhwb3J0IGNsYXNzIFNjcm9sbE1vdmUge1xuICBwdWJsaWMgc3RhdGljIHNjcm9sbE1vdmVJbml0KHNjZW5lKSB7XG4gICAgLy8gd2luZ251dCBjcmFwLlxuICAgIHNjZW5lLm9uUHJlUG9pbnRlck9ic2VydmFibGUuYWRkKCBmdW5jdGlvbihwb2ludGVySW5mbywgZXZlbnRTdGF0ZSkge1xuICAgICAgLy8gY29uc29sZS5sb2cocG9pbnRlckluZm8pO1xuICAgICAgdmFyIGV2ZW50ID0gcG9pbnRlckluZm8uZXZlbnQ7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImdvdCBldmVudDpcIiwgZXZlbnQpO1xuICAgICAgdmFyIGRlbHRhID0gMDtcbiAgICAgIGlmIChldmVudC5kZWx0YVkpIHtcbiAgICAgICAgZGVsdGEgPSBldmVudC5kZWx0YVk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ290IGRlbHRhOlwiLCBkZWx0YSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5kZXRhaWwpIHtcbiAgICAgICAgZGVsdGEgPSAtZXZlbnQuZGV0YWlsO1xuICAgICAgfVxuICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlbHRhKTtcbiAgICAgICAgdmFyIGRpciA9IHNjZW5lLmFjdGl2ZUNhbWVyYS5nZXREaXJlY3Rpb24oQkFCWUxPTi5BeGlzLlopO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpcjogXCIsIGRpcik7XG4gICAgICAgIC8vc2NlbmUuYWN0aXZlQ2FtZXJhLnBvc2l0aW9uLnogKz0gZGVsdGEvMTA7XG4gICAgICAgIGlmIChkZWx0YTwwKVxuICAgICAgICAgIHNjZW5lLmFjdGl2ZUNhbWVyYS5wb3NpdGlvbi5hZGRJblBsYWNlKGRpcik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBzY2VuZS5hY3RpdmVDYW1lcmEucG9zaXRpb24uc3VidHJhY3RJblBsYWNlKGRpcik7XG4gICAgICAgIC8vIHNjZW5lLmFjdGl2ZUNhbWVyYS4/Pz87XG5cbiAgICAgICAgLy8gaWYgKGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgIC8vICAgICBpZiAoIW5vUHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgfSwgQkFCWUxPTi5Qb2ludGVyRXZlbnRUeXBlcy5QT0lOVEVSV0hFRUwsIGZhbHNlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==