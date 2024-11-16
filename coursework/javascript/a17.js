var B = BABYLON;

var canvas = document.getElementById("renderCanvas");

var engine = new B.Engine(canvas, true);

var createScene = function () {

    var scene = new B.Scene(engine);

    var camera = new B.ArcRotateCamera("cam", 0.40 * Math.PI, 0.35 * Math.PI, 70, new B.Vector3(0, 20, 5), scene);
    camera.attachControl(canvas, false);

    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    light.intensity = 0.95;

    let capsule = new BABYLON.MeshBuilder.CreateCapsule("capsule", {radius:0.5, height:6, radiusTop:1.7});

    const myShape1 = [
        new BABYLON.Vector3(0, 5, 0),
       new BABYLON.Vector3(1, 1, 0),
       new BABYLON.Vector3(5, 0, 0),
       new BABYLON.Vector3(1, -1, 0),
       new BABYLON.Vector3(0, -5, 0),
       new BABYLON.Vector3(-1, -1, 0),
       new BABYLON.Vector3(-5, 0, 0),
       new BABYLON.Vector3(-1, 1, 0)
];

const myPath1 = [
       new BABYLON.Vector3(0, 0, 0),
       new BABYLON.Vector3(0, 0, 2),
       new BABYLON.Vector3(0, 0, 4),
       new BABYLON.Vector3(0, 0, 6),
       new BABYLON.Vector3(0, 0, 8),
       new BABYLON.Vector3(0, 0, 10)
];

const scaling = (index, distance) => {
   return 1 / (index + 1);
};

let extrusion = BABYLON.MeshBuilder.ExtrudeShapeCustom("star", {shape: myShape1, closeShape: true, path: myPath1, scaleFunction: scaling, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
       
const myShape = [
    new BABYLON.Vector3(1, 1, 0),
    new BABYLON.Vector3(0.2, 1.3, 0),
    new BABYLON.Vector3(0, 1, 0),
    new BABYLON.Vector3(-0.2, 1.3, 0),
    new BABYLON.Vector3(-1, 1, 0),
];

const myPath = [];
for(let i = 0; i < 30; i++) {
    const point = new BABYLON.Vector3(i / 5 - 10, 0, 0);
    myPath.push(point); 
}


const myScale = function(i, distance) {
    const scale = 2 * Math.sin(i / 10);
    return scale;
};

let leaf = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf1 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf2 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf3 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf4 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf5 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf6 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
let leaf7 = BABYLON.MeshBuilder.ExtrudeShapeCustom("leaf", {shape: myShape, path: myPath, updatable: true, scaleFunction: myScale, sideOrientation: BABYLON.Mesh.DOUBLESIDE});

let box = B.MeshBuilder.CreateBox("box", {height: 10, width: 10, depth: 2});

let torusKnot = B.MeshBuilder.CreateTorusKnot("tk", {radius:18, tube: 0.01, radialSegments: 1024, p:120, q:180});

let  sphere1 = B.MeshBuilder.CreateSphere("sphere", {diameter:2});
let  sphere2 = B.MeshBuilder.CreateSphere("sphere", {diameter:2});
let  sphere3 = B.MeshBuilder.CreateSphere("sphere", {diameter:2});
let  sphere4 = B.MeshBuilder.CreateSphere("sphere", {diameter:2});
let  sphere5 = B.MeshBuilder.CreateSphere("sphere", {diameter:2});

let torus = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: 0.3, diameter: 6});
let torus2 = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: 0.3, diameter: 10});


extrusion.rotation.z = Math.PI/4
extrusion.rotation.x = Math.PI/2
extrusion.position = new B.Vector3(0, 19, -2)
capsule.position = new B.Vector3(0, 18, -2)
leaf.position = new B.Vector3(3, 18, -2)
leaf1.position = new B.Vector3(0, 18, -5)
leaf2.position = new B.Vector3(0, 18, 1)
leaf3.position = new B.Vector3(3, 18, 0)
leaf4.position = new B.Vector3(2, 18, -4)
leaf5.position = new B.Vector3(-3, 18, -2)
leaf6.position = new B.Vector3(-3, 18, -2)
leaf7.position = new B.Vector3(-3, 18, -1)
leaf1.rotation.y = Math.PI/2
leaf2.rotation.y = Math.PI/-2
leaf3.rotation.y = Math.PI/-4.5
leaf4.rotation.y = Math.PI/4
leaf5.rotation.y = Math.PI/1
leaf6.rotation.y = Math.PI/1.17
leaf7.rotation.y = Math.PI/-1.25
box.rotation.x = Math.PI/2
box.position = new B.Vector3(0, 9, -2)
torusKnot.position = new B.Vector3(0, 14, -2)
sphere1.position = new B.Vector3(15, 25, 0)
sphere2.position = new B.Vector3(-20, 29, 0)
sphere3.position = new B.Vector3(10, 7, 3)
sphere4.position = new B.Vector3(-5, -9, 1)
sphere5.position = new B.Vector3(-20, 9, -1)
torus.position = new B.Vector3(0, 14, -2)
torus2.position = new B.Vector3(0, 14, -2)
torus.rotation.x = Math.PI / 6
torus2.rotation.x = Math.PI /-7




material = new B.StandardMaterial("texture1", scene);
material.diffuseColor = new B.Color3(1, 0.7, 0);
capsule.material = material;

material = new B.StandardMaterial("texture1", scene);
material.diffuseTexture = new B.Texture("https://qph.cf2.quoracdn.net/main-qimg-0af36cdc5cfa81df45267763c29e8920-lq", scene);
leaf.material = material;
leaf1.material = material;
leaf2.material = material;
leaf3.material = material;
leaf4.material = material;
leaf5.material = material;
leaf6.material = material;
leaf7.material = material;

material = new B.StandardMaterial("texture1", scene);
material.diffuseColor = new B.Color3(0, 0.7, 0);
extrusion.material = material;

material = new B.StandardMaterial("texture1", scene);
material.diffuseTexture = new B.Texture("https://images.theconversation.com/files/275002/original/file-20190516-69195-1yg53ff.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip", scene);
box.material = material;


material = new B.StandardMaterial("texture1", scene);
material.diffuseTexture = new B.Texture("https://cdn11.bigcommerce.com/s-p64yd5j10d/products/2233/images/2262/RAL-6019-Pastel-Green__95839.1505828303.500.750.jpg?c=2", scene);
torus.material = material;
torus2.material = material;



material = new B.StandardMaterial("texture1", scene);
material.diffuseTexture = new B.Texture("https://media.istockphoto.com/id/679468742/photo/gold-foil-texture-background.jpg?s=612x612&w=0&k=20&c=61bxuvVeWz_PXNENqcFUSMce6QGbFRj0PUZO8OhrcE4=", scene);
torusKnot.material = material;

material = new B.StandardMaterial("texture1", scene);
material.diffuseTexture = new B.Texture("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UOG2G5hamv7-Id5KotELTuaaFPiudkmqVQ&usqp=CAU", scene);
sphere1.material = material;
sphere2.material = material;
sphere3.material = material;
sphere4.material = material;
sphere5.material = material;
   

return scene;
};

let scene = createScene();

let loop = function () {
    scene.render();
};

engine.runRenderLoop(loop);

let resize = function () {
    engine.resize();
}

window.addEventListener("resize", resize);
