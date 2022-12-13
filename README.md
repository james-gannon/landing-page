# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import _ as THREE from "three";
import React, { useRef } from "react";
import useFrame from "react-three-fiber";
import { Canvas } from "react-three-fiber";
import _ as R3F from "react-three-fiber";

const Map = ({ width, height, mapImageUrl }) => {
// Create a reference to the container element that will hold the map
const containerRef = useRef(null);

// Create a Three.js scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
75, // field of view
width / height, // aspect ratio
0.1, // near clipping plane
1000 // far clipping plane
);

// Create a texture from the mapImageUrl and a material using the texture
const texture = new THREE.TextureLoader().load(mapImageUrl);
const material = new THREE.MeshBasicMaterial({ map: texture });

// Create a mesh using the material
const mesh = new THREE.Mesh(
new THREE.PlaneGeometry(width, height, 1, 1), // geometry
material // material
);

// Set the position of the mesh
mesh.position.set(0, 0, 0);

// Add the mesh to the scene
scene.add(mesh);

// Set the camera position
camera.position.z = 1;

// Create a 3D spinning crumpled treasure chest
const chestGeometry = new THREE.BoxGeometry(1, 1, 1);
const chestTexture = new THREE.TextureLoader().load("chest-texture.jpg");
const chestMaterial = new THREE.MeshBasicMaterial({ map: chestTexture });
const chest = new THREE.Mesh(chestGeometry, chestMaterial);

// Set the initial position of the chest
chest.position.set(0, 0, 1);

// Add the chest to the scene
scene.add(chest);

// Animate the map and chest by spinning them
R3F.useFrame(() => {
mesh.rotation.x += 0.01;
mesh.rotation.y += 0.01;
chest.rotation.x += 0.01;
chest.rotation.y += 0.01;
});

return (
<Canvas style={{ width: "100%", height: "100%" }}>
<canvas ref={containerRef} />
</Canvas>
);
};

export default Map;
