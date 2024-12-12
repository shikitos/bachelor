import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Mesh, MeshPhysicalMaterialParameters } from 'three';

export const SpinningCube = () => {
  const cubeRef = useRef<Mesh>(null);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const material: MeshPhysicalMaterialParameters = {
    color: 'white',
    thickness: 0.1,
    roughness: 0,
    envMapIntensity: 1,
    transmission: 0.9,
    metalness: 0.5,
    clearcoat: 1,
  };

  useFrame(() => {
    if (!cubeRef.current) return;
    cubeRef.current.rotation.x += rotationSpeed;
    cubeRef.current.rotation.y += rotationSpeed;
  });

  return (
    <mesh
      ref={cubeRef}
      scale={[1.5, 1.5, 1.5]}
      onClick={() => setRotationSpeed(rotationSpeed + 0.02)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial {...material} />
    </mesh>
  );
};
