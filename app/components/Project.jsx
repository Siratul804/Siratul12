import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";

function Project() {
  return (
    <>
      <div className="text-[#71717A] font-bold text-2xl text-center pt-[20vh] pb-[4vh]  ">
        Projects
      </div>
      <main className=" w-[120vh] ">
        <div className="text-[#71717A] flex sm:justify-between justify-center lg:flex-row flex-col md:flex-col items-center	 ">
          <ProjectCard
            title="Kotha"
            description="Kotha is a unique programming language built using Bengali syntax, designed to bring the beauty of coding to Bengali-speaking developers."
            skills="#javascript #nodejs"
            link="https://github.com/Siratul804/Kotha.git"
          />
          <ProjectCard
            title="UnifyBot12"
            description="Meet UnifyBot12, your new favorite Discord bot packed with awesome features! Play  Hangman and RPS, jokes, and  memes!"
            skills="#javaScript #node.js #discord.js"
            link="https://github.com/Siratul804/NodeJS-Discord-UnifyBot12.git"
          />
        </div>
        <div className="text-[#71717A] flex sm:justify-between justify-center lg:flex-row flex-col md:flex-col items-center	 ">
          <ProjectCard
            title="EZPrompt"
            description="It's  an open-source AI prompting tool for modern world to discover, create, edit, store and share creative prompts."
            skills="#nextjs #tailwindCSS #nextAuth #nodejs #mongodb"
            link="https://github.com/Siratul804/prompt_nextJS"
          />

          <ProjectCard
            title="RoadAhead"
            description="RoadAhead is an advanced AI model that revolutionizes urban mobility by providing real-time traffic data."
            skills="#reactNativeExpo #tailwindCSS #GoogleMapApi"
            link="https://github.com/Siratul804/RoadAhead-Native"
          />
        </div>
        <div className="flex justify-end text-[#71717A] py-10 text-sm ">
          <Link
            href="https://github.com/Siratul804?tab=repositories"
            target="_blank"
            className="border-b-2 border-[#71717A] hover:text-[#ffffffa3] hover:border-[#ffffffa3] flex items-center"
          >
            <p>See more</p>
            <span className=" pl-1">
              <FaArrowRight size={14} />
            </span>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Project;
