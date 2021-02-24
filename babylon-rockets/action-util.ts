
// https://doc.babylonjs.com/how_to/how_to_use_actions
export class ActionUtil {
  // mesh is the thing to click on, fn is the function to call when it is dbl clicked
  public static onDoubleClick(mesh, fn, scene ) {
    // Attach Action Manager to the mesh
    mesh.actionManager = new BABYLON.ActionManager(scene);
    // Register some actions on the AM
    mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnDoublePickTrigger,
        fn
      )
    )
  }

  public static onSingleClick(mesh, fn, scene ) {
    // Attach Action Manager to the mesh
    mesh.actionManager = new BABYLON.ActionManager(scene);
    // Register some actions on the AM
    mesh.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnPickTrigger,
        fn
      )
    )
  }
}
