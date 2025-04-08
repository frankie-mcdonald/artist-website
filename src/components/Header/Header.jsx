import "./Header.scss";
import GitHub from "../../assets/icons/github.png";
import LinkedIn from "../../assets/icons/linkedin.png";
import Vimeo from "../../assets/icons/vimeo.png";
import Youtube from "../../assets/icons/youtube.png";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Frankie McDonald</h1>
      <h3 className="header__subtext">
        3D Animation Artist | Software Developer | Indigenous Beadwork Artist
      </h3>
      <ul className="header__list">
        <li className="header__item">About</li>
        <li className="header__item">Animation</li>
        <li className="header__item">Web Development</li>
        <li className="header__item">Contact</li>
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
      </ul>
    </div>
  );
}

export default Header;
