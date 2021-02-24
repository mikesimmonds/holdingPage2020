import {LinesMesh} from "babylonjs/Meshes/linesMesh";


export class ModelUtils {

  // https://doc.babylonjs.com/babylon101/parametric_shapes
  public static makeLine(name, scene, xPos, yPos, zPos): BABYLON.LinesMesh {
    //Array of points to construct lines
    var myPoints = [
      new BABYLON.Vector3(xPos+0, yPos+0, zPos+0),
      new BABYLON.Vector3(xPos+0, yPos+10, zPos+0),
      new BABYLON.Vector3(xPos+0, yPos+10, zPos+10),
      new BABYLON.Vector3(xPos+20, yPos+10, zPos+10),
      new BABYLON.Vector3(xPos+20, yPos+20, zPos+10),
    ];

    //Create lines
    return BABYLON.MeshBuilder.CreateLines(name, {points: myPoints}, scene);
  }

  // https://doc.babylonjs.com/babylon101/particles#particle-emitter
  public static createParticles(name, emitter, scene) {
    let particleSystem;
    if (BABYLON.GPUParticleSystem.IsSupported) {
      particleSystem = new BABYLON.GPUParticleSystem(name, { capacity:10000 }, scene);
    } else {
      particleSystem = new BABYLON.ParticleSystem("particles", 50000 , scene);
    }
    particleSystem.emitRate = 1000;
    particleSystem.particleEmitterType = new BABYLON.SphereParticleEmitter(1);
    particleSystem.particleTexture = new BABYLON.Texture("/textures/flare.png", scene);
    particleSystem.maxLifeTime = 10;
    particleSystem.minSize = 0.01;
    particleSystem.maxSize = 0.1;
    particleSystem.emitter = emitter;
    return particleSystem
  }

}
