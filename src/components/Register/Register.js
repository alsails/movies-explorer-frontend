import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useForm } from "../../hooks/useForm";
import "../AuthenticationForm/AuthenticationForm.css";

function Register() {
    let error;
    const spanError = document.querySelector("form__error");
    const { values, handleChange } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password || !values.name) {
            return;
        }
    };

    return (
        <main>
            <section className="register">
                <AuthenticationForm
                    title="Добро пожаловать!"
                    buttonText="Зарегистрироваться"
                    name="register"
                    handleChange={handleChange}
                    onSubmit={handleSubmit}
                    values={values}
                />
            </section>
        </main>
    );
}

export default Register;
