import React from "react";
import * as THREE from "three";

import vertex from "./shaders/vertex";
import fragment from "./shaders/fragment";
import { uniform } from "three/examples/jsm/nodes/Nodes.js";
import { useFrame } from "@react-three/fiber";

type Props = {
  frequency: number;
  primaryColor: THREE.Color;
  secondaryColor: THREE.Color;
};

export default function PulsingBubble({
  frequency,
  primaryColor,
  secondaryColor,
}: Props) {
  const shaderRef = React.useRef<THREE.ShaderMaterial>(null!);

  const uniforms = React.useRef({
    uTime: { value: 0 },
    uFrequency: { value: frequency },
    uPrimaryColor: { value: primaryColor },
    uSecondaryColor: { value: secondaryColor },
  });
  React.useEffect(() => {
    shaderRef.current.uniforms.uPrimaryColor.value = primaryColor;
  }, [primaryColor]);

  React.useEffect(() => {
    shaderRef.current.uniforms.uSecondaryColor.value = secondaryColor;
  }, [secondaryColor]);

  useFrame((state, delta) => {
    if (!shaderRef.current) return;
    shaderRef.current.uniforms.uTime.value += delta * 0.3;
    shaderRef.current.uniforms.uFrequency.value = frequency;
  });

  return (
    <mesh>
      <sphereGeometry args={[2, 1024, 512]} />

      {/* <meshBasicMaterial /> */}
      <shaderMaterial
        ref={shaderRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms.current}
      />
    </mesh>
  );
}
