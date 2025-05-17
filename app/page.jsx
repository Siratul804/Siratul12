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
        className=" h-[350vh] lg:h-[265vh] md:h-[245vh] "
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
              href="/siratul.pdf"
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
          <h1 className="text-[#ffffffa3] text-[6vh] sm:text-[8vh] font-serif text-center ">
            Siratul Islam
          </h1>
          <div className="text-[#71717A] text-[12px] sm:text-[12px] lg:text-[14px] text-center font-mono py-8  p-4 ">
            With over 4 years of experience building diverse software projects
            <br />
            and earning top ranks in various competitions (including hackathons,{" "}
            <br />
            ideathons, project showcase etc..)
          </div>
          <AnimationImages />
          <Experience />
          {/* <div className="my-[10vh]"></div> */}
          <Project />
          <Contact />
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
}
