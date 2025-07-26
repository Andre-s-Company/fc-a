import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

function App() {
  return (
    <article className="w-full h-screen bg-blue-50">
      <Canvas
        className="r3f"
        camera={{
          fov: 75,
          position: [4, 1.5, 4],
        }}
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <Loader
        containerStyles={{
          backgroundColor: "#fce7f3",
          color: "black",
        }}
        dataStyles={{
          color: "black",
        }}
        barStyles={{
          backgroundColor: "#ad25be",
        }}
      />
    </article>
  );
}

export default App;
