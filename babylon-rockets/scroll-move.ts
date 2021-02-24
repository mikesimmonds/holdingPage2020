//  stolen from https://playground.babylonjs.com/#6FHKHC#17

export class ScrollMove {
  public static scrollMoveInit(scene) {
    // wingnut crap.
    scene.onPrePointerObservable.add( function(pointerInfo, eventState) {
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
        if (delta<0)
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
  }
}
