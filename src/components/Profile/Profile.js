import { useContext, useEffect, useState } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import profile from "../../utils/profile";
import "./Profile.css";

function Profile({ signOut, handleUpdateInfo }) {
    const currentUser = useContext(CurrentUserContext)

    const [isChange, setIsChange] = useState(false);
    const { values, handleChange, setValues, errors, isValid, resetForm } = useFormWithValidation();

    const inputName = document.getElementById("name-input");
    const inputEmail = document.getElementById("email-input");

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
    }, []);

    useEffect(() => {
        if (currentUser) {
          resetForm(currentUser);
        }
      }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        inputName.disabled = true;
        inputEmail.disabled = true;

        const newInfo = {
            name: values.name,
            email: values.email
        }

        handleUpdateInfo(newInfo)

        setIsChange(false);
    }

    function changeInfo() {
        setIsChange(true);
        inputName.disabled = false;
        inputEmail.disabled = false;

        inputName.classList.add("form__input_active");
        inputEmail.classList.add("form__input_active");
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <form
                        action="submit"
                        className="form"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="form__title">
                            Привет, {profile.name}!
                        </h1>
                        <div className={`form__info ${errors.name ? "form__info-error" : ""}`}>
                            <lable className="form__info-title">Имя</lable>
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
                                disabled
                            />
                        </div>
                        <p className={`form__error ${errors.name ? "form__error_visible" : ""}`}>
                                {errors.name}
                            </p>
                        <div className="form__info">
                            <lable className="form__info-title">E-mail</lable>
                            <input
                                type="email"
                                id="email-input"
                                name="email"
                                className="form__input"
                                onChange={handleChange}
                                value={values.email || ""}
                                placeholder="E-mail"
                                disabled 
                            />
                        </div>
                        <p className={`form__error ${errors.email ? "form__error_visible" : ""}`}>
                                {errors.email}
                            </p>
                        {isChange && (
                            <div className="form__save">
                                <span className="form__save-error">
                                    При обновлении профиля произошла ошибка.
                                </span>
                                <button type="submit" className={`form__save-button ${(!isValid || (values.name === currentUser.name && values.email === currentUser.email)) && "form__save-button_disable"}`} disabled={!isValid || (values.name === currentUser.name && values.email === currentUser.email)}>
                                    Сохранить
                                </button>
                            </div>
                        )}
                    </form>
                    {!isChange && (
                        <>
                            <button
                                type="button"
                                className="profile__edit"
                                onClick={changeInfo}
                            >
                                Редактировать
                            </button>
                            <button
                                type="button"
                                onClick={signOut}
                                className="profile__signout"
                            >
                                Выйти из аккаунта
                            </button>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Profile;
