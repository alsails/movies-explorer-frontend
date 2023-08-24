import { useContext, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import profile from "../../utils/profile";
import "./Profile.css";

function Profile({ signOut }) {
    const currentUser = useContext(CurrentUserContext)

    const [isChange, setIsChange] = useState(false);
    const { values, handleChange, setValues } = useForm({});

    const inputName = document.getElementById("name-input");
    const inputEmail = document.getElementById("email-input");

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        inputName.disabled = true;
        inputEmail.disabled = true;

        setValues({
            name: inputName.value,
            email: inputEmail.value,
        });

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
                        <div className="form__info">
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
                        {isChange && (
                            <div className="form__save">
                                <span className="form__save-error">
                                    При обновлении профиля произошла ошибка.
                                </span>
                                <button type="submit" className="form__save-button">
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
