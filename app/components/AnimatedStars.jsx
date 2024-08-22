"use client";
import { useRef, useEffect } from "react";
import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedStars() {
  const pointsRef = useRef();
  const mouse = useRef(new THREE.Vector2());

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Update the points on each frame
  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x +=
        (mouse.current.y * 0.1 - pointsRef.current.rotation.x) * 0.1;
      pointsRef.current.rotation.y +=
        (mouse.current.x * 0.1 - pointsRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={new Float32Array(1000)
        .fill()
        .map(() => Math.random() * 80 - 50)}
    >
      <PointMaterial
        attach="material"
        color="#ffffff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default AnimatedStars;
