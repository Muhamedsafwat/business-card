import "../styles/switch.css";

import { ImSun } from "react-icons/im";
import { TbMoonStars } from "react-icons/tb";

const Switch = ({ toggleHandler }) => {
  return (
    <div className="switch">
      <input id="theme" type="checkbox" />
      <label htmlFor="theme" onClick={() => toggleHandler()}>
        <ImSun className="sun" />
        <TbMoonStars className="moon" />
      </label>
    </div>
  );
};

export default Switch;
