import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Ascii from "./Ascii";

const Scene = () => {
  const torusRef = useRef();

  useFrame((state, delta) => {
    torusRef.current.rotation.y = torusRef.current.rotation.z += delta / 2;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[-1, 1, 1]} intensity={1} />

      <mesh scale={0.09} ref={torusRef} rotation={[0, 0.25, 0]}>
        <torusKnotGeometry args={[15, 3, 600, 12, 2, 18]} />
        <meshStandardMaterial color="red" />
        <Ascii />
      </mesh>
    </>
  );
};

export default Scene;
