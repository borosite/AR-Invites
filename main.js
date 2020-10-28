import * as THREE from './node_modules/three/src/Three.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.01, 1000);
camera.position.z = 25;
var renderer = new THREE.WebGL1Renderer({antialias: false});
// renderer.setPixelRatio(window.setPixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var video = document.createElement("video");

var texture = new THREE.VideoTexture(video);
texture.needsUpdate;
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;
texture.crossOrigin = 'anonymous';

var videoObject = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({map: texture, side: THREE.DoubleSide}),
);
videoObject.visible = true;
scene.add(videoObject);
video.src = "./sample-mp4-file.mp4";
video.load();
video.play();

var animate = function() {
    requestAnimationFrame( animate );
    renderer.render(scene, camera);
}
animate();