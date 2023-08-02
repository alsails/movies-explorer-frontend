import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main() {
    return (
        <>
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
        </>
    );
}

export default Main;
