import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Link from "next/link";

function Contact() {
  return (
    <>
      <div className="text-[#71717A] font-bold text-2xl text-center pt-[10vh] pb-[4vh]  ">
        Find me
      </div>
      <main className="w-[20vh] ">
        <div className="text-[#71717A] flex  justify-between ">
          <Link
            href="https://github.com/Siratul804"
            className="hover:text-[#ffffffa3] "
            target="_blank"
          >
            <FaGithub size={26} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/siratulislam/"
            className="hover:text-[#ffffffa3]"
            target="_blank"
          >
            <FaLinkedin size={26} />
          </Link>
          <Link
            href="https://x.com/Siratul074"
            className="hover:text-[#ffffffa3]"
            target="_blank"
          >
            <FaTwitter size={26} />
          </Link>
        </div>
      </main>
    </>
  );
}

export default Contact;
