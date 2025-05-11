import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import Cube from "@/app/components/Cube.tsx";
import Rings from "@/app/components/Rings.tsx";
import ReactLogo from "@/app/components/ReactLogo.tsx";
import Button from "@/app/components/Button.tsx";
import Target from "@/app/components/Target.tsx";
import CanvasLoader from "@/app/components/Loading.tsx";
import HeroCamera from "@/app/components/HeroCamera.tsx";
import { calculateSizes } from "@/app/constants/index.ts";
import { HackerRoom } from "@/app/components/HackerRoom.tsx";

import { firstName } from "@/app/constants/index.ts";

interface PositionProps {
  position: [number, number, number] | THREE.Vector3;
}

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Convert number arrays to THREE.Vector3 for all positions
  const deskPosition = new THREE.Vector3(...sizes.deskPosition);
  const targetPosition = new THREE.Vector3(...sizes.targetPosition);
  const reactLogoPosition = new THREE.Vector3(...sizes.reactLogoPosition);
  const ringPosition = new THREE.Vector3(...sizes.ringPosition);
  const cubePosition = new THREE.Vector3(...sizes.cubePosition);

  const targetPosArray = targetPosition.toArray();
  const reactLogoPosArray = reactLogoPosition.toArray();
  const ringPosArray = ringPosition.toArray();

  return (
    <section className="relative flex min-h-screen w-full flex-col" id="home">
      <div className="c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36">
        <p className="text-center font-generalsans text-xl font-medium text-white sm:text-3xl">
          Hi, I am {firstName} <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={targetPosArray} />
              <ReactLogo position={reactLogoPosArray} />
              <Rings position={ringPosArray} />
              <Cube position={cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="c-space absolute right-0 bottom-7 left-0 z-10 w-full">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
