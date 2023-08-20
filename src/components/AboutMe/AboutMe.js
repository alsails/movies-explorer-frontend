import BlockTitle from "../BlockTitle/BlockTitle";
import "./AboutMe.css";
import Avatar from "../../images/avatar.jpg";
import arrow from "../../images/icons/arrow.svg";

function AboutMe() {
    const links = [
        {
            name: "Статичный сайт",
            href: "https://github.com/alsails/how-to-learn",
        },
        {
            name: "Адаптивный сайт",
            href: "https://github.com/alsails/russian-travel",
        },
        {
            name: "Одностраничное приложение",
            href: "https://github.com/alsails/react-mesto-api-full-gha",
        },
    ];
    return (
        <section className="aboutMe" id="aboutMe">
            <div className="aboutMe__container">
                <BlockTitle title="Студент" />
                <div className="aboutMe__profile">
                    <div className="aboutMe__info">
                        <p className="aboutMe__info-name">Мария</p>
                        <p className="aboutMe__info-profession">
                            Фронтенд-разработчик, 19 лет
                        </p>
                        <p className="aboutMe__info-description">
                            Я родилась и живу в Москве, закончила Московский
                            приборостроительный техникум при РЭУ по
                            специальности "специалист по информационным
                            системам". Во время учебы познакомилась с
                            фронетнд-разработкой и заинтересовалась. После того,
                            как прошла курс по веб-разработке, начала заниматься
                            фриланс-заказами.{" "}
                        </p>
                        <a
                            className="aboutMe__info-github"
                            href="https://github.com/alsails"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github
                        </a>
                    </div>
                    <img
                        src={Avatar}
                        alt="Аватар"
                        className="aboutMe__profile-avatar"
                    />
                </div>
                <h2 className="aboutMe__portfolio">Портфолио</h2>
                <ul className="aboutMe__links">
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="aboutMe__link"
                                >
                                    <p className="aboutMe__link-name">
                                        {link.name}
                                    </p>
                                    <img
                                        src={arrow}
                                        alt="Стрелка"
                                        className="aboutMe__link-arrow"
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;
