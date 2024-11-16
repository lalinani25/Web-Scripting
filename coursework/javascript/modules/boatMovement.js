const frameRate = 60;

let boatAnimation = new BABYLON.Animation("boatAnimation",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

function boatKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: -400,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: -410,
    })

    keyFrames.push({
        frame: frameRate * 3,
        value: -400,
    })

    keyFrames.push({
        frame: frameRate * 5,
        value: -390,
    })

    keyFrames.push({
        frame: frameRate * 6,
        value: 0,
    })

    return keyFrames
}

boatAnimation.setKeys(boatKeyFrames());


export { boatAnimation}