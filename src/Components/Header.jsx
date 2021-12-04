import "../styles/Header.css";
import PropTypes from "prop-types";

/**
 *
 * Say hello and display user name
 * @module Header
 *
 */

const Header = (props) => {
  const { userName } = props;
  return (
    <header className="Header">
      <h2 className="Header__greetings">
        Bonjour <span className="Header__user-name">{userName}</span>
      </h2>
      <h3 className="Header__message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h3>
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
};

export default Header;
