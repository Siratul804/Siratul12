import Link from "next/link";
import GalaxyFarmerMotion from "./components/GalaxyFarmerMotion";
import AnimationImages from "./components/AnimatedImages";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
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
        className=" h-[220vh] "
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
          <div className="flex flex-wrap py-4 ">
            <Link
              href="https://github.com/Siratul804?tab=repositories"
              target="_blank"
              className="text-[#71717A] pr-4 hover:text-[#ffffffa3] "
            >
              Project
            </Link>
            <Link
              href="https://github.com/Siratul804?tab=repositories"
              target="_blank"
              className="text-[#71717A] pr-4 hover:text-[#ffffffa3] "
            >
              Resume
            </Link>
            <Link
              href="mailto: islamsiratul@gmail.com"
              target="_blank"
              className="text-[#71717A] pr-4 hover:text-[#ffffffa3] "
            >
              Contact
            </Link>
          </div>
          <h1 className="text-[#71717A] text-[8vh] font-serif text-center ">
            Siratul Islam
          </h1>
          <div className="text-[#71717A] text-[12px] text-center font-mono py-8 ">
            I have the power to create tools and solutions that simplify and
            improve people's lives so I am focused on building Scalable
            Solutions.
          </div>
          <AnimationImages />
          <Experience />
          <div className="py-[10vh]"></div>
          <Project />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
