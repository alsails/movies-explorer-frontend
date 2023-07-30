import "./NavTab.css";
import { Link, animateScroll as scroll } from "react-scroll";

function NavTab() {
    return (
        <nav className="navTab">
            <ul className="navTab__links">
                <Link
                    to="aboutProject"
                    className="navTab__link"
                    smooth={true}
                    duration={500}
                >
                    О проекте
                </Link>
                <Link
                    to="techs"
                    className="navTab__link"
                    smooth={true}
                    duration={500}
                >
                    Технологии
                </Link>
                <Link
                    to="aboutMe"
                    className="navTab__link"
                    smooth={true}
                    duration={500}
                >
                    Студент
                </Link>
            </ul>
        </nav>
    );
}

export default NavTab;
