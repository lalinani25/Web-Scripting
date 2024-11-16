const frameRate = 60;

let manAnimation = new BABYLON.Animation("manAnimation",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

function manKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: -420,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: -430,
    })

    keyFrames.push({
        frame: frameRate * 3,
        value: -420,
    })

    keyFrames.push({
        frame: frameRate * 5,
        value: -410,
    })

    keyFrames.push({
        frame: frameRate * 6,
        value: 0,
    })

    return keyFrames
}

manAnimation.setKeys(manKeyFrames());


export { manAnimation}