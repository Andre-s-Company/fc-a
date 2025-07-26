import * as THREE from "three";
import gsap from "gsap";
import { useGLTF, useScroll } from "@react-three/drei";
import { useRef, type JSX } from "react";
import type { GLTF } from "three-stdlib";
import { useGSAP } from "@gsap/react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";

gsap.registerPlugin(useGSAP);

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

type GLTFResult = GLTF & {
  nodes: {
    experiencia: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export const Faro = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/models/isla-faro.glb"
  ) as unknown as GLTFResult;

  const { position, rotation } = useControls({
    position: { value: [0, 0, 0], step: 0.1 },
    rotation: { value: [0, 0, 0], step: 0.1 },
  });

  const faroRef = useRef<THREE.Group>(null!);
  const objectTimeline = useRef<gsap.core.Timeline>(null!);
  const scroll = useScroll();

  useFrame(() => {
    objectTimeline.current.progress(scroll.offset);
  });

  useGSAP(
    () => {
      const objTL = gsap.timeline();

      objectTimeline.current = objTL;

      // Nivel 1
      objTL.to(
        faroRef.current.position,
        {
          duration: 1,
          x: 2.4,
          y: 0.5,
          z: 1.7,
        },
        0
      );
      objTL.to(
        faroRef.current.rotation,
        {
          duration: 1,
          y: -0.9,
        },
        0
      );

      // Nivel 2
      objTL.to(
        faroRef.current.position,
        {
          duration: 1,
          x: 1.1,
          y: -1.5,
          z: 1.7,
        },
        1
      );
      objTL.to(
        faroRef.current.rotation,
        {
          duration: 1,
          y: 0,
        },
        1
      );

      // Nivel 3
      objTL.to(
        faroRef.current.position,
        {
          duration: 1,
          x: -0.5,
          y: -1.5,
          z: -0.5,
        },
        2
      );
      objTL.to(
        faroRef.current.rotation,
        {
          duration: 1,
          y: -0.7,
        },
        2
      );
    },
    { scope: faroRef }
  );

  return (
    <group
      ref={faroRef}
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.experiencia.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
};

useGLTF.preload("/models/isla-faro.glb");
