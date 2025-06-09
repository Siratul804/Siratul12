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
    const xOffset = (x / rect.width) * 8 - 4;
    const yOffset = (y / rect.height) * 8 - 4;
    setTranslate({ x: xOffset, y: yOffset });
  };

  const handleMouseLeave = () => {
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <a
      target="_blank"
      href={link}
      className="block group transition-all duration-300"
      rel="noreferrer"
    >
      <div
        className="relative h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 overflow-hidden transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/40 hover:-translate-y-2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))`,
          transform: `translate(${translate.x}px, ${translate.y}px) translateY(0px)`,
        }}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
              {title}
            </h2>
            <div className="w-8 h-0.5 bg-white/60 group-hover:w-12 transition-all duration-300"></div>
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills &&
              skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-white/10 text-white/70 rounded-full border border-white/20 group-hover:bg-white/20 group-hover:text-white/90 transition-all duration-300"
                >
                  {skill.trim()}
                </span>
              ))}
          </div>

          {/* Link indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

        {/* Corner decoration */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-l border-t border-white/10 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </a>
  );
}
