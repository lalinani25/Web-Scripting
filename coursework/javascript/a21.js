import { boatAnimation } from "../javascript/modules/boatMovement.js";
import { manAnimation } from "../javascript/modules/manMovement.js";
import { man2Animation } from "../javascript/modules/man2Movement.js";
import { boxAnimation } from "../javascript/modules/boxMovement.js";

var B = BABYLON;

var canvas = document.getElementById("renderCanvas");

var engine = new B.Engine(canvas, true);

let man2 = undefined

let man3 = undefined

let sphere = undefined
let sphere2 = undefined
let box2 = undefined

var createScene = function () {

    var scene = new B.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    scene.collisionsEnabled = true;

    let camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(-400, 50, 500), scene);
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
    camera.ellipsoidOffset = new BABYLON.Vector3(0, -1, 0);
    camera.rotation.y = Math.PI
    camera.attachControl(canvas, true);

    let hemi = new B.HemisphericLight("hemi-light", new B.Vector3(0, 1, 0), scene);
    hemi.intensity = 0.65;
    
    scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    scene.fogDensity = 0.003;
    scene.fogColor = new BABYLON.Color3(0.6, 0.6, 0.6);

    //test comment

    addGroundAndSkybox(scene)

    BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "mountain.obj", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let mountain = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(mountain)
            }
            mountain.scaling.x = 2
            mountain.scaling.y = 2
            mountain.scaling.z = 2
            mountain.position.y = 2;
            mountain.position.x = -300;
            mountain.position.z = 100;

            let material = new B.StandardMaterial("texture1", scene);
            material.diffuseTexture = new B.Texture("images/mountain1.png", scene);
            mountain.material = material;

    }) 
    
    
    BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "wave.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            let wave = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(wave)
            }
            wave.scaling.x = 20
            wave.scaling.y = 20
            wave.scaling.z = 25
            wave.position.y = -5;
            wave.position.x = -420;
            wave.position.z = 290;
            wave.rotation.y = Math.PI

            let option0 = BABYLON.Tools.ToRadians(0);
	    	let option1 = BABYLON.Tools.ToRadians(-78);
		    let option2 = BABYLON.Tools.ToRadians(0);
           
            wave.rotation = new BABYLON.Vector3(option0, option1, option2)

            var waveMat = new BABYLON.StandardMaterial("ground", scene);

        })

        BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "wave.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            let wave = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(wave)
            }
            wave.scaling.x = 10
            wave.scaling.y = 10
            wave.scaling.z = 30
            wave.position.y = -20;
            wave.position.x = -430;
            wave.position.z = 410;
            wave.rotation.y = Math.PI

            let option0 = BABYLON.Tools.ToRadians(0);
	    	let option1 = BABYLON.Tools.ToRadians(-78);
		    let option2 = BABYLON.Tools.ToRadians(0);
           
            wave.rotation = new BABYLON.Vector3(option0, option1, option2)
       
        })

        BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "wave.glb", scene,
        function (meshes, particalSystem, skeletons) {
            console.log(meshes)

            let wave = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(wave)
            }
            wave.scaling.x = 10
            wave.scaling.y = 10
            wave.scaling.z = 10
            wave.position.y = -2;
            wave.position.x = -470;
            wave.position.z = 330;
            wave.rotation.y = Math.PI
       
        })

        BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "boat.glb", scene,
        function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let boat = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(boat)
            }
            boat.scaling.x = 0.09
            boat.scaling.y = 0.09
            boat.scaling.z = 0.09
            boat.position.y = 30;
            boat.position.x = -400;
            boat.position.z = 350;

            let option0 = BABYLON.Tools.ToRadians(-10);
	    	let option1 = BABYLON.Tools.ToRadians(60);
		    let option2 = BABYLON.Tools.ToRadians(0);
           
            boat.rotation = new BABYLON.Vector3(option0, option1, option2)
           
            boat.animations.push(boatAnimation)
            scene.beginAnimation(boat, 10, 300, true);
         
    }) 

    BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "man.glb", scene,
    function (meshes, particalsystems, skeleton) {
        console.log(meshes)

        let man = meshes[0]
        for (let i = 1; i < meshes.length; i++) {
            meshes[i].setParent(man)
        }
        man.scaling.x = 15
        man.scaling.y = 15
        man.scaling.z = 15
        man.position.y = 32;
        man.position.x = -400;
        man.position.z = 350;

        let option0 = BABYLON.Tools.ToRadians(-10);
        let option1 = BABYLON.Tools.ToRadians(60);
        let option2 = BABYLON.Tools.ToRadians(0);
       
        man.rotation = new BABYLON.Vector3(option0, option1, option2)

        man.animations.push(boatAnimation)
        scene.beginAnimation(man, 10, 300, true);

        man2 = man.clone("man2")
        man2.position.x = -410
        man2.position.y = 30

        man2.animations.push(man2Animation)
        scene.beginAnimation(man2, 10, 300, true);

        man3 = man.clone("man2")
        man3.position.x = -420
        man3.position.y = 28

        man3.animations.push(manAnimation)
        scene.beginAnimation(man3, 10, 300, true);
       
}) 

