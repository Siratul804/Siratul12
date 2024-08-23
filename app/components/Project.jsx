import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";

function Project() {
  return (
    <>
      <div className="text-[#71717A] font-bold text-2xl text-center py-10  ">
        Projects
      </div>
      <main className=" w-[120vh] ">
        <div className="text-[#71717A] flex sm:justify-between justify-center lg:flex-row flex-col md:flex-col items-center	 ">
          <ProjectCard
            title="ShapeScript"
            description="It's a code generator which allow to draw rectangle , circle & triangle into HTML/CSS code."
            skills="#javaScript #reactjs #css"
            link="https://github.com/Siratul804/ShapeScript"
          />
          <ProjectCard
            title="EZPrompt"
            description="It's  an open-source AI prompting tool for modern world to discover, create, edit, store and share creative prompts."
            skills="#nextjs #tailwindCSS #nextAuth #nodejs #mongodb"
            link="https://github.com/Siratul804/prompt_nextJS"
          />
        </div>
        <div className="text-[#71717A] flex sm:justify-between justify-center lg:flex-row flex-col md:flex-col items-center	 ">
          <ProjectCard
            title=" RoadAhead-Native"
            description="RoadAhead is an advanced AI model that revolutionizes urban mobility by providing real-time traffic data."
            skills="#reactNativeExpo #tailwindCSS #GoogleMapApi"
            link="https://github.com/Siratul804/RoadAhead-Native"
          />
          <ProjectCard
            title="Todo App"
            description="A simple and intuitive To-Do List application built using React, allowing users to efficiently manage their tasks."
            skills="#reactjs #javaScript #css "
            link="https://github.com/Siratul804/todo"
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
