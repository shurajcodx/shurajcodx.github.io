import { FC } from "react";
import ProfileImage from "../assets/images/profile.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileDownload  } from "@fortawesome/free-solid-svg-icons"

const IDCard: FC = () => {
  return (
    <section className="id-card-container">
      <div className="id-card-tag"></div>
      <div className="id-card-tag-strip"></div>
      <div className="id-card-hook"></div>
      <div className="id-card-holder">
        <div className="id-card">
          <div className="header">
            <img src={ProfileImage} alt="profile" />
          </div>
          <h2>Shuraj Shampang</h2>
          <span>Software Engineer</span>
          <div className="cv-btn-container">
            <a
              href="surajrai_cv.pdf"
              download="Suraj_Rai_CV.pdf"
              className="download-cv-btn"
            >
              <FontAwesomeIcon icon={faFileDownload} /> CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCard;
