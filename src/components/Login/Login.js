import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import { useForm } from "../../hooks/useForm";
import "../AuthenticationForm/AuthenticationForm.css";

function Login({login}) {
    const { values, handleChange } = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
    }

    return (
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
    );
}

export default Login;
