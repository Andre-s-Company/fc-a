import * as THREE from "three";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { useRef, type JSX } from "react";
import type { GLTF } from "three-stdlib";
import { useGSAP } from "@gsap/react";

type GLTFResult = GLTF & {
  nodes: {
    experiencia: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

gsap.registerPlugin(useGSAP);

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 2;

export const Faro = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "/models/isla-faro.glb"
  ) as unknown as GLTFResult;

  const faroRef = useRef<THREE.Group>(null!);
  // const timeLine = useRef<gsap.core.Timeline>(null!);
  // const scroll = useScroll();

  // useFrame(() => {
  //   timeLine.current.progress(scroll.offset);
  // });

  // useGSAP(
  //   () => {
  //     timeLine.current = gsap.timeline();

  //     // Animación vertical
  //     timeLine.current.to(
  //       faroRef.current.position,
  //       {
  //         duration: 2,
  //         y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
  //       },
  //       0
  //     );
  //     timeLine.current.to(
  //       faroRef.current.rotation,
  //       {
  //         duration: 2,
  //         y: -FLOOR_HEIGHT * (NB_FLOORS - 1) * 2,
  //       },
  //       0
  //     );
  //   },
  //   { scope: faroRef }
  // );

  return (
    <group
      ref={faroRef}
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.experiencia.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
};

useGLTF.preload("/models/isla-faro.glb");
