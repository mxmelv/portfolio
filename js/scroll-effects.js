// js/scroll-effects.js
// Configuration de Lenis pour un défilement fluide
const lenis = new Lenis({
    duration: 1.2,
    smooth: true
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  
  
  // js/three-animations.js
  // Animation simple Three.js pour une sphère 3D (exemple)
  import * as THREE from 'three';
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0x007BFF });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);
  
  camera.position.z = 5;
  
  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();