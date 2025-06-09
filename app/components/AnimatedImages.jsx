"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        alt: "JavaScript",
        delay: 0.1,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        alt: "TypeScript",
        delay: 0.2,
      },
      { src: "https://skillicons.dev/icons?i=react", alt: "React", delay: 0.3 },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        alt: "Next.js",
        delay: 0.4,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        alt: "TailwindCSS",
        delay: 0.5,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        alt: "Bootstrap",
        delay: 0.6,
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        alt: "Node.js",
        delay: 0.7,
      },
      {
        src: "https://cdn.simpleicons.org/mysql/4479A1",
        alt: "MySQL",
        delay: 0.8,
      },
      {
        src: "https://cdn.simpleicons.org/postgresql/4169E1",
        alt: "PostgreSQL",
        delay: 0.9,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        alt: "MongoDB",
        delay: 1.0,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        alt: "Redis",
        delay: 1.1,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        alt: "GraphQL",
        delay: 1.2,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        alt: "Supabase",
        delay: 1.3,
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        alt: "Git",
        delay: 1.4,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        alt: "Docker",
        delay: 1.5,
      },
      {
        src: "https://skillicons.dev/icons?i=vercel",
        alt: "Vercel",
        delay: 1.6,
      },
      {
        src: "https://cdn.simpleicons.org/netlify/00C7B7",
        alt: "Netlify",
        delay: 1.7,
      },
      {
        src: "https://cdn.simpleicons.org/postman/FF6C37",
        alt: "Postman",
        delay: 1.8,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        alt: "Linux",
        delay: 1.9,
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        alt: "C",
        delay: 2.0,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        alt: "C++",
        delay: 2.1,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        alt: "Java",
        delay: 2.2,
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        alt: "Android",
        delay: 2.3,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Technical Skills
        </h2>
      </div>

      {/* Skills Categories */}
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="group"
          >
            {/* Category Title */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-white mb-2">
                {category.title}
              </h3>
              <div className="w-12 h-0.5 bg-white/60 mx-auto"></div>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {category.skills.map(({ src, alt, delay }) => (
                <motion.div
                  key={alt}
                  className="relative group/skill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay }}
                >
                  {/* Skill Container */}
                  <motion.div
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover/skill:bg-white/10 group-hover/skill:border-white/40 group-hover/skill:shadow-lg group-hover/skill:shadow-white/10"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Icon */}
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`${alt} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert opacity-80 group-hover/skill:opacity-100 transition-all duration-300"
                    />

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>

                    {/* Corner accent */}
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/30 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white text-black text-xs rounded-md opacity-0 group-hover/skill:opacity-100 transition-all duration-300 whitespace-nowrap z-10">
                    {alt}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative elements */}
      <div className="mt-16 flex items-center justify-center gap-6">
        <div className="w-16 h-px bg-white/20"></div>
        <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="w-16 h-px bg-white/20"></div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-white/60 text-sm">
          Always learning and exploring new technologies
        </p>
      </div>
    </section>
  );
}
