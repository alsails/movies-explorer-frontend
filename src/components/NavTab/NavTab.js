import "./NavTab.css";
import { Link } from "react-scroll";

function NavTab() {
    return (
        <nav className="navTab">
            <ul className="navTab__links">
                <li className="navTab__link">
                    <Link
                        to="aboutProject"
                        className="navTab__link"
                        smooth={true}
                        duration={500}
                    >
                        О проекте
                    </Link>
                </li>
                <li className="navTab__link">
                    <Link
                        to="techs"
                        className="navTab__link"
                        smooth={true}
                        duration={500}
                    >
                        Технологии
                    </Link>
                </li>
                <li className="navTab__link"> 
                    <Link
                        to="aboutMe"
                        className="navTab__link"
                        smooth={true}
                        duration={500}
                    >
                        Студент
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavTab;
