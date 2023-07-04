import './AuthenticationForm.css';
import Logo from '../../images/icons/logo.svg'

function AuthenticationForm({title, buttonText, name, children}) {
  return (
    <section className="authenticationForm">
        <img className='authenticationForm__img' src={Logo} alt='Логотип'/>
        <h2 className='authenticationForm__title'>{title}</h2>
        <form action="submit" className="form" name={name}>
            {children}
        </form>
        <button className='authenticationForm__button'>{buttonText}</button>
        <div className='authenticationForm__links'> 
            {
                name === 'login' 
                ? <> 
                    <p className='authenticationForm__links__text'>Ещё не зарегистрированы?</p>
                    <p className='authenticationForm__links__link'>Регистрация</p>
                </>
                : <> 
                    <p className='authenticationForm__links__text'>Уже зарегистрированы?</p>
                    <p className='authenticationForm__links__link'>Войти</p>
                </>
            }
        </div>
    </section>
  );
}

export default AuthenticationForm;