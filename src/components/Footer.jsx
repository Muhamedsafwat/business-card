import "../styles/footer.css";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <button>
        <BsTwitter />
      </button>
      <button>
        <BsFacebook />
      </button>
      <button>
        <BsInstagram />
      </button>
      <button>
        <BsLinkedin />
      </button>
      <button>
        <BsGithub />
      </button>
    </footer>
  );
};

export default Footer;
