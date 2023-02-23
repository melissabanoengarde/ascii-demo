import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Ascii from "./Ascii";

const Scene = ({ clicked }) => {
  const torusRef = useRef();

  useFrame((state, delta) => {
    torusRef.current.rotation.y = torusRef.current.rotation.z += delta / 2;
  });

  return (
    <>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[-1, 1, 1]} intensity={8} penumbra={1} />

      {/* <mesh
        scale={0.05}
        // scale={0.09}
        ref={torusRef}
        rotation={[0, 0.25, 0]}
        position={[0, 0, -1]}
      >
        <torusKnotGeometry args={[15, 3, 600, 12, 2, 18]} />
        <meshStandardMaterial color="red" />
        <Ascii
          // characters=" -*_"
          characters={clicked ? " -@.n̷̛̻̲̤͙͎͍̰̟̓̑͗͌̑̕̕͠.̴̻̺̗͇͎̻͔͓̂@" : "2++_*-=~:48_* "}
          textColor={clicked ? "red" : "lightgray"}
        />
      </mesh> */}

      <mesh
        scale={clicked ? 0.15 : 0.09}
        // scale={0.09}
        ref={torusRef}
        rotation={[0, 0.25, 0]}
        position={[0, 0, 1]}
      >
        <torusKnotGeometry args={[15, 3, 600, 12, 2, 18]} />
        <meshStandardMaterial color="red" />
        <Ascii
          // characters=" -*_"
          characters={clicked ? " -@.n̷̛̻̲̤͙͎͍̰̟̓̑͗͌̑̕̕͠.̴̻̺̗͇͎̻͔͓̂@" : "2++_*-=~:48_* "}
          textColor={clicked ? "red" : "gray"}
        />
      </mesh>
    </>
  );
};

export default Scene;
