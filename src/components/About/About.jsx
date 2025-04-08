import "./About.scss";
import Kaya from "../../assets/images/kaya-intro.jpg";
import Hat from "../../assets/images/hat.jpg";
import Landing from "../../assets/images/landingpage-desktop.png";

function About() {
  return (
    <div className="about">
      <ul className="about__list">
        <li className="about__item">
          <h4 className="about__title"></h4>
          <img src={Kaya} alt="" className="about__image" />
          <p className="about__button">3D Animation</p>
        </li>
        <li className="about__item">
          {" "}
          <h4 className="about__title"></h4>
          <img src={Hat} alt="" className="about__image" />
          <p className="about__button">Beadwork</p>
        </li>
        <li className="about__item">
          {" "}
          <h4 className="about__title"></h4>
          <img src={Landing} alt="" className="about__image" />
          <p className="about__button">Web Development</p>
        </li>
      </ul>
    </div>
  );
}

export default About;
