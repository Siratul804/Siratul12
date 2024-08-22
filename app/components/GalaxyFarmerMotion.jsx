"use client";
import { Canvas } from "@react-three/fiber";
import AnimatedStars from "./AnimatedStars";

function GalaxyFarmerMotion() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <color attach="background" args={["#000000"]} />
      <AnimatedStars />
    </Canvas>
  );
}

export default GalaxyFarmerMotion;
