import React from "react";
import {NavLink} from "react-router-dom";
import "../../../fonts/fonts.css";

const СountriesBlock: React.FC = () => {
    return (
        <div>
            <ul className="navigation">
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/60270368f347c8267c02a528">Italy</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/604738f88a53d6c667d7fed9">Belarus</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/60475c8dd817eac0b87e0d0a">Russia</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/604765afd817eac0b87e0d11">Ukraine</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/604767e7d817eac0b87e0d12">Germany</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/60476997d817eac0b87e0d13">France</NavLink></li>
                <li className="navigation__item"><NavLink className="navigation__link" to="/country/60476acbd817eac0b87e0d14">Norway</NavLink></li>
            </ul>
        </div>
    )
};

export default СountriesBlock;
