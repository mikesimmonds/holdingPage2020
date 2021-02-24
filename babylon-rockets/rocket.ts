import {ActionUtil} from "./action-util";
import {AnimUtil} from "./anim-util";
import {ModelUtils} from "./model-utils";

export class Rocket {

  constructor() { }

  public static createRocket(xPos: number, yPos: number, zPos: number, scene) {
    // Create Lines
    let lines = ModelUtils.makeLine('lines', scene, xPos, yPos, zPos);

    //Create a box to attach particles to
    var rocketEngine = BABYLON.MeshBuilder.CreateBox("rocketEngine", {height: 0.1, width: 0.1, depth: 0.1}, scene);
    rocketEngine.position = new BABYLON.Vector3(xPos, yPos, zPos);

    //Create box to help with clicking
    let clickBox = BABYLON.MeshBuilder.CreateBox("clickBox", {height:20, width: 20, depth: 10}, scene)
    clickBox.position = new BABYLON.Vector3(xPos +10, yPos +10, zPos+5);
    let invisibeMaterial = new BABYLON.StandardMaterial("invisibleMaterial", scene);
    invisibeMaterial.alpha = 0;
    clickBox.material = invisibeMaterial


    // Add Particles to lines
    // const particleEmitter = ModelUtils.createParticles('particles', rocketEngine, scene);

    // Animations

    const upDownAnim = AnimUtil.flyAnimation();

    //CreateAnimation Group
    var animationGroup = new BABYLON.AnimationGroup("rocket");
    // Add mesh and animation to the group
    animationGroup.addTargetedAnimation(upDownAnim, lines)
    animationGroup.addTargetedAnimation(upDownAnim, rocketEngine)

    //Start animation on object when called
    const beginAnimation = () => {
      // Start the particle party
      // particleEmitter.start();
      const timer = setTimeout(()=> {
        // Play animation
        animationGroup.play(false);
        clearTimeout(timer)
      }, 500)
    };

    //Set up Action on trigger
    ActionUtil.onSingleClick(clickBox, beginAnimation, scene )
    return animationGroup

  }

}
