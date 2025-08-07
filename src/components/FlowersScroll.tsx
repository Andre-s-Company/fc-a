import * as THREE from "three";
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { useRef, type JSX } from "react";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
import { useBackground } from "../store/useBackground";
import { Yellow1 } from "./models/Yellow1";
import { Yellow5 } from "./models/Yellow5";
import { Yellow4 } from "./models/Yellow4";
import { Yellow3 } from "./models/Yellow3";
import { Yellow2 } from "./models/Yellow2";

gsap.registerPlugin(useGSAP);

const FLOOR_HEIGHT = 16;
const NB_FLOORS = 7;

export const FlowersScroll = (props: JSX.IntrinsicElements["group"]) => {
  const setBackground = useBackground((state) => state.setBackground);

  const flowersScroll = useRef<THREE.Group>(null!);
  const objectTimeline = useRef<gsap.core.Timeline>(null!);
  const scroll = useScroll();

  const level1 = useRef<THREE.Group>(null!);
  const level2 = useRef<THREE.Group>(null!);
  const level3 = useRef<THREE.Group>(null!);
  const level4 = useRef<THREE.Group>(null!);
  const level5 = useRef<THREE.Group>(null!);
  const level6 = useRef<THREE.Group>(null!);
  const level7 = useRef<THREE.Group>(null!);

  useFrame(() => {
    objectTimeline.current.progress(scroll.offset);
  });

  useGSAP(
    () => {
      objectTimeline.current = gsap.timeline();

      // VERTICAL ANIMATION (Scroll de todos los niveles)
      objectTimeline.current.to(
        flowersScroll.current.position,
        {
          duration: 1,
          y: FLOOR_HEIGHT * (NB_FLOORS - 1),
          ease: "none",
        },
        0
      );

      // Colores por nivel
      const backgrounds = [
        "#fff9c4", // Nivel 1 - amarillo claro
        "#bbdefb", // Nivel 2 - azul claro
        "#e1bee7", // Nivel 3 - morado claro
        "#fffde7", // Nivel 4 - blanco/beige
        "#ffcdd2", // Nivel 5 - rojo claro
        "#f8bbd0", // Nivel 6 - rosa claro
        "#2196f3", // Nivel 7 - azul fuerte
      ];

      backgrounds.forEach((color, i) => {
        objectTimeline.current.to(
          {},
          {
            duration: 1 / NB_FLOORS,
            onStart: () => setBackground(color),
          },
          (1 / NB_FLOORS) * i
        );
      });
    },
    { scope: flowersScroll }
  );

  return (
    <group ref={flowersScroll} {...props} dispose={null}>
      <group ref={level1} position={[0, -FLOOR_HEIGHT * 0, 0]}>
        <Yellow1 />
        <Yellow2 />
        <Yellow3 />
        <Yellow4 />
        <Yellow5 />
      </group>
      <group ref={level2} position={[0, -FLOOR_HEIGHT * 1, 0]}>
        <Yellow1 />
      </group>
      <group ref={level3} position={[0, -FLOOR_HEIGHT * 2, 0]}>
        <Yellow1 />
      </group>
      <group ref={level4} position={[0, -FLOOR_HEIGHT * 3, 0]}>
        <Yellow1 />
      </group>
      <group ref={level5} position={[0, -FLOOR_HEIGHT * 4, 0]}>
        <Yellow1 />
      </group>
      <group ref={level6} position={[0, -FLOOR_HEIGHT * 5, 0]}>
        <Yellow1 />
      </group>
      <group ref={level7} position={[0, -FLOOR_HEIGHT * 6, 0]}>
        <Yellow1 />
      </group>
    </group>
  );
};
