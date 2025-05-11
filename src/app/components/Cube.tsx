import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { JSX, useRef, useState } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";

interface CubeNodes {
  Cube: {
    geometry: THREE.BufferGeometry;
    material: THREE.Material;
  };
}

const Cube = ({ ...props }: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("models/cube.glb") as unknown as {
    nodes: CubeNodes;
  };

  const texture = useTexture("textures/cube.png");

  const cubeRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    if (!cubeRef.current) return;

    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          onPointerEnter={() => setHovered(true)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");

export default Cube;
