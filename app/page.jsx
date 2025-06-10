import Link from "next/link";
import GalaxyFarmerMotion from "./components/GalaxyFarmerMotion";
import AnimationImages from "./components/AnimatedImages";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Achievements from "./components/Achievements";
// import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="bg-black">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "black",
        }}
        className=" h-[1050vh] lg:h-[650vh] md:h-[1045vh] "
      >
        <GalaxyFarmerMotion />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <HeroSection />
          <Experience />
          <Achievements />
          <AnimationImages />
          {/* <div className="my-[10vh]"></div> */}
          <Project />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
