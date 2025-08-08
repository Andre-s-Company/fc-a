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
import { useControls } from "leva";

gsap.registerPlugin(useGSAP);

const FLOOR_HEIGHT = 16;
const NB_FLOORS = 7;

interface FlowerProps {
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
}

export const FlowersScroll = (props: JSX.IntrinsicElements["group"]) => {
  const setBackground = useBackground((state) => state.setBackground);

  // Referencias para el scroll
  const flowersScroll = useRef<THREE.Group>(null!);
  const objectTimeline = useRef<gsap.core.Timeline>(null!);
  const scroll = useScroll();

  // Referencias para cada nivel
  const level1 = useRef<THREE.Group>(null!);
  const level2 = useRef<THREE.Group>(null!);
  const level3 = useRef<THREE.Group>(null!);
  const level4 = useRef<THREE.Group>(null!);
  const level5 = useRef<THREE.Group>(null!);
  const level6 = useRef<THREE.Group>(null!);
  const level7 = useRef<THREE.Group>(null!);

  // Referencias para cada flor
  const yellow1Ref = useRef<THREE.Group>(null!);
  const yellow2Ref = useRef<THREE.Group>(null!);
  const yellow3Ref = useRef<THREE.Group>(null!);
  const yellow4Ref = useRef<THREE.Group>(null!);
  const yellow5Ref = useRef<THREE.Group>(null!);
  const yellow6Ref = useRef<THREE.Group>(null!);

  const skyBlue1Ref = useRef<THREE.Group>(null!);
  const skyBlue2Ref = useRef<THREE.Group>(null!);
  const skyBlue3Ref = useRef<THREE.Group>(null!);
  const skyBlue4Ref = useRef<THREE.Group>(null!);

  const purple1Ref = useRef<THREE.Group>(null!);

  const white1Ref = useRef<THREE.Group>(null!);
  const white2Ref = useRef<THREE.Group>(null!);
  const white3Ref = useRef<THREE.Group>(null!);

  const red1Ref = useRef<THREE.Group>(null!);
  const red2Ref = useRef<THREE.Group>(null!);
  const red3Ref = useRef<THREE.Group>(null!);

  const pink1Ref = useRef<THREE.Group>(null!);
  const pink2Ref = useRef<THREE.Group>(null!);
  const pink3Ref = useRef<THREE.Group>(null!);

  const blue1Ref = useRef<THREE.Group>(null!);

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

  // Flores Amarillas
  const yellow1Props: FlowerProps = {
    position: [-3, -6, 0],
    scale: 5.5,
    rotation: [0, -0.4, 0],
  };
  const yellow2Props: FlowerProps = {
    position: [0, -7.7, -4.5],
    scale: 6,
    rotation: [0, -2.2, 0],
  };
  const yellow3Props: FlowerProps = {
    position: [-15, -8, -6],
    scale: 5,
    rotation: [0, 0.9, 0],
  };
  const yellow4Props: FlowerProps = {
    position: [-2.6, -9.4, -9.5],
    scale: 5.2,
    rotation: [0, 0, 0],
  };
  const yellow5Props: FlowerProps = {
    position: [-0.5, -3, 3],
    scale: 1.8,
    rotation: [-0.5, 1.6, 0],
  };
  const yellow6Props: FlowerProps = {
    position: [2.5, -3.3, 0],
    scale: 0.5,
    rotation: [0.9, 0.3, -12.0],
  };

  // Flores Azules Cielo
  const skyBlue1Props: FlowerProps = {
    position: [1.6, 2.9, 0],
    scale: 7,
    rotation: [2.4, 0.2, 0.1],
  };
  const skyBlue2Props: FlowerProps = {
    position: [0, -2, 0],
    scale: 11.5,
    rotation: [0, -1.1, 0],
  };
  const skyBlue3Props: FlowerProps = {
    position: [3.0, -1.0, 2.5],
    scale: 0.5,
    rotation: [0, 1.5, 0],
  };
  const skyBlue4Props: FlowerProps = {
    position: [-3.4, 3.7, 0],
    scale: 1,
    rotation: [0.6, -0.2, -8.2],
  };

  // Flores Moradas
  const purple1Props: FlowerProps = {
    position: [0, 0, 2.0],
    scale: 3,
    rotation: [0, 0, 0],
  };

  // Flores Blancas
  const white1Props: FlowerProps = {
    position: [-2.6, -2.2, 1.0],
    scale: 10,
    rotation: [0, 1.0, 0],
  };
  const white2Props: FlowerProps = {
    position: [1.8, -2.5, -1.0],
    scale: 2.5,
    rotation: [0, -1.0, 0],
  };
  const white3Props: FlowerProps = {
    position: [2.7, 0.1, 3.3],
    scale: 0.02,
    rotation: [0, -0.5, 0],
  };

  // Flores Rojas
  const red1Props: FlowerProps = {
    position: [1.8, -2.5, 1],
    scale: 0.3,
    rotation: [0, 0, 0],
  };

  const red2Props: FlowerProps = {
    position: [-0.2, -3.5, 1.8],
    scale: 2.2,
    rotation: [0, 0.5, 0],
  };

  const red3Props: FlowerProps = {
    position: [2.0, -2.0, -2.0],
    scale: 5.2,
    rotation: [0.2, -2.4, -0.2],
  };

  // Flores Rosas
  const pink1Props: FlowerProps = {
    position: [-2, -3, -2],
    scale: 2,
    rotation: [0, 0.3, 0],
  };

  const pink2Props: FlowerProps = {
    position: [-1.5, -3, 0],
    scale: 1,
    rotation: [0, 0, 0],
  };

  const pink3Props: FlowerProps = {
    position: [-0.5, -3, -1.5],
    scale: 0.7,
    rotation: [0, 1.2, 0],
  };

  // Flores Azules
  const blue1Props = useControls("blue1", {
    position: { value: [0, -0.5, 0], step: 0.1 },
    scale: { value: 7, min: 0, max: 50, step: 0.1 },
    rotation: { value: [0, 0, 0], step: 0.1 },
  });

  return (
    <group ref={flowersScroll} {...props} dispose={null}>
      <group ref={level1} position={[0, -FLOOR_HEIGHT * 0, 0]}>
        <Yellow1 ref={yellow1Ref} {...yellow1Props} />
        <Yellow2 ref={yellow2Ref} {...yellow2Props} />
        <Yellow3 ref={yellow3Ref} {...yellow3Props} />
        <Yellow4 ref={yellow4Ref} {...yellow4Props} />
        <Yellow5 ref={yellow5Ref} {...yellow5Props} />
        <Yellow5 ref={yellow6Ref} {...yellow6Props} />
      </group>

      <group ref={level2} position={[0, -FLOOR_HEIGHT * 1, 0]}>
        <SkyBlue1 ref={skyBlue1Ref} {...skyBlue1Props} />
        <SkyBlue2 ref={skyBlue2Ref} {...skyBlue2Props} />
        <SkyBlue3 ref={skyBlue3Ref} {...skyBlue3Props} />
        <SkyBlue4 ref={skyBlue4Ref} {...skyBlue4Props} />
      </group>

      <group ref={level3} position={[0, -FLOOR_HEIGHT * 2, 0]}>
        <Purple1 ref={purple1Ref} {...purple1Props} />
      </group>

      <group ref={level4} position={[0, -FLOOR_HEIGHT * 3, 0]}>
        <White1 ref={white1Ref} {...white1Props} />
        <White2 ref={white2Ref} {...white2Props} />
        <White3 ref={white3Ref} {...white3Props} />
      </group>

      <group ref={level5} position={[0, -FLOOR_HEIGHT * 4, 0]}>
        <Red1 ref={red1Ref} {...red1Props} />
        <Red2 ref={red2Ref} {...red2Props} />
        <Red3 ref={red3Ref} {...red3Props} />
      </group>

      <group ref={level6} position={[0, -FLOOR_HEIGHT * 5, 0]}>
        <Pink1 ref={pink1Ref} {...pink1Props} />
        <Pink2 ref={pink2Ref} {...pink2Props} />
        <Pink2 ref={pink3Ref} {...pink3Props} />
      </group>

      <group ref={level7} position={[0, -FLOOR_HEIGHT * 6, 0]}>
        <Blue1 ref={blue1Ref} {...blue1Props} />
      </group>
    </group>
  );
};
