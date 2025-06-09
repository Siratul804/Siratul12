"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/Siratul804",
      delay: 0.1,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/siratulislam/",
      delay: 0.2,
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={24} />,
      url: "https://x.com/Siratul074",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
          Connect With Me
        </h2>
        <div className="w-20 h-0.5 bg-white mx-auto"></div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-8 sm:gap-12 md:gap-16">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: social.delay }}
            className="group"
          >
            <Link
              href={social.url}
              target="_blank"
              aria-label={`Visit my ${social.name} profile`}
            >
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/60 transition-all duration-300 group-hover:scale-150 opacity-70"></div>

                {/* Middle ring */}
                <div className="absolute inset-0 scale-[1.2] rounded-full border border-white/10 group-hover:border-white/40 transition-all duration-500 group-hover:scale-125 opacity-50"></div>

                {/* Icon container */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/40"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon */}
                  <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </motion.div>

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  <span className="text-white/70 text-sm font-medium">
                    {social.name}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="mt-20 flex items-center justify-center gap-6">
        <div className="w-16 h-px bg-white/20"></div>
        <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="w-16 h-px bg-white/20"></div>
      </div>

      {/* Footer text */}
      <div className="mt-8 text-center">
        <p className="text-white/60 text-sm">
          Let's collaborate on something amazing
        </p>
      </div>
    </section>
  );
}

export default Contact;
