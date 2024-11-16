var B = BABYLON;

var canvas = document.getElementById("renderCanvas");

var engine = new B.Engine(canvas, true);

var createScene = function () {

    var scene = new B.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    scene.collisionsEnabled = true;

    var camera = new B.ArcRotateCamera("cam", 1.4 * Math.PI, 0.45 * Math.PI, 200, new B.Vector3(10, 10, 10), scene);
    camera.attachControl(canvas,true);
    camera.applyGravity = true;
    camera.ellipsoid = new BABYLON.Vector3(1, 40, 1);
    camera.checkCollisions = true;
    camera.speed = 8;
    camera.rotation.y = -Math.PI / 2;

    let hemi = new B.HemisphericLight("hemi-light", new B.Vector3(0, 1, 0), scene);
    hemi.intensity = 0.65;

    addGroundAndSkybox(scene)

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "treeHigh.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        let tree = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(tree)
            }
            tree.scaling.x = 30
            tree.scaling.y = 30
            tree.scaling.z = 30
            tree.position.y = -20;
            tree.position.x = -100;
            tree.position.z = -20;

    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "cartHigh.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

    
        let cart = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(cart)
            }
            cart.scaling.x = 35
            cart.scaling.y = 35
            cart.scaling.z = 35
            cart.position.x = 50
            cart.position.y = -18;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "roofHighGableTop.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/3
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 70
            roofHighGableTop.scaling.y = 50
            roofHighGableTop.scaling.z = 60
            roofHighGableTop.position.x = -40
            roofHighGableTop.position.y = 30;
            roofHighGableTop.rotation.x = Math.PI/2;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "wallWindowGlass.glb", scene,
    function (meshes, particalSystem, skeletons) {
        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = -Math.PI/6
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 70
            roofHighGableTop.scaling.y = 50
            roofHighGableTop.scaling.z = 60
            roofHighGableTop.position.x = -40
            roofHighGableTop.position.y = -20;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "wallWindowStone.glb", scene,
    function (meshes, particalSystem, skeletons) {
        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/3
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 70
            roofHighGableTop.scaling.y = 50
            roofHighGableTop.scaling.z = 60
            roofHighGableTop.position.x = -40
            roofHighGableTop.position.y = -20;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "wallDoorwayRound.glb", scene,
    function (meshes, particalSystem, skeletons) {
        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/1.2
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 70
            roofHighGableTop.scaling.y = 50
            roofHighGableTop.scaling.z = 60
            roofHighGableTop.position.x = -40
            roofHighGableTop.position.y = -20;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "wallDetailHorizontal.glb", scene,
    function (meshes, particalSystem, skeletons) {
        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/1.2
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 70
            roofHighGableTop.scaling.y = 50
            roofHighGableTop.scaling.z = 60
            roofHighGableTop.position.x = -40
            roofHighGableTop.position.y = -55;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "wall.glb", scene,
    function (meshes, particalSystem, skeletons) {
        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/3
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 70
            roofHighGableTop.scaling.y = 50
            roofHighGableTop.scaling.z = 60
            roofHighGableTop.position.x = -70
            roofHighGableTop.position.y = -20;
            roofHighGableTop.position.z = 45
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "well.obj", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)


        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 10
            roofHighGableTop.scaling.y = 10
            roofHighGableTop.scaling.z = 10
            roofHighGableTop.position.x = 60
            roofHighGableTop.position.y = -19;
            roofHighGableTop.position.z = -60;
    })

    BABYLON.SceneLoader.ImportMesh(null, "assets/", "bannerGreen.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/3
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 20
            roofHighGableTop.scaling.y = 20
            roofHighGableTop.scaling.z = 20
            roofHighGableTop.position.x = -10
            roofHighGableTop.position.y = 7;
            roofHighGableTop.position.z = -10;
            roofHighGableTop.rotation.x = Math.PI/2;
    })
    BABYLON.SceneLoader.ImportMesh(null, "assets/", "bannerGreen.glb", scene,
    function (meshes, particalSystem, skeletons) {
        console.log(meshes)

        for (let mesh of meshes) {
            mesh.checkCollisions = true;
           
             mesh.rotation.y = Math.PI/3
    
        }

        let roofHighGableTop = meshes[0]
            for (let i = 1; i < meshes.length; i++) {
                meshes[i].setParent(roofHighGableTop)
            }
            roofHighGableTop.scaling.x = 20
            roofHighGableTop.scaling.y = 20
            roofHighGableTop.scaling.z = 20
            roofHighGableTop.position.x = -42
            roofHighGableTop.position.y = 7;
            roofHighGableTop.position.z = -27;
            roofHighGableTop.rotation.x = Math.PI/2;
    
    })
return scene;
}

let addGroundAndSkybox = function (scene) {
    
    let ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("ground", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpALpI03QK-R86JxrkpObm1iM6q0D3q1rog&usqp=CAU", {
        width: 1000, height: 1000, subdivisions: 5, maxHeight: 30, minHeight: 0, sideOrientation: BABYLON.Mesh.DOUBLESIDE
    }, scene, false);
    ground.checkCollisions = true;
    ground.position.y = 0;
    ground.position = new B.Vector3(0, -25, 10)

    material = new B.StandardMaterial("texture1", scene);
    material.diffuseTexture = new B.Texture("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8ur0ikNlAhfmev7uAbN__MiuUz5YOE-3nQ&usqp=CAU", scene);
    ground.material = material;
    
    let skybox = B.Mesh.CreateBox("skyBox",1000.0, scene);
        skybox.position.y = -20;
        skybox.infiniteDistance = true;
    
        let skyboxMaterial = new B.StandardMaterial("skyBoxMat", scene);
        skyboxMaterial.backFaceCulling = false;
    
        let files = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("images/stormydays/", scene, files);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;		
    
}



let scene = createScene();

let loop = function () {
    scene.render();
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

window.addEventListener("resize", resize);