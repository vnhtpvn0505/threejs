//  using glTF (GL Transmission Format) = >glTF is focused on runtime asset delivery, 
//it is compact to transmit and fast to load. Features include meshes, materials, textures, skins, skeletons, morph targets, animations, lights, and cameras.
//  Tool exports: glTF  (GL Transmission Format): Blender,  Subtain Painter, Modo, Toolbag, Houdini, Cinema4D, COLLADA2GLTF, FBX2GLTF,OBJ2GLTF
//github : https://github.com/KhronosGroup/glTF/issues/1051 
// other: https://github.khronos.org/glTF-Project-Explorer/

//loading GLTF
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

// ----------------------- 1. Create Scene ------------------------
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

 const scene =new THREE.Scene();
 const loader = new GLTFLoader();
 loader.load('models/octopus.glb', function(gltf){
	const faceModel = gltf.scene;
        scene.add(faceModel);
		console.log(loader);
  });
 
  function render() {
    renderer.render(scene, camera)
}

render();
