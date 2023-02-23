import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  const torusRef = useRef();

  // useFrame((state, delta) => {
  //   torusRef.current.rotation.z += delta / 3;
  // });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[-1, 1, 1]} intensity={1} />

      <mesh scale={0.09} ref={torusRef} rotation={[0, 0.25, 0]}>
        <torusKnotGeometry args={[15, 1.2, 600, 12, 2, 18]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Scene;
