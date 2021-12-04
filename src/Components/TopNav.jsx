import { ReactComponent as SportSeeLogo } from "../assets/SportSeeLogo.svg";
import "../styles/TopNav.css";

/**
 * Just a HTML top nav :)
 * @module TopNav
 */
const TopNav = () => {
  return (
    <nav className="TopNav">
      <ul className="TopNav__items">
        <li>
          <SportSeeLogo />
        </li>
        <li>Accueil</li>
        <li>Profile</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
};

export default TopNav;
