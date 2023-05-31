import * as THREE from 'three';

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, points: THREE.Points;

interface Point {
	x: number,
	y: number,
	z: number,
}

function init() {
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	camera.position.z = 5;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BufferGeometry();
	const vertices = [];

	//let faceMeshData: number[] = [];
	let faceMeshData = [{
		x: 0,
		y: 1,
		z: 2,
	}];

	for (let i = 0; i < faceMeshData.length; i++) {
		const x = faceMeshData[i].x;
		const y = faceMeshData[i].y;
		const z = faceMeshData[i].z;

		vertices.push(x, y, z);
	}

	geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

	const material = new THREE.PointsMaterial({color: 0x00ff00});
	points = new THREE.Points(geometry, material);
	scene.add(points);
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	points.rotation.x += 0.01;
	points.rotation.y += 0.01;
}

init();
animate();

