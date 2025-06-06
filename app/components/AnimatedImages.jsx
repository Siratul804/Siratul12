"use client";
import { motion } from "framer-motion";

function AnimatedImages() {
  return (
    <>
      <div className="text-[#71717A] font-bold text-2xl text-center py-5  ">
        Skills
      </div>

      <div className=" p-2">
        {" "}
        {/* Adjust space-x-4 for padding between items */}
        <div className="flex justify-center p-4 lg:space-x-4 md:space-x-4 space-x-2 ">
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            height="32"
            width="32"
            alt="javascript logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            height="32"
            width="32"
            alt="typescript logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            height="32"
            width="32"
            alt="nextjs logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img
            src="https://skillicons.dev/icons?i=react"
            height="32"
            width="32"
            alt="react logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            height="32"
            width="32"
            alt="nodejs logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
          <motion.img
            src="https://cdn.simpleicons.org/mysql/4479A1"
            height="32"
            width="32"
            alt="mysql logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.img
            src="https://cdn.simpleicons.org/postgresql/4169E1"
            height="32"
            width="32"
            alt="postgresql logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            height="32"
            width="32"
            alt="mongodb logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </div>
        <div className="flex justify-center py-4 lg:space-x-4 md:space-x-4 space-x-2">
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
            height="32"
            width="32"
            alt="android logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
            height="32"
            width="32"
            alt="tailwindcss logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            height="32"
            width="32"
            alt="bootstrap logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            height="32"
            width="32"
            alt="c logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            height="32"
            width="32"
            alt="git logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          />
          <motion.img
            src="https://skillicons.dev/icons?i=vercel"
            height="32"
            width="32"
            alt="vercel logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          />
          <motion.img
            src="https://cdn.simpleicons.org/netlify/00C7B7"
            height="32"
            width="32"
            alt="netlify logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.img
            src="https://cdn.simpleicons.org/postman/FF6C37"
            height="32"
            width="32"
            alt="postman logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
        </div>
        <div className="flex justify-center py-4 lg:space-x-4 md:space-x-4 space-x-2">
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            height="32"
            width="32"
            alt="java logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            height="32"
            width="32"
            alt="c++ logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
            height="32"
            width="32"
            alt="redis logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
            height="32"
            width="32"
            alt="graphql logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />

          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            height="32"
            width="32"
            alt="docker logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
            height="32"
            width="32"
            alt="supabase logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            height="32"
            width="32"
            alt="linux logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            height="32"
            width="32"
            alt="mysql logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
        </div>
      </div>
    </>
  );
}

export default AnimatedImages;
