"use client";

import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "Grit System",
      position: "Full Stack Developer",
      duration: "Dec 2023 - Jul 2025",
      location: "Hybrid",
      current: false,
      delay: 0.1,
    },
    {
      company: "Seed to Big",
      position: "Web Developer",
      duration: "Oct 2020 - Feb 2022",
      location: "Remote",
      current: false,
      delay: 0.2,
    },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Experience
        </h2>
        <div className="w-20 h-0.5 bg-white mx-auto mb-4"></div>
        <p className="text-white/70 text-lg">
          Professional journey and career milestones
        </p>
      </div>

      {/* Side by side layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: exp.delay }}
            className="group"
          >
            {/* Card */}
            <div className="relative h-full">
              {/* Current position indicator */}
              {exp.current && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              )}

              <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:transform hover:-translate-y-2">
                {/* Company name */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.company}
                  </h3>
                  <div className="w-12 h-0.5 bg-white/60"></div>
                </div>

                {/* Position */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white/90 mb-2">
                    {exp.position}
                  </h4>
                  {exp.current && (
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-white text-black rounded-full">
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-4 text-white/70 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-sm font-medium">{exp.location}</span>
                  </div>
                </div>

                {/* Additional spacing for consistent height */}
                <div className="min-h-[60px] flex items-end">
                  <div className="text-white/60 text-sm">
                    {exp.current
                      ? "Currently contributing to innovative projects"
                      : "Delivered successful web solutions"}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Corner decoration */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center my-16">
        <div className="flex-1 h-px bg-white/20"></div>
        <div className="px-6">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
        <div className="flex-1 h-px bg-white/20"></div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-white/80 text-sm font-medium tracking-wide">
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-white/5 rounded-full"></div>
      </div>
    </section>
  );
}

export default Experience;
