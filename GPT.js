// import { OrbitControls } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

/*const Map = () => {
  const meshRef = useRef();
  const [time, setTime] = useState(0);

  // Use requestAnimationFrame to update the time value in an animation loop
  React.useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setTime((prevTime) => prevTime + 0.01);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  // Update the mesh's rotation based on the time value
  React.useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = time;
      meshRef.current.rotation.y = time;
    }
  }, [time, meshRef]);

  return (
    <Canvas>
      <mesh ref={meshRef}>
        <BoxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
    </Canvas>
  );
};

export default Map;*/

/*const Map = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      // rotates the object
      console.log("useFrame() called");
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <BoxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="red" />
    </mesh>
  );
};

export default () => {
  return (
    <Canvas>
      <Map />
    </Canvas>
  );
};*/

/*const Map = () => {
  const meshRef = useRef();

  useFrame(() => {
    console.log("useFrame() called");
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <Canvas>
      <mesh ref={meshRef}>
        <BoxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial attach="material" color="red" />
      </mesh>
    </Canvas>
  );
};

export default Map;*/

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

/*import { BoxGeometry } from "three";

const SpinningMap = () => {
  const containerRef = useRef();

  const geometry = new BoxGeometry(5, 5, 0.1);

  return (
    <div ref={containerRef}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh position={[0, 0, 0]} args={geometry}>
          <meshBasicMaterial attach="material" color="#d2b48c" />
        </mesh>
        <mesh position={[5, 0, 0]} args={geometry}>
          <meshBasicMaterial attach="material" color="#d2b48c" />
        </mesh>
        <mesh position={[0, -5, 0]} args={geometry}>
          <meshBasicMaterial attach="material" color="#d2b48c" />
        </mesh>
        <mesh position={[5, -5, 0]} args={geometry}>
          <meshBasicMaterial attach="material" color="#d2b48c" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default SpinningMap;*/

class SpinningMap extends React.Component {
  componentDidMount() {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera and set its position
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    // Create a new Three.js renderer and set its size
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      transparent: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add the renderer to the page
    this.refs.container.appendChild(renderer.domElement);

    // Create a new Three.js map geometry and add it to the scene
    const mapGeometry1 = new THREE.BoxBufferGeometry(5, 5, 0.1);
    const mapGeometry2 = new THREE.BoxBufferGeometry(5, 5, 0.1);
    const mapGeometry3 = new THREE.BoxBufferGeometry(5, 5, 0.1);
    const mapGeometry4 = new THREE.BoxBufferGeometry(5, 5, 0.1);
    const singleMap = new THREE.Group();

    const mapMaterial = new THREE.MeshBasicMaterial({
      color: 0xd2b48c,
      side: THREE.DoubleSide,
    });
    const map1 = new THREE.Mesh(mapGeometry1, mapMaterial);
    const map2 = new THREE.Mesh(mapGeometry2, mapMaterial);
    const map3 = new THREE.Mesh(mapGeometry3, mapMaterial);
    const map4 = new THREE.Mesh(mapGeometry4, mapMaterial);

    map1.position.set(0, 0, 0);
    map2.position.set(5, 0, 0);
    map3.position.set(0, -5, 0);
    map4.position.set(5, -5, 0);

    singleMap.add(map1);
    singleMap.add(map2);
    singleMap.add(map3);
    singleMap.add(map4);

    singleMap.position.set(0, 0, 0);

    scene.add(singleMap);
    /*scene.remove(map1);
    scene.remove(map2);
    scene.remove(map3);
    scene.remove(map4);*/

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);

      singleMap.rotation.x += 0.01;
      singleMap.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    /*const animate = () => {
      requestAnimationFrame(animate);

      map1.rotation.x += 0.01;
      map1.rotation.y += 0.01;
      map2.rotation.x += 0.01;
      map2.rotation.y += 0.01;
      map3.rotation.x += 0.01;
      map3.rotation.y += 0.01;
      map4.rotation.x += 0.01;
      map4.rotation.y += 0.01;

      renderer.render(scene, camera);
    };*/
    animate();
  }

  render() {
    return <div ref="container" />;
  }
}

export default SpinningMap;
