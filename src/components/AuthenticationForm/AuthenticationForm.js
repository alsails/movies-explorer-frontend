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
    login,
}) {
    const navigate = useNavigate();

    function authorization() {
        if (name === "login") {
            login();
            navigate("/movies", { replace: true });
        }
    }
    return (
        <div className="authenticationForm">
            <div className="authenticationForm__container">
                <Link to="/">
                    <img
                        className="authenticationForm__img"
                        src={Logo}
                        alt="Логотип"
                    />
                </Link>
                <h1 className="authenticationForm__title">{title}</h1>
                <form
                    action="submit"
                    className="form"
                    name={name}
                    onSubmit={onSubmit}
                >
                    {name === "register" && (
                        <>
                            <lable className="form__lable">Имя</lable>
                            <input
                                type="text"
                                id="name-input"
                                className="form__input"
                                name="name"
                                value={values.name || ""}
                                onChange={handleChange}
                                placeholder="Имя"
                                minLength="2"
                                maxLength="30"
                                required
                            />
                        </>
                    )}
                    <lable className="form__lable">E-mail</lable>
                    <input
                        type="email"
                        id="email-input"
                        className="form__input"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                    />
                    <lable className="form__lable">Пароль</lable>
                    <input
                        id="password-input"
                        type="password"
                        className="form__input"
                        name="password"
                        value={values.password || ""}
                        onChange={handleChange}
                        placeholder="Пароль"
                        minLength="5"
                        required
                    />
                    <span id="input-error" className="form__error">
                        При авторизации произошла ошибка. Токен не передан или
                        передан не в том формате.
                    </span>
                    <button
                        onClick={authorization}
                        className={`authenticationForm__button ${
                            name === "register"
                                ? "authenticationForm__button_register"
                                : ""
                        }`}
                        type="submit"
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
                                to="/signup"
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
                                to="/signin"
                                className="authenticationForm__links__link"
                            >
                                Войти
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AuthenticationForm;
