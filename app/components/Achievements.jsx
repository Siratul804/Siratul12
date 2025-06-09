"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    position: "Champion",
    event: "Software Showcase",
    organization: "UAP SNH Club – INNOVATEX 2025",
    date: "May 2025",
    icon: "🥇",
    rank: 1,
    delay: 0.1,
  },
  {
    position: "1st Runners-Up",
    event: "Hackathon",
    organization: "UAP SNH Club – INNOVATEX 2025",
    date: "May 2025",
    icon: "🥈",
    rank: 2,
    delay: 0.2,
  },
  {
    position: "1st Runners-Up",
    event: "Ideathon",
    organization: "UAP ECDC Club – IDEA Season 4.0",
    date: "May 2025",
    icon: "🥈",
    rank: 2,
    delay: 0.3,
  },
  {
    position: "4th Place",
    event: "Hackathon",
    organization: "MIST Innovation Club – NEOFETCH Hackathon",
    date: "March 2025",
    icon: "🎖️",
    rank: 4,
    delay: 0.4,
  },
];

export default function Achievements() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Achievements
        </h2>
        <div className="w-20 h-0.5 bg-white mx-auto mb-4"></div>
        <p className="text-white/70 text-lg">
          Recognition in competitions and showcases
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: achievement.delay }}
            className="group"
          >
            <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:transform hover:-translate-y-2">
              {/* Rank indicator */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center z-10">
                <span className="text-black text-sm font-bold">
                  #{achievement.rank}
                </span>
              </div>

              {/* Icon and Position */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{achievement.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {achievement.position}
                  </h3>
                  <div className="w-12 h-0.5 bg-white/60"></div>
                </div>
              </div>

              {/* Event Details */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white/90 mb-2">
                  {achievement.event}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {achievement.organization}
                </p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <span className="text-sm font-medium">{achievement.date}</span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-white/60 text-sm">Championships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-white/60 text-sm">Runner-ups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-white/60 text-sm">Total Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-white/60 text-sm">Organizations</div>
          </div>
        </div>
      </motion.div>

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
            COMPETING IN MORE EVENTS
          </span>
        </div>
      </div>
    </section>
  );
}
