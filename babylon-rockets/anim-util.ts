import {MathUtil} from "./math-util";

export class AnimUtil {

  public static flyAnimation(): BABYLON.Animation {
    var animationBox = new BABYLON.Animation(
      "myAnimation",
      "position.y",
      30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
    );
    // An array with all animation keys
    var keys = [
      {
        frame: 0,
        value: 1
      },
      {
        frame: 40,
        value: MathUtil.getRandomInt(200, 500)
      },
      {
        frame: 1000,
        value: 8000
      }
    ];
    animationBox.setKeys(keys);
    return animationBox
  }
}


