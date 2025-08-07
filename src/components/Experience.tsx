import { ScrollControls } from "@react-three/drei";
import { FlowersScroll } from "./FlowersScroll";
// import { Overlay } from "./Overlay";

export const Experience = () => {

  return (
    <>
      <ambientLight intensity={2.5} />
      <ScrollControls  pages={7} damping={0.25}>
        <FlowersScroll />
        {/* <Overlay /> */}
      </ScrollControls>
    </>
  );
};
