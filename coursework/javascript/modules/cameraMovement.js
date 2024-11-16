const frameRate = 60;

let cameraRotation = new BABYLON.Animation("rotation",
    "rotation.y",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

function rotateKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: 0,
    })

    keyFrames.push({
        frame: frameRate * 4,
        value: Math.PI/1.3,
    })

    return keyFrames
}

cameraRotation.setKeys(rotateKeyFrames());

export { cameraRotation }