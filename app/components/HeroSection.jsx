import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative inset-0 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        {/* Navigation Links */}
        <nav className="mb-8">
          <div className="flex flex-wrap justify-center gap-8 mb-4">
            <Link
              href="https://github.com/Siratul804?tab=repositories"
              target="_blank"
              className="group relative text-white/60 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span className="relative z-10">PROJECTS</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="/Siratul_Islam_Resume.pdf"
              target="_blank"
              className="group relative text-white/60 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span className="relative z-10">RESUME</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              href="mailto:islamsiratul@gmail.com"
              target="_blank"
              className="group relative text-white/60 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide"
            >
              <span className="relative z-10">CONTACT</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>

          {/* Navigation separator */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-white/20"></div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="w-8 h-px bg-white/20"></div>
          </div>
        </nav>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-4 tracking-tight">
            Siratul Islam
          </h1>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto">
          <p className="text-white/70 text-sm sm:text-base lg:text-md leading-relaxed font-mono">
            With over{" "}
            <span className="text-white font-semibold">
              4 years of experience
            </span>{" "}
            building diverse software projects
            <br className="hidden sm:block" />
            and earning top ranks in various competitions including
            <br className="hidden sm:block" />
            <span className="text-white/90">
              hackathons, ideathons, and project showcases
            </span>
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="w-16 h-px bg-white/20"></div>
          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="w-16 h-px bg-white/20"></div>
          <div
            className="w-2 h-2 bg-white/30 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Status indicator */}
        <div className="mt-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white/80 text-xs font-medium tracking-widest">
              AVAILABLE FOR WORK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
