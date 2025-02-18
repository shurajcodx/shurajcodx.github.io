import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

import CV from "../assets/surajrai_cv.pdf"; 
import ProfileImage from "../assets/images/profile.jpeg"


const IDCard: FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Suraj_Rai_CV.pdf";
    link.click();
  };

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
            <button onClick={handleDownload} className="download-cv-btn">
              <FontAwesomeIcon icon={faFileDownload} /> CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCard;
