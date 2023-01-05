import { OrbitControls } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { BoxBufferGeometry } from "three";

// PINK BOX ANIMATION
//

/*const Chest = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Chest />
    </Canvas>
  );
};

export default App;*/

/*=========MASTER=========*/

/*/const Map = ({ width, height, mapImageUrl }) => {
  // Create a reference to the container element that will hold the map
  const containerRef = useRef(null);

  // Initialize the scene and camera state variables
  const [scene] = useState(new Scene());
  const [camera] = useState(
    new PerspectiveCamera(
      75, // field of view
      width / height, // aspect ratio
      0.1, // near clipping plane
      1000 // far clipping plane
    )
  );

  // Create a texture from the mapImageUrl and a material using the texture
  const texture = new TextureLoader().load(mapImageUrl);
  const material = new MeshBasicMaterial({ map: texture });

  // Create a mesh using the material
  const [mesh] = useState(
    new Mesh(
      new BoxGeometry(width, height, 1, 1), // geometry
      material // material
    )
  );

  // Set the position of the mesh
  mesh.position.set(0, 0, 0);

  // Add the mesh to the scene
  scene.add(mesh);

  // Set the camera position
  camera.position.z = 1;

  // Create a 3D spinning crumpled treasure chest
  const chestGeometry = new BoxGeometry(1, 1, 1);
  const chestTexture = new TextureLoader().load("chest-texture.jpg");
  const chestMaterial = new MeshBasicMaterial({ map: chestTexture });
  const [chestMesh] = useState(new Mesh(chestGeometry, chestMaterial));

  // Set the chest's position
  chestMesh.position.set(1, 0, 0);

  // Add the chest to the scene
  scene.add(chestMesh);

  // Use the useFrame hook to rotate the chest
  useFrame(() => {
    chestMesh.rotation.x += 0.01;
    chestMesh.rotation.y += 0.01;
  });

  // Use the useEffect hook to initialize and set up the Three.js renderer
  useEffect(() => {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    const renderScene = () => {
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      renderScene();
    };

    animate();
  }, [width, height, scene, camera]);*/

/*return (
    <div ref={containerRef}>
      /* Three.js will render the map and chest inside this container */
/*</div>
  );
};


export default Map;

const App = () => (
  <Canvas width={400} height={400} mapImageUrl="map.jpg">
    <Map />
  </Canvas>
);

ReactDOM.render(<App />, document.getElementById("root"));*/

// ========= END MASTER =========== /

/*import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  TextureLoader,
} from "three";

const Map = ({ width, height, mapImageUrl }) => {
  // Create a reference to the container element that will hold the map
  const containerRef = useRef(null);

  // Create a Three.js scene and camera
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75, // field of view
    width / height, // aspect ratio
    0.1, // near clipping plane
    1000 // far clipping plane
  );

  // Create a texture from the mapImageUrl and a material using the texture
  const texture = new TextureLoader().load(mapImageUrl);
  const material = new MeshBasicMaterial({ map: texture });

  // Create a mesh using the material
  const mesh = new Mesh(
    new BoxGeometry(width, height, 1, 1), // geometry
    material // material
  );

  // Set the position of the mesh
  mesh.position.set(0, 0, 0);

  // Add the mesh to the scene
  scene.add(mesh);

  // Set the camera position
  camera.position.z = 1;

  // Create a 3D spinning crumpled treasure chest
  const chestGeometry = new BoxGeometry(1, 1, 1);
  const chestTexture = new TextureLoader().load("chest-texture.jpg");
  const chestMaterial = new MeshBasicMaterial({ map: chestTexture });
  const chest = new Mesh(chestGeometry, chestMaterial);

  // Set the initial position of the chest
  chest.position.set(0, 0, 1);

  // Add the chest to the scene
  scene.add(chest);

  // Animate the map and chest by spinning them
  useFrame(() => {
    // Update the rotation of the map and chest
    mesh.rotation.x += 0.01;
    chest.rotation.y += 0.01;
  });

  return (
    <Canvas ref={containerRef}>
      <PerspectiveCamera
        ref={camera}
        aspect={width / height}
        near={0.1}
        far={1000}
      />
      {scene.children.map((object, index) => (
        <primitive object={object} key={index} />
      ))}
    </Canvas>
  );
};

export default Map;*/

/*import React from 'react';
import { Canvas } from 'react-three-fiber';
import { BoxBufferGeometry } from 'three';

const SpinningMap = () => {
  return (
    <Canvas>
      <mesh>
        <boxBufferGeometry attach='geometry' args={[10, 10, 10]} />
        <meshStandardMaterial attach='material' />
      </mesh>
    </Canvas>
  );
}

export default SpinningMap;*/

const Map = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Canvas>
      <mesh ref={meshRef}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
    </Canvas>
  );
};

export default Map;

/*import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { BoxBufferGeometry } from 'three';

const SpinningMap = () => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Canvas>
      <mesh ref={meshRef}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
    </Canvas>
  );
};*/
