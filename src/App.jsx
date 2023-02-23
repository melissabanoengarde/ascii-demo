import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Loading from "./Loading";
import Header from "./Header";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <Header />

        <section className="ascii">
          <Canvas>
            <color attach="background" args={["white"]} />
            <Scene />
          </Canvas>
        </section>
      </main>
    </Suspense>
  );
};

export default App;
