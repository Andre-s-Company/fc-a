import { Suspense, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Leva } from "leva";
import { useBackground } from "./store/useBackground";
import { cn } from "./shared/utils";
import { Counter } from "./components/Counter";

const targetDate = new Date("2025-08-19T00:01:00");

function getTimeRemaining() {
  const now = new Date();
  const total = targetDate.getTime() - now.getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function App() {
  const background = useBackground((state) => state.background);
  const [time, setTime] = useState(getTimeRemaining());
  const [isExperienceAvailable, setIsExperienceAvailable] = useState(false);

  useEffect(() => {

    if (isExperienceAvailable) return;

    const timer = setInterval(() => {
      setTime(getTimeRemaining());
    }, 1000);

    if (time.total <= 0) {
      setIsExperienceAvailable(true);
    }
    return () => clearInterval(timer);
  }, [time, isExperienceAvailable]);

  return (
    <article
      className={cn("w-full h-screen transition-colors duration-300")}
      style={{ backgroundColor: background }}
    >
      {/* <Menu /> */}
      <Leva collapsed hidden/>
      {isExperienceAvailable ? (
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
      ) : (
        <>
          <Counter time={time} />
        </>
      )}
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
