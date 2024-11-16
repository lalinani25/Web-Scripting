const frameRate = 60;

let boxAnimation = new BABYLON.Animation("boxAnimation",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

function boxKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: -350,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: -360,
    })

    keyFrames.push({
        frame: frameRate * 3,
        value: -350,
    })

    keyFrames.push({
        frame: frameRate * 5,
        value: -340,
    })

    keyFrames.push({
        frame: frameRate * 6,
        value: 0,
    })

    return keyFrames
}

boxAnimation.setKeys(boxKeyFrames());


export { boxAnimation}