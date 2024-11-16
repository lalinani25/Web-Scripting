import { cruiseAnimation } from "../javascript/modules/cruiseMovement.js";
import { cameraRotation } from "../javascript/modules/cameraMovement.js";

var B = BABYLON;

var canvas = document.getElementById("renderCanvas");

var engine = new B.Engine(canvas, true);

var scene = new B.Scene(engine);

let ground = undefined

let box = undefined

let box2 = undefined

let box3 = BABYLON.MeshBuilder.CreateBox("box", {});
box3.position = new BABYLON.Vector3(-60, 400, -200); 

let box4 = BABYLON.MeshBuilder.CreateBox("box", {});
box4.position = new BABYLON.Vector3(-60, 400, -400); 

let box5 = BABYLON.MeshBuilder.CreateBox("box", {});
box5.position = new BABYLON.Vector3(-60, 400, 200); 

let box6 = BABYLON.MeshBuilder.CreateBox("box", {});
box6.position = new BABYLON.Vector3(0, 500, -700); 

let box7 = BABYLON.MeshBuilder.CreateBox("box", {});
box7.position = new BABYLON.Vector3(20, 500, 50); 

var createScene = function () {
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    scene.collisionsEnabled = true;

  let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(-550, 50, -10), scene);
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    camera.ellipsoidOffset = new BABYLON.Vector3(0, -1, 0);
    camera.rotation.y = Math.PI/2.05
    camera.attachControl(canvas, true);

    let light = new B.HemisphericLight("hemi-light", new B.Vector3(0, 1, 0), scene);
    light.intensity = 0.65;

    addGroundAndSkybox(scene)

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "exoticPalmDefalt.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }
            tree.scaling.x = 0.15
            tree.scaling.y = 0.15
            tree.scaling.z = 0.15
            tree.position.y = -10;
            tree.position.x = -360;
            tree.position.z = 150;

    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "exoticPalmCurve.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }
            tree.scaling.x = 0.18
            tree.scaling.y = 0.18
            tree.scaling.z = 0.18
            tree.position.y = -10;
            tree.position.x = -350;
            tree.position.z = -170;

    })


    BABYLON.SceneLoader.ImportMesh(null, "assets/", "exoticPalmBaby.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }
            tree.scaling.x = 0.18
            tree.scaling.y = 0.18
            tree.scaling.z = 0.18
            tree.position.y = -10;
            tree.position.x = -350;
            tree.position.z = -120;

    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "rockSmall.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }
            tree.scaling.x = 2
            tree.scaling.y = 2
            tree.scaling.z = 2
            tree.position.y = -20;
            tree.position.x = -60;
            tree.position.z = -400;


    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "cruiseShip.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }
            tree.scaling.x = 15
            tree.scaling.y = 15
            tree.scaling.z = 15
            tree.position.y = -20;
            tree.position.x = -60;
            tree.position.z = -200;
            tree.animations.push(cruiseAnimation)
            scene.beginAnimation(tree, -10, 300, true);

            

    }) 
    
    box = B.MeshBuilder.CreateBox("box", {height: 3, width: 4, depth: 4});
    box.position.y = -20;
    box.position.x = -60;
    box.position.z = -200;
    box.animations.push(cruiseAnimation)
    scene.beginAnimation(box, -10, 300, true);


    box2 = B.MeshBuilder.CreateBox("box", {height: 4, width:4, depth: 4});
    box2.position.y = -20;
    box2.position.x = -60;
    box2.position.z = -400;

    addRain(scene);
    addRain2(scene);
    addRain3(scene);
    addRain4(scene);
    addRain5(scene);
    return scene;
}

let count = 0;
scene.registerBeforeRender(function () {
    if (box.intersectsPoint(box2.position) && count == 0) {
        scene.beginDirectAnimation(scene.activeCamera, [cameraRotation], 80, 240, false);
        count++
    }
})

let addGroundAndSkybox = function (scene) {
    
    ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpALpI03QK-R86JxrkpObm1iM6q0D3q1rog&usqp=CAU", {
        width: 500, height: 500, subdivisions: 5, maxHeight: 30, minHeight: 0, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene, false);
    ground.checkCollisions = true;
    ground.receiveShadows = true;

    ground.position.y = 0;
    ground.position = new B.Vector3(-500, -20, -10)

    let material = new B.StandardMaterial("texture1", scene);
    material.diffuseTexture = new B.Texture("https://t4.ftcdn.net/jpg/00/66/44/47/360_F_66444759_G9woRbKGbAawyNqhAUWTeUHQpggEo9Ov.jpg", scene);
    ground.material = material;
    
    let skybox = B.Mesh.CreateBox("skyBox",5000.0, scene);
        skybox.position.y = -40;
        skybox.infiniteDistance = true;
    
        let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
        skyboxMaterial.backFaceCulling = false;
    
        let files = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/daylights/", scene, files);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;		
    
}

async function addRain(scene) {
    let capacity = 10000;
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/rain.png", scene);


    particleSystem.emitter = box3
    
    particleSystem.emitRate = 100;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(-1000, -700, -200);
    particleSystem.direction2 = new BABYLON.Vector3(1000, -700, -200);

    particleSystem.minSize = 3;
    particleSystem.maxSize = 3;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    particleSystem.color = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
}

async function addRain2(scene) {
    let capacity = 10000;
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/rain.png", scene);

    particleSystem.emitter = box4
    
    particleSystem.emitRate = 100;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(-1000, -700, -200);
    particleSystem.direction2 = new BABYLON.Vector3(1000, -700, -200);

    particleSystem.minSize = 3;
    particleSystem.maxSize = 3;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.color = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
}

async function addRain3(scene) {
    let capacity = 10000;
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/rain.png", scene);


    particleSystem.emitter = box5
    
    particleSystem.emitRate = 200;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(-1000, -700, -200);
    particleSystem.direction2 = new BABYLON.Vector3(1000, -700, -200);

    particleSystem.minSize = 3;
    particleSystem.maxSize = 3;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.color = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
}

async function addRain4(scene) {
    let capacity = 10000;
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/rain.png", scene);


    particleSystem.emitter = box6
    
    particleSystem.emitRate = 100;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(-1000, -700, -200);
    particleSystem.direction2 = new BABYLON.Vector3(1000, -700, -200);

    particleSystem.minSize = 3;
    particleSystem.maxSize = 3;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.color = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
}

async function addRain5(scene) {
    let capacity = 10000;
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/rain.png", scene);


    particleSystem.emitter = box7
    
    particleSystem.emitRate = 100;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(-1000, -700, -200);
    particleSystem.direction2 = new BABYLON.Vector3(1000, -700, -200);

    particleSystem.minSize = 3;
    particleSystem.maxSize = 3;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.color = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
}
let scene1 = createScene();


let loop = function () {
    scene1.render();
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

window.addEventListener("resize", resize);