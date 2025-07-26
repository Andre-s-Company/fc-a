import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Leva } from "leva";

function App() {
  return (
    <article className="w-full h-screen bg-blue-200">
      <Leva hidden />
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
        backgroundColor: "#bfdbfe", // blue-200
        color: "black",
      }}
      dataStyles={{
        color: "black",
      }}
      barStyles={{
        backgroundColor: "#2563eb", // blue-600
      }}
      />
    </article>
  );
}

export default App;
