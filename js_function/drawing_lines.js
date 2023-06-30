import * as THREE from 'three';
import WebGLRender from 'three/addons/capabilities/WebGL.js';


// ----------------------- 1. Create Scene ------------------------
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );


 const scene =new THREE.Scene();

 // ----------------------- 2. create ablue LineBasicMaterial --------------------
 const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

 // ----------------------- 3. create geometry  with some vertical  --------------------
 const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

// ----------------------- 3. create line  --------------------
const line = new THREE.Line( geometry, material );


// ----------------------- 4.  All all scene  --------------------
    scene.add(line);
    renderer.render(scene,camera);



