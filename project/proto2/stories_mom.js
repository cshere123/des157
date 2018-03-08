//3D stuff
'use strict';
var camera, controls, scene, raycaster, renderer;
var container, stats;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;

initialize();
// render();
animate();
//draws the sphere, sets the window, smooths the textures of the spheres to appear
function initialize() {

  //background color
  scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  //illusion to have depth
  scene.fog = new THREE.FogExp2('white', 0.002);
  renderer = new THREE.WebGLRenderer();

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 700;
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render);
  var light = new THREE.DirectionalLight(0xffffff, 1);

  //draws the shape, using MeshPhongMaterial to have shapes appear
  scene.add(light);
  var geometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.5);
//  var material = new THREE.MeshPhongMaterial({ color: 0xffffff});
  

  //to have multiple shapes instead of just drawing one
  /*
  for (var i = 0; i < 50; i++) {
    var mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff }));
    mesh.position.x = (Math.random() - 0.1) * 500;
    mesh.position.y = (Math.random() - 0.1) * 500;
    mesh.position.z = (Math.random() - 0.1) * 500;
    scene.add(mesh);
  }
  */
   for ( var i = 0; i < 2000; i ++ ) {
       var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
       object.position.x = Math.random() * 800 - 400;
       object.position.y = Math.random() * 800 - 400;
       object.position.z = Math.random() * 800 - 400;
       object.rotation.x = Math.random() * 2 * Math.PI;
       object.rotation.y = Math.random() * 2 * Math.PI;
       object.rotation.z = Math.random() * 2 * Math.PI;
       object.scale.x = Math.random() + 0.5;
       object.scale.y = Math.random() + 0.5;
       object.scale.z = Math.random() + 0.5;
       scene.add( object );
  }
  //smooths the pixels, without it, it will look grainy
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  stats = new Stats();
  container.appendChild(stats.dom);

  raycaster = new THREE.Raycaster();
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  //window resizes
  window.addEventListener('resize', onWindowResize, false);
}

//moushover affect
function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth)-1  ;
  mouse.y = -(event.clientY / window.innerHeight)+1 ;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
//smooths the zooming and dragging
function animate() {
  requestAnimationFrame(animate);
  render();
  stats.update();
}

function render() {
    theta += 0.1;
    camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
    camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
    camera.lookAt( scene.position );
    camera.updateMatrixWorld();
    // find intersections
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children );
    if ( intersects.length > 0 ) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex( 0xff0000 );
        }
     } else {
        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
     }
     renderer.render( scene, camera );
}
//allows for the whole thing to work: allow camera view to have camera perspective by clicking and dragging or zooming in and out
/*
function render() {
  renderer.render(scene, camera);
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
      INTERSECTED = intersects[0].object;
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
      INTERSECTED.material.emissive.setHex(0xff0000);
    }
  } else {
    if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
    INTERSECTED = null;
  }
}
*/
