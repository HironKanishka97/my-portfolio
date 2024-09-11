import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/hkLogo.png";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIAL } from "../constants";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 opacity-80" src={logo} alt="logo.png" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
         href={SOCIAL.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        {/* <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a> */}
        <a
         href={SOCIAL.instargram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
