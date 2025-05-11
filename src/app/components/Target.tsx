import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

interface TargetProps {
  position?: THREE.Vector3 | [number, number, number];
}

type GLTFResult = GLTF & {
  scene: THREE.Object3D;
};

const Target = (props: TargetProps) => {
  const targetRef = useRef<THREE.Mesh>(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf",
  ) as GLTFResult;

  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
