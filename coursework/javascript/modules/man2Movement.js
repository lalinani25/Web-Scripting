const frameRate = 60;

let man2Animation = new BABYLON.Animation("man2Animation",
    "position.x",
    frameRate,
    BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

function man2KeyFrames() {
    const keyFrames = []

    keyFrames.push({
        frame: 0,
        value: -410,
    })

    keyFrames.push({
        frame: frameRate * 2,
        value: -420,
    })

    keyFrames.push({
        frame: frameRate * 3,
        value: -410,
    })

    keyFrames.push({
        frame: frameRate * 5,
        value: -400,
    })

    keyFrames.push({
        frame: frameRate * 6,
        value: 0,
    })

    return keyFrames
}

man2Animation.setKeys(man2KeyFrames());


export { man2Animation}