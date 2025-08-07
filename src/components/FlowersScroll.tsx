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
import { SkyBlue1 } from "./models/SkyBlue1";
import { SkyBlue2 } from "./models/SkyBlue2";
import { SkyBlue3 } from "./models/SkyBlue3";
import { SkyBlue4 } from "./models/SkyBlue4";
import { Blue1 } from "./models/Blue1";
import { White1 } from "./models/White1";
import { White2 } from "./models/White2";
import { White3 } from "./models/White3";
import { Purple1 } from "./models/Purple1";
import { Red1 } from "./models/Red1";
import { Red2 } from "./models/Red2";
import { Red3 } from "./models/Red3";
import { Pink1 } from "./models/Pink1";
import { Pink2 } from "./models/Pink2";

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
        "#fffde4", // Nivel 1 - amarillo más claro
        "#e3f2fd", // Nivel 2 - azul más claro
        "#f3e5f5", // Nivel 3 - morado más claro
        "#ffffff", // Nivel 4 - blanco puro
        "#ffeaea", // Nivel 5 - rojo más claro
        "#fde4ec", // Nivel 6 - rosa más claro
        "#bbdfff", // Nivel 7 - azul fuerte pero claro
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
        <SkyBlue1 />
        <SkyBlue2 />
        <SkyBlue3 />
        <SkyBlue4 />
      </group>
      <group ref={level3} position={[0, -FLOOR_HEIGHT * 2, 0]}>
        <Purple1 />
      </group>
      <group ref={level4} position={[0, -FLOOR_HEIGHT * 3, 0]}>
        <White1 />
        <White2 />
        <White3 scale={0.03} />
      </group>
      <group ref={level5} position={[0, -FLOOR_HEIGHT * 4, 0]}>
        <Red1 scale={0.2} />
        <Red2 />
        <Red3 />
      </group>
      <group ref={level6} position={[0, -FLOOR_HEIGHT * 5, 0]}>
        <Pink1 />
        <Pink2 />
      </group>
      <group ref={level7} position={[0, -FLOOR_HEIGHT * 6, 0]}>
        <Blue1 />
      </group>
    </group>
  );
};
