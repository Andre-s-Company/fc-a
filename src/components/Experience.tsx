import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Faro } from "./Faro";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={3.5} />
      <ScrollControls pages={3} damping={0.251}>
        <Faro />
      </ScrollControls>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} enablePan={false}/>
    </>
  );
};
