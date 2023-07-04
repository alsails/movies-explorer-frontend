import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import '../AuthenticationForm/AuthenticationForm.css';

function Login() {
  return (
    <section className="login">
        <AuthenticationForm 
            title = 'Рады видеть!' 
            buttonText = 'Войти'
            name = 'login'
        >
            <p className='form__lable'>Email</p>
            <input type="text" id="email-input" className="form__input" name="email" required/>
            <p className='form__lable'>Пароль</p>
            <input id="password-input" type="password" className="form__input" name="password" required />
            <span id="input-error" className="form__error">Что-то пошло не так...</span>
        </AuthenticationForm>
    </section>
  );
}

export default Login;