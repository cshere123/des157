//3D stuff
'use strict';
var camera, controls, scene, renderer;
var container;

var mouse = new THREE.Vector2(),
  INTERSECTED;
var radius = 100,
  theta = 0;

initialize();
render();

//draws the sphere, sets the window, smooths the textures of the spheres to appear
function initialize() {
  //background color
  scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  //illusion to have depth
  scene.fog = new THREE.FogExp2('white', 0.002);
  renderer = new THREE.WebGLRenderer();

  //smooths the pixels, without it, it will look grainy
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  var container = document.getElementById('container');
  container.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.z = 700;
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);

  var light= new THREE.DirectionalLight(0xffffff, 1);
  scene.add(light);

  //draws the shape, using MeshPhongMaterial to have shapes appear
  var geometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.5);
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
  });

  //to have multiple shapes instead of just drawing one
  for (var i = 0; i < 50; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.1) * 500;
    mesh.position.y = (Math.random() - 0.1) * 500;
    mesh.position.z = (Math.random() - 0.1) * 500;
    scene.add(mesh);
  }
}

//moushover affect
function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

//smooths the zooming and dragging
function animate() {
  requestAnimationFrame(animate);
  render();
}

//allows for the whole thing to work: allow camera view to have camera perspective by clicking and dragging or zooming in and out
function render() {
  renderer.render(scene, camera);
}