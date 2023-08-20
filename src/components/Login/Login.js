import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useForm } from "../../hooks/useForm";

function Login({ login }) {
    const { values, handleChange } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
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
                    login={login}
                />
            </section>
        </main>
    );
}

export default Login;
