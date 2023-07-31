import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import profile from "../../utils/profile";
import "./Profile.css";

function Profile({signOut}) {
    const [isChange, setIsChange] = useState(false)
    const { values, handleChange, setValues } = useForm({});

    const inputName = document.getElementById('name-input');
    const inputEmail = document.getElementById('email-input');

    useEffect(() => {
        setValues({
            name: profile.name,
            email: profile.email,
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

        setIsChange(false)
    }

    function changeInfo() {
        setIsChange(true)
        inputName.disabled = false;
        inputEmail.disabled = false;

        inputName.classList.add('form__profile__input_active')
        inputEmail.classList.add('form__profile__input_active')
    }

    return (
        <section className="profile">
            <div className="profile__container">
                <form
                    action="submit"
                    className="form__profile"
                    onSubmit={handleSubmit}
                >
                    <h2 className="form__profile__title">
                        Привет, {profile.name}!
                    </h2>
                    <div className="form__profile__info">
                        <p className="form__profile__info__title">Имя</p>
                        <input
                            type="text"
                            id="name-input"
                            className="form__profile__input"
                            name="name"
                            value={values.name || ""}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                    <div className="form__profile__info">
                        <p className="form__profile__info__title">E-mail</p>
                        <input
                            type="email"
                            id="email-input"
                            name="email"
                            className="form__profile__input"
                            onChange={handleChange}
                            value={values.email || ""}
                            disabled
                        />
                    </div>
                    {isChange && 
                        <div className="profile__save">
                            <span className="profile__save__error">При обновлении профиля произошла ошибка.</span>
                            <button className="profile__save__button">Сохранить</button>
                        </div>
                    }
                </form>
                {!isChange && (<>
                    <button className="profile__edit" onClick={changeInfo}>Редактировать</button>
                    <button onClick={signOut} className="profile__signout">Выйти из аккаунта</button>
                </>)}
            </div>
        </section>
    );
}

export default Profile;
