import "./AuthenticationForm.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../images/icons/logo.svg";

function AuthenticationForm({
    title,
    buttonText,
    onSubmit,
    values,
    handleChange,
    name,
    login
}) {
    const navigate = useNavigate();

    function authorization() {
        if (name === "login") {
            login();
            navigate("/movies", { replace: true })
        }
    }
    return (
        <section className="authenticationForm">
            <div className="authenticationForm__container">
                <Link to="/">
                    <img
                        className="authenticationForm__img"
                        src={Logo}
                        alt="Логотип"
                    />
                </Link>
                <h2 className="authenticationForm__title">{title}</h2>
                <form
                    action="submit"
                    className="form"
                    name={name}
                    onSubmit={onSubmit}
                >
                    {name === "register" && (
                        <>
                            <p className="form__lable">Имя</p>
                            <input
                                type="text"
                                id="name-input"
                                className="form__input"
                                name="name"
                                value={values.name || ""}
                                onChange={handleChange}
                                required
                            />
                        </>
                    )}
                    <p className="form__lable">Email</p>
                    <input
                        type="email"
                        id="email-input"
                        className="form__input"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        required
                    />
                    <p className="form__lable">Пароль</p>
                    <input
                        id="password-input"
                        type="password"
                        className="form__input"
                        name="password"
                        value={values.password || ""}
                        onChange={handleChange}
                        required
                    />
                    <span id="input-error" className="form__error">
                        При авторизации произошла ошибка. Токен не передан или
                        передан не в том формате.
                    </span>
                    <button
                        onClick={authorization}
                        className={`authenticationForm__button ${name === 'register' ? 'authenticationForm__button_register' : ''}`}
                    >
                        {buttonText}
                    </button>
                </form>
                <div className="authenticationForm__links">
                    {name === "login" ? (
                        <>
                            <p className="authenticationForm__links__text">
                                Ещё не зарегистрированы?
                            </p>
                            <Link
                                to="/sign-up"
                                className="authenticationForm__links__link"
                            >
                                Регистрация
                            </Link>
                        </>
                    ) : (
                        <>
                            <p className="authenticationForm__links__text">
                                Уже зарегистрированы?
                            </p>
                            <Link
                                to="/sign-in"
                                className="authenticationForm__links__link"
                            >
                                Войти
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default AuthenticationForm;
