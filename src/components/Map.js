// import { OrbitControls } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { BoxBufferGeometry } from "three";

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

const Map = () => {
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
  <Canvas>
    <Map />
  </Canvas>;
};

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
