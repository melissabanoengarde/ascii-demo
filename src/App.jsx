import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence, motion as m } from "framer-motion";
import Scene from "./Scene";
import Loading from "./Loading";
import Header from "./Header";

const App = () => {
  const [clicked, click] = useState(false);

  return (
    <AnimatePresence>
      <Suspense fallback={<Loading />}>
        <div className="mobile">For now, this page is desktop only</div>
        <main>
          <Header clicked={clicked} />

          <m.section
            className="ascii"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5 }}
          >
            <Canvas onClick={() => click(!clicked)}>
              <color attach="background" args={["white"]} />
              <Scene clicked={clicked} />
            </Canvas>
          </m.section>
        </main>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;
