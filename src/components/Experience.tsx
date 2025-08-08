import { ScrollControls } from "@react-three/drei";
import { FlowersScroll } from "./FlowersScroll";
// import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={2.5} />
      <directionalLight intensity={2.5} position={[0, 1, 1]} />
      <ScrollControls pages={7} damping={0.25}>
        <FlowersScroll />
        {/* <Overlay /> */}
      </ScrollControls>
    </>
  );
};
