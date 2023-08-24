import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/icons/logo.svg";
import "./AuthenticationForm.css";
import { useFormWithValidation } from "./useFormWithValidation"; // Импорт вашего кастомного хука

function AuthenticationForm({
    title,
    buttonText,
    onSubmit,
    name,
}) {
    // Используем кастомный хук
    const { values, handleChange, errors, isValid } = useFormWithValidation();

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
                            <label className="authenticationForm__form-label">Имя</label>
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
                            <span className="authenticationForm__form-error">
                                {errors.name}
                            </span>
                        </>
                    )}
                    <label className="authenticationForm__form-label">E-mail</label>
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
                    <span className="authenticationForm__form-error">
                        {errors.email}
                    </span>
                    <label className="authenticationForm__form-label">Пароль</label>
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
                    <span className="authenticationForm__form-error">
                        {errors.password}
                    </span>
                    <span id="input-error" className="authenticationForm__form-error">
                        При авторизации произошла ошибка. Токен не передан или
                        передан не в том формате.
                    </span>
                    <button
                        className={`authenticationForm__form-button ${
                            name === "register"
                                ? "authenticationForm__form-button_register"
                                : ""
                        }`}
                        type="submit"
                        disabled={!isValid}
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
