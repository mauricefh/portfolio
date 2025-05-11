import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "@/app/components/Developer.tsx";
import CanvasLoader from "@/app/components/Loading.tsx";
import { workExperiences } from "@/app/constants/index.ts";

type AnimationName = "idle" | "salute" | "clapping" | "victory";

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState<AnimationName>("idle");
  const handleAnimationChange = (name: string) => {
    const validAnimations: AnimationName[] = [
      "idle",
      "salute",
      "clapping",
      "victory",
    ];
    if (validAnimations.includes(name as AnimationName)) {
      setAnimationName(name as AnimationName);
    } else {
      setAnimationName("idle");
    }
  };

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleAnimationChange(item.animation.toLowerCase())
                  }
                  onPointerOver={() =>
                    handleAnimationChange(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex h-full flex-col items-center justify-start py-2">
                    <div className="work-content_logo">
                      <img className="h-full w-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="px-2.5 py-5 sm:p-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="mb-5 text-sm">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    {item.bullets && (
                      <ul className="transition-all duration-500 ease-in-out group-hover:text-white">
                        {item.bullets.map((x) => (
                          <li key={x.title}>{x.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
