"use client";

import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import PulsingBubble from "@/components/meshes/PulsingBubble";

export default function MainScene() {
  const [freq, setFreq] = React.useState(1.2);
  const [primaryColor, setPrimaryColor] = React.useState(
    new THREE.Color(0.1859, 0.0, 0.453)
  );
  const [secondaryColor, setSecondaryColor] = React.useState(
    new THREE.Color(0.6576, 0.456, 0.7865)
  );
  return (
    <div className="w-full h-full grid grid-cols-2 border border-black">
      <Canvas className="border-black border-r">
        <PulsingBubble
          frequency={freq}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </Canvas>
      <div className="grid grid-cols-2 grid-rows-3">
        <div className="row-span-2 col-span-3 border-black border-b p-4">
          <h3 className="text-6xl font-extrabold mb-6">Pulsing bubble</h3>
          <p>
            This is an experimentation on a sphere geometry applying shaders to
            achieve pulsing blob of various frequensy. Mainly Perlin Noise
            inside the vertex shader does the trick.
          </p>
        </div>
        <div className="grid grid-rows-3 border-black border-r">
          <div className="grid grid-cols-4 gap-4 p-4 border-black border-b">
            <h3 className="font-bold col-span-2 ">Frequency</h3>
            <input
              type="range"
              className="col-span-2"
              step={0.1}
              min={0}
              max={20}
              value={freq}
              onChange={(e) => {
                setFreq(Number(e.target.value));
              }}
            />
          </div>
          <div className="grid grid-cols-4 gap-4 p-4 border-black border-b">
            <h3 className="font-bold col-span-2 ">Primary</h3>
            <input
              type="color"
              className="col-span-2 w-full"
              value={"#" + primaryColor.getHexString()}
              onChange={(e) => {
                setPrimaryColor(new THREE.Color(e.target.value));
              }}
            />
          </div>
          <div className="grid grid-cols-4 gap-4 p-4">
            <h3 className="font-bold col-span-2 ">Primary</h3>
            <input
              type="color"
              className="col-span-2 w-full"
              value={"#" + secondaryColor.getHexString()}
              onChange={(e) => {
                setSecondaryColor(new THREE.Color(e.target.value));
              }}
            />
          </div>
        </div>
        <div className="decorator" />
      </div>
    </div>
  );
}
