import "./Header.scss";
import GitHub from "../../assets/icons/github.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Vimeo from "../../assets/icons/vimeo.png";
import Youtube from "../../assets/icons/youtube.png";

function Header() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__item">About</li>
        <li className="header__item">3D Animation</li>
        <li className="header__item">Web Development</li>
        <li className="header__item">Beadwork</li>
        {/* <ul className="header__icon-list">
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
        </ul> */}
      </ul>
    </div>
  );
}

export default Header;
