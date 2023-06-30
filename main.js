import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();

 // ======>  1. Create the scene  with the default
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
// first attribute is fied  if view (FOV); FOV la pham vi canh duoc nhin thay tren man hinh; value is degrees(độ);
// second attribute is aspect ratio (  width/height => ko hình sẽ bị nhòe)
//  2 last  attribute is near  & far

 // ======>  2. Create the view Canvas
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// size of renderer view Canvas in screen 

 // ======>  3. Create the view Cube(obj)
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z=5;

//creat cube
//geometry =>  cần vật liệu tô màu cho obj
//mesh => mặt phẳng
// scene.add => add coordinates(0,0,0) tránh trường hợp camera & cube chồng lên nhau


// ======>  4. Rendering the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    // ======>  4.1. Animation cube
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;

}


//5. WebGL  compatibility check => kiểm tra trình  duyệt có hỗ trợ WEBGL không
function finalize() {
    if(WebGL.isWebGLAvailable()) {
        animate();
    }else{
        const warning = WebGL.getWebGLErrorMessage();
        document.getElementById('container').appendChild(warning);
    }
}
finalize();

