import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>Find me on:</span>
        <a
          href="https://www.instagram.com/shurajcodx_/"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.facebook.com/shurajcodx"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
      </div>
      <div className="footer-right">
        <a
          href="https://github.com/shurajcodx"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>@shurajcodx</span> <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
