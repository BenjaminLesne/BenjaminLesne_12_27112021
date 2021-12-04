import "../styles/NutrimentsList.css";

// SVGs
import { ReactComponent as CalorieLogo } from "../assets/energy.svg";
import { ReactComponent as ProteinLogo } from "../assets/chicken.svg";
import { ReactComponent as CarbohydrateLogo } from "../assets/apple.svg";
import { ReactComponent as LipidLogo } from "../assets/cheeseburger.svg";
import PropTypes from "prop-types";

/**
 * User nutriments intake list
 * @module NutrimentsList
 *
 * @param {object} data
 * data = USER_MAIN_DATA.keyData param in {@link module:Dashboard}
 */

const NutrimentsList = ({ data }) => {
  //not proud of that, I should map through an array instead it's easier to read
  return (
    <ul className="NutrimentsList">
      <li className="NutrimentsList__nutriment">
        <div className="NutrimentsList__nutriment-logo-wrapper">
          <CalorieLogo />
        </div>
        <div className="NutrimeentsList__nutriment-info">
          <div className="NutrimentsList__nutriment-quantity-wrapper">
            {data.calorieCount}kCal
          </div>
          <h3 className="NutrimentsList__nutriment-name">Calories</h3>
        </div>
      </li>
      <li className="NutrimentsList__nutriment">
        <div className="NutrimentsList__nutriment-logo-wrapper">
          <ProteinLogo />
        </div>
        <div className="NutrimeentsList__nutriment-info">
          <div className="NutrimentsList__nutriment-quantity-wrapper">
            {data.proteinCount}g
          </div>
          <h3 className="NutrimentsList__nutriment-name">Protéine</h3>
        </div>
      </li>{" "}
      <li className="NutrimentsList__nutriment">
        <div className="NutrimentsList__nutriment-logo-wrapper">
          <CarbohydrateLogo />
        </div>
        <div className="NutrimeentsList__nutriment-info">
          <div className="NutrimentsList__nutriment-quantity-wrapper">
            {data.carbohydrateCount}g
          </div>
          <h3 className="NutrimentsList__nutriment-name">Glucides</h3>
        </div>
      </li>{" "}
      <li className="NutrimentsList__nutriment">
        <div className="NutrimentsList__nutriment-logo-wrapper">
          <LipidLogo />
        </div>
        <div className="NutrimeentsList__nutriment-info">
          <div className="NutrimentsList__nutriment-quantity-wrapper">
            {data.lipidCount}g
          </div>
          <h3 className="NutrimentsList__nutriment-name">Lipides</h3>
        </div>
      </li>
    </ul>
  );
};

NutrimentsList.propTypes = {
  calorieCount: PropTypes.number,
  carbohydrateCount: PropTypes.number,
  lipidCount: PropTypes.number,
  proteinCount: PropTypes.number,
};

export default NutrimentsList;
