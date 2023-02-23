import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const App = () => {
  return (
    <main>
      <header className="header">
        <h1>ASCII demo</h1>
      </header>

      <section className="ascii">
        <Canvas>
          <Scene />
        </Canvas>
      </section>
    </main>
  );
};

export default App;
