import AnimationImages from "./components/AnimatedImages";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Achievements from "./components/Achievements";
// import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen pt-16 ">
      <div className="relative overflow-hidden bg-black">
        <div className="w-full flex flex-col items-center justify-center">
          <HeroSection />
          <Experience />
          <Project />
          <Achievements />
          <AnimationImages />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
