import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Blob = () => {
  // This reference will give us direct access to the mesh
  const meshRef: any = useRef();
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[3, 0]} />
      <meshLambertMaterial color={"gray"} />
    </mesh>
  );
};

export default Blob;
