import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useForm } from "../../hooks/useForm";

function Login({ handleLogin }) {
    const { values, handleChange } = useForm({});

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
                />
            </section>
        </main>
    );
}

export default Login;
