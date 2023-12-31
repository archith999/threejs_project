import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { Group } from "three";

const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={80}
      alphaTest={0.25}
      scale={4}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={4}
        intensity={0.55}
        ambient={0.55}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.85}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
