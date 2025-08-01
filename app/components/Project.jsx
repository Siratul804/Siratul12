import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa6";

function Project() {
  return (
    <>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Twicket"
            description="Twicket is a full-stack event ticketing platform enabling real-time multi-organizer management and secure transactions at scale."
            skills="#next.js #tailwindcss #node.js #mongodb #vps #cloud-native #docker"
            link="https://www.mytwicket.com/"
          />
          <ProjectCard
            title="PyNodeAI"
            description="PyNode.AI simplifies AI model integration with comprehensive code examples and documentation for both Python and Node.js. Build and deploy your AI projects faster."
            skills="#nextjs #shadcn/ui #nodejs #gemini #grok"
            link="https://pynodeai.vercel.app/"
          />
          <ProjectCard
            title="Zeno"
            description="Zeno isn't just another chatbot; it's an intelligent, voice-powered assistant designed to take action. It listens to your speech and then dynamically responds with practical & real-world functions."
            skills="#next.js #gemini #tailwindcss #SpeechRecognitionAPI"
            link="https://zenovoice.vercel.app/"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <Link
            href="https://github.com/Siratul804?tab=repositories"
            target="_blank"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-white rounded-full"></div>

              <span className="text-white/80 text-sm font-medium tracking-wide">
                VIEW MORE ON GITHUB
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Project;
