import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion as m } from "framer-motion";
import Scene from "./Scene";
import Loading from "./Loading";
import Header from "./Header";

const App = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<Loading />}>
        <main>
          <Header />

          <m.section
            className="ascii"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Canvas>
              <color attach="background" args={["white"]} />
              <Scene />
            </Canvas>
          </m.section>
        </main>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;
