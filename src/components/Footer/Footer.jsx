import "./Footer.scss";
import GitHub from "../../assets/icons/github.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Vimeo from "../../assets/icons/vimeo.png";
import Youtube from "../../assets/icons/youtube.png";

function Footer() {
  return (
    <div className="footer">
      <h2 className="footer__title">Frankie McDonald</h2>
      <ul className="footer__list">
        <li className="footer__item">Contact</li>
        <li className="footer__item">Volunteer work</li>
        <li className="footer__item">Portfolio</li>
        <li className="footer__item">Copyright Frankie McDonald 2025</li>
      </ul>
      <ul className="header__icon-list">
        <li className="header__icon-item">
          <img className="header__icon" src={GitHub} alt="" />
        </li>
        <li className="header__icon-item">
          <img className="header__icon" src={LinkedIn} alt="" />
        </li>
        <li className="header__icon-item">
          <img className="header__icon" src={Vimeo} alt="" />
        </li>
        <li className="header__icon-item">
          <img className="header__icon" src={Youtube} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
