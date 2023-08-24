import "./AuthenticationForm.css";
import { Link } from "react-router-dom";
import Logo from "../../images/icons/logo.svg";

function AuthenticationForm({
    title,
    buttonText,
    onSubmit,
    values,
    handleChange,
    name,
}) {


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
                    className="authenticationForm__form"
                    name={name}
                    onSubmit={onSubmit}
                >
                    {name === "register" && (
                        <>
                            <lable className="authenticationForm__form-lable">Имя</lable>
                            <input
                                type="text"
                                id="name-input"
                                className="authenticationForm__form-input"
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
                    <lable className="authenticationForm__form-lable">E-mail</lable>
                    <input
                        type="email"
                        id="email-input"
                        className="authenticationForm__form-input"
                        name="email"
                        value={values.email || ""}
                        onChange={handleChange}
                        placeholder="E-mail"
                        required
                    />
                    <lable className="authenticationForm__form-lable">Пароль</lable>
                    <input
                        id="password-input"
                        type="password"
                        className="authenticationForm__form-input"
                        name="password"
                        value={values.password || ""}
                        onChange={handleChange}
                        placeholder="Пароль"
                        minLength="5"
                        maxLength="30"
                        required
                    />
                    <span id="input-error" className="authenticationForm__form-error">
                        При авторизации произошла ошибка. Токен не передан или
                        передан не в том формате.
                    </span>
                    <button
                        className={`authenticationForm__form-button ${
                            name === "register"
                                ? "authenticationForm__form-button_regster"
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
                            <p className="authenticationForm__links-text">
                                Ещё не зарегистрированы?
                            </p>
                            <Link
                                to="/signup"
                                className="authenticationForm__links-link"
                            >
                                Регистрация
                            </Link>
                        </>
                    ) : (
                        <>
                            <p className="authenticationForm__links-text">
                                Уже зарегистрированы?
                            </p>
                            <Link
                                to="/signin"
                                className="authenticationForm__links-link"
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
