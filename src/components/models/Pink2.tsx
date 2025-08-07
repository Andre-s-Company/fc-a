import * as THREE from "three";
import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Flower019: THREE.Mesh;
  };
  materials: {
    Base_Material: THREE.MeshStandardMaterial;
  };
};

export function Pink2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/flores/rosa-2.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Flower019.geometry}
        material={materials.Base_Material}
      />
    </group>
  );
}

useGLTF.preload("/models/flores/rosa-2.glb");
