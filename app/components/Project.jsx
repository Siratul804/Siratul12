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
            title="NeoCampus"
            description="The All-in-One Student App. Recognized as 4th place in the MIST NeoFetch Hackathon, NeoCampus serves as your essential campus companion."
            skills="#nextjs #shadcn/ui #nodejs #mongodb #grok"
            link="https://github.com/Siratul804/NeoCampus"
          />
        </div>
        <div className="text-[#71717A] flex sm:justify-between justify-center lg:flex-row flex-col md:flex-col items-center	 ">
          <ProjectCard
            title="PyNodeAI"
            description="PyNode.AI simplifies AI model integration with comprehensive code examples and documentation for both Python and Node.js. Build and deploy your AI projects faster."
            skills="#nextjs #shadcn/ui #nodejs #gemini #grok"
            link="https://github.com/Siratul804/PyNode.AI"
          />

          <ProjectCard
            title="NeoHire"
            description="NeoHire leverages AI to streamline recruitment by automating resume screening, offering unbiased candidate evaluations, and predicting career growth."
            skills="#next.js #shadcn/ui #node.js #grok #googleclound"
            link="https://github.com/Siratul804/NeoHire"
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
