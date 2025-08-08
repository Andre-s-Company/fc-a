import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Leva } from "leva";
import { useBackground } from "./store/useBackground";
import { cn } from "./shared/utils";

function App() {
  const background = useBackground((state) => state.background);

  return (
    <article
      className={cn("w-full h-screen transition-colors duration-300")}
      style={{ backgroundColor: background }}
    >
      {/* <Menu /> */}
      <Leva collapsed/>
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
          backgroundColor: "#fffde4", // yellow-200
          color: "black",
        }}
        dataStyles={{
          color: "black",
        }}
        barStyles={{
          backgroundColor: "#d39100", // yellow-600
        }}
      />
    </article>
  );
}

export default App;
