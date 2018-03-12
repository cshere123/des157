// //3D stuff
// 'use strict';
// var camera, controls, scene, raycaster, renderer;
// var container, stats;

// var mouse = new THREE.Vector2(),INTERSECTED;
// // var radius = 100, theta = 0;

// var PI2 = Math.PI*2;

// var programFill = function (context) {
//   context.beginPath();
//   context.arc(0,0,0,5,0,PI2, true);
//   context.fill();
// }

// var programStroke = function (context){
//   context.line.Width = 0.025;
//   context.beginPath();
//   context.arc(0,0,0,5,0,PI2, true);
//   context.stroke();
// }

// initialize();
// animate();

// //draws the sphere, sets the window, smooths the textures of the spheres to appear
// function initialize() {
//   //background color
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color('blue');

//   //illusion to have depth
//   scene.fog = new THREE.FogExp2('white', 0.002);
//   renderer = new THREE.CanvasRenderer();

//   camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 10000);
//   camera.position.set (0,300,500);
//   controls = new THREE.OrbitControls(camera, renderer.domElement);
//   controls.addEventListener('change', render);

//   var light= new THREE.DirectionalLight(0xffffff, 1);
//   scene.add(light);

//   //draws the shape, using MeshPhongMaterial to have shapes appear
//   var geometry = new THREE.SphereGeometry(15, 8, 6, 0, 6.3, 0, 3.5);
//   var material = new THREE.MeshPhongMaterial({
//     color: 0xffffff,
//   });

//   //to have multiple shapes instead of just drawing one
//   // for (var i = 0; i < 200; i++) {
//   //   var mesh = new THREE.Mesh(geometry, material);
//   //   mesh.position.x = (Math.random() - 0.1) * 500;
//   //   mesh.position.y = (Math.random() - 0.1) * 500;
//   //   mesh.position.z = (Math.random() - 0.1) * 500;
//   //   scene.add(mesh);
//   // }

//   //particles

// for ( var i = 0; i < 100; i ++ ) {

//   var particle = new THREE.Sprite( new THREE.SpriteCanvasMaterial( { color: Math.random() * 0x808080 + 0x808080, program: programStroke } ) );


//   particle.position.x = Math.random() * 800 - 400;


//   particle.position.y = Math.random() * 800 - 400;


//   particle.position.z = Math.random() * 800 - 400;


//   particle.scale.x = particle.scale.y = Math.random() * 20 + 20;


//   scene.add( particle );

// }



//   //smooths the pixels, without it, it will look grainy
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   container = document.getElementById('container');
//   container.appendChild(renderer.domElement);

//   stats = new Stats();
//   container.appendChild(stats.dom);

//   raycaster = new THREE.Raycaster();
//   document.addEventListener('mousemove', onDocumentMouseMove, false);
//   //window resizes
//   window.addEventListener('resize', onWindowResize, false);
// }

// //moushover affect
// function onDocumentMouseMove(event) {
//   event.preventDefault();
//   mouse.x = (event.clientX / window.innerWidth)- 1;
//   mouse.y = -(event.clientY / window.innerHeight)+ 1;
// }

// function onWindowResize (){
//   camer.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// //smooths the zooming and dragging
// function animate() {
//   requestAnimationFrame(animate);
//   render();
//   stats.update();
// }

// var radius=600;
// var theta=0;

// //allows for the whole thing to work: allow camera view to have camera perspective by clicking and dragging or zooming in and out
// function render() {
//   theta += 0.1;
//   camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
//   camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
//   camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );

//   camera.lookAt( scene.position );
//   camera.updateMatrixWorld();
//   // find intersections
//   raycaster.setFromCamera( mouse, camera );
//   var intersects = raycaster.intersectObjects( scene.children );
//   if ( intersects.length > 0 ) {
//       if ( INTERSECTED != intersects[ 0 ].object ) {
//           if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
//           INTERSECTED = intersects[ 0 ].object;
//           INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
//           INTERSECTED.material.emissive.setHex( 0xff0000 );
//         }
//      } else {
//         if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
//         INTERSECTED = null;
//      }

//   renderer.render(scene, camera);
// }

//--------------------------------------------------------------------------------------------------

var container, stats;
var camera, scene, renderer;
var raycaster;
var mouse;
var PI2 = Math.PI * 2;
var programFill = function(context) {
  context.beginPath();
  context.arc(0, 0, 0.5, 0, PI2, true);
  context.fill();
};
var programStroke = function(context) {
  context.lineWidth = 0.025;
  context.beginPath();
  context.arc(0, 0, 0.5, 0, PI2, true);
  context.stroke();
};
var INTERSECTED;
init();
animate();

function init() {
  container = document.createElement('div');
  document.body.appendChild(container);
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.set(0, 300, 500);
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x93A4D9);
  for (var i = 0; i < 300; i++) {
    var particle = new THREE.Sprite(new THREE.SpriteCanvasMaterial({
      color: 0xffffff,
      program: programStroke
    }));
    particle.position.x = Math.random() * 800 - 400;
    particle.position.y = Math.random() * 800 - 400;
    particle.position.z = Math.random() * 800 - 400;
    particle.scale.x = particle.scale.y = Math.random() * 10 + 30;
    scene.add(particle);
  }

  // controls = new THREE.OrbitControls(camera, renderer.domElement);
  // controls.addEventListener('change', render);

  //

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  renderer = new THREE.CanvasRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  stats = new Stats();
  // container.appendChild(stats.dom);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  //
  window.addEventListener('resize', onWindowResize, false);
}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

//
function animate() {
  requestAnimationFrame(animate);
  render();
  stats.update();
}
var radius = 600;
var theta = 0;

function render() {
  // rotate camera
  theta += 0.02;
  camera.position.x = radius * Math.sin(THREE.Math.degToRad(theta));
  camera.position.y = radius * Math.sin(THREE.Math.degToRad(theta));
  camera.position.z = radius * Math.cos(THREE.Math.degToRad(theta));
  camera.lookAt(scene.position);
  camera.updateMatrixWorld();
  // find intersections
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    if (INTERSECTED != intersects[0].object) {
      if (INTERSECTED) INTERSECTED.material.program = programStroke;
      INTERSECTED = intersects[0].object;
      INTERSECTED.material.program = programFill;
      console.log("hello");
    }
  } else {
    if (INTERSECTED) INTERSECTED.material.program = programStroke;
    INTERSECTED = null;
  }
  renderer.render(scene, camera);
}
