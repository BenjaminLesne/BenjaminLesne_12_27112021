import { ReactComponent as ZenIcon } from "../assets/ZenIcon.svg";
import { ReactComponent as SwimIcon } from "../assets/SwimIcon.svg";
import { ReactComponent as Bikeicon } from "../assets/BikeIcon.svg";
import { ReactComponent as DumbbellIcon } from "../assets/DumbbellIcon.svg";

import "../styles/VerticalLayout.css";

/**
 * vertical layout HTML showing copyrights and few links
 * @module VerticalLayout
 */

const VerticalLayout = () => {
  return (
    <aside className="VerticalLayout">
      <nav>
        <ul className="VerticalLayout__items">
          <li className="VerticalLayout__item">
            <ZenIcon />
          </li>
          <li className="VerticalLayout__item">
            <SwimIcon />
          </li>
          <li className="VerticalLayout__item">
            <Bikeicon />
          </li>
          <li className="VerticalLayout__item">
            <DumbbellIcon />
          </li>
        </ul>
      </nav>
      <div className="VerticalLayout__copyrightsWrapper">
        <small className="VerticalLayout__copyrights">
          Copyright, SportSee 2020
        </small>
      </div>
    </aside>
  );
};

export default VerticalLayout;