BABYLON.SceneLoader.ImportMesh(null, "assets/a21/", "katana.glb", scene,
function (meshes, particalSystem, skeletons) {
console.log(meshes)

let katana = meshes[0]
    for (let i = 1; i < meshes.length; i++) {
        meshes[i].setParent(katana)
    }
    katana.scaling.x = 10
    katana.scaling.y = 10
    katana.scaling.z = 10
    katana.position.y = 47;
    katana.position.x = -350;
    katana.position.z = 380;

    let option0 = BABYLON.Tools.ToRadians(30);
    let option1 = BABYLON.Tools.ToRadians(60);
    let option2 = BABYLON.Tools.ToRadians(20);
   
    katana.rotation = new BABYLON.Vector3(option0, option1, option2)
   
    katana.animations.push(boxAnimation)
    scene.beginAnimation(katana, 10, 300, true);
 
}) 


    sphere = B.MeshBuilder.CreateSphere("sphere", {diameter:1});
    sphere.position = new B.Vector3(-380, 100, 280)

    sphere2 = B.MeshBuilder.CreateSphere("sphere", {diameter:1});
    sphere2.position = new B.Vector3(-495, 40, 283)

    box2 = B.MeshBuilder.CreateBox("box", {height: 10, width:10, depth: 10});
    box2.position = new B.Vector3(-350, 47, 380)
    
    let material = new B.StandardMaterial("texture1", scene);
    material.diffuseTexture = new B.Texture("images/boxTexture.png", scene);
    box2.material = material;
    
    let option0 = BABYLON.Tools.ToRadians(-10);
    let option1 = BABYLON.Tools.ToRadians(60);
    let option2 = BABYLON.Tools.ToRadians(0);
   
    box2.rotation = new BABYLON.Vector3(option0, option1, option2)

    box2.animations.push(boxAnimation)
    scene.beginAnimation(box2, 10, 300, true);

    box2.actionManager = new BABYLON.ActionManager(scene);
    box2.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPickTrigger, box2.material, "wireframe", true))
        .then(new BABYLON.DoNothingAction());
    
    addParticles(scene)
    addParticles2(scene)

return scene;
}

let addGroundAndSkybox = function (scene) {
    
    let ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpALpI03QK-R86JxrkpObm1iM6q0D3q1rog&usqp=CAU", {
        width: 10000, height: 10000, subdivisions: 30, maxHeight: 50, minHeight: 0, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene, false);
    ground.checkCollisions = true;
    ground.position.y = 0;
    ground.position = new B.Vector3(0, 5,0)

    let material = new B.StandardMaterial("texture1", scene);
    material.diffuseTexture = new B.Texture("images/wave.jpg", scene);
    ground.material = material;

    let skybox = B.Mesh.CreateBox("skyBox",1000.0, scene);
        skybox.position.y = -20;
        skybox.infiniteDistance = true;
    
        let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
        skyboxMaterial.backFaceCulling = false;
    
        let files = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/cloudy/", scene, files);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;		
        
}

async function addParticles(scene) {
    
    let capacity = 10000;
    
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/circle.png", scene);


    particleSystem.emitter = sphere
    
    particleSystem.emitRate = 30;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(-450, -700, 270);

    particleSystem.minSize = 1;
    particleSystem.maxSize = 6;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

}

async function addParticles2(scene) {
    
    let capacity = 10000;
    
    const particleSystem = new BABYLON.ParticleSystem("particles", capacity, scene)
    particleSystem.particleTexture = new BABYLON.Texture("images/circle.png", scene);


    particleSystem.emitter = sphere2
    
    particleSystem.emitRate = 30;

    particleSystem.start();

    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    particleSystem.minInitialRotation = 0;
    particleSystem.maxInitialRotation = Math.PI / 2;

    particleSystem.direction1 = new BABYLON.Vector3(200, -70, 270);

    particleSystem.minSize = 1;
    particleSystem.maxSize = 3;

    particleSystem.minLifeTime = 50;
    particleSystem.maxLifeTime = 50;

    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

}

let scene = createScene();


let volume = 0
function easeInVolume() {
    let interval = setInterval(() => {
        volume += 0.005;
        music.setVolume(volume)
    }, 100)

    setTimeout((interval) => {
        clearTimeout(interval)
    }, 5000)
}

var music = new BABYLON.Sound(
    "Music",
    "./audio/storm.mp3",
    scene,
    easeInVolume,
    { loop: true, volume: 0, autoplay: true, offset: 13 }
);

let loop = function () {
    scene.render();
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

window.addEventListener("resize", resize);