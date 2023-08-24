import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useForm, useFormWithValidation } from "../../hooks/useForm";
import "../AuthenticationForm/AuthenticationForm.css";

function Register({ handleRegister, errorMessage, setError }) {
    const { values, handleChange, errors, isValid, resetForm } =
        useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password || !values.name) {
            return;
        }
        handleRegister(values);
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
                    errors={errors}
                    isValid={isValid}
                    errorMessage={errorMessage}
                    setError={setError}
                />
            </section>
        </main>
    );
}

export default Register;
