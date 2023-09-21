import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useFormWithValidation } from "../../hooks/useForm";

function Login({ handleLogin, errorMessage, setError }) {
    const { values, handleChange, errors, isValid } = useFormWithValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
        handleLogin(values)
    };




    return (
        <main>
            <section className="login">
                <AuthenticationForm
                    title="Рады видеть!"
                    buttonText="Войти"
                    name="login"
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

export default Login;
