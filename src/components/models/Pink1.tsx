import * as THREE from "three";
import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Flower002: THREE.Mesh;
  };
  materials: {
    Base_Material: THREE.MeshStandardMaterial;
  };
};

export function Pink1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/flores/rosa-1.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Flower002.geometry}
        material={materials.Base_Material}
      />
    </group>
  );
}

useGLTF.preload("/models/flores/rosa-1.glb");
