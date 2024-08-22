"use client";

import { useState } from "react";

export default function ProjectCard({ title, description, skills, link }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Calculate translation values based on mouse position
    const xOffset = (x / rect.width) * 10 - 5; // Adjust the multiplier for desired effect
    const yOffset = (y / rect.height) * 10 - 5; // Adjust the multiplier for desired effect
    setTranslate({ x: xOffset, y: yOffset });
  };

  return (
    <>
      <a target="_blank" href={link}>
        <div
          className="w-[50vh] p-[2rem] h-[25vh] border border-solid border-[#71717A] rounded-xl relative overflow-hidden transition-transform duration-300 ease-in-out"
          onMouseMove={handleMouseMove}
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.10), transparent)`,
            transform: `translate(${translate.x}px, ${translate.y}px)`,
          }}
        >
          <div className="content">
            <h2 className="text-[#71717A] text-sm font-bold pb-2 ">{title}</h2>
            <p className="text-[#71717A] text-sm">{description}</p>
            <div className="text-[12px] pt-5 flex ">
              <p>{skills}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
