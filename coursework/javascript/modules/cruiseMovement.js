const frameRate = 60;

let cruiseAnimation = new BABYLON.Animation("cruiseAnimation",
    "position.z",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

function cruiseKeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: 300,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: -500,
    })

    keyFrames.push({
        frame: frameRate * 3,
        value: -1000,
    })

    keyFrames.push({
        frame: frameRate * 4,
        value: -1500,
    })

    keyFrames.push({
        frame: frameRate * 6,
        value: -2000,
    })

    return keyFrames
}


cruiseAnimation.setKeys(cruiseKeyFrames());


export { cruiseAnimation}