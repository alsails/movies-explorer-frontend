import AuthenticationForm from '../AuthenticationForm/AuthenticationForm';
import '../AuthenticationForm/AuthenticationForm.css';

function Login() {
  return (
    <section className="register">
        <AuthenticationForm 
            title = 'Добро пожаловать!' 
            buttonText = 'Зарегистрироваться'
            name = 'register'
        >
            <p className='form__lable'>Имя</p>
            <input type="text" id="name-input" className="form__input" name="name" required/>
            <p className='form__lable'>Email</p>
            <input type="email" id="email-input" className="form__input" name="email" required/>
            <p className='form__lable' >Пароль</p>
            <input id="password-input" type="password" className="form__input" name="password" required />
            <span id="input-error" className="form__error">Что-то пошло не так... </span>
        </AuthenticationForm>
    </section>
  );
}

export default Login;