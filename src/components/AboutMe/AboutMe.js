import BlockTitle from '../BlockTitle/BlockTitle';
import './AboutMe.css';
import Avatar from '../../images/avatar.jpg'
import arrow from '../../images/icons/arrow.svg'

function AboutMe() {
  const links = [
    {
      name: 'Статичный сайт',
      href: 'https://github.com/alsails/how-to-learn',
    },
    {
      name: 'Адаптивный сайт',
      href: 'https://github.com/alsails/russian-travel',
    },
    {
      name: 'Одностраничное приложение',
      href: 'https://github.com/alsails/react-mesto-api-full-gha',
    },
  ]
  return (
    <section className="aboutMe" id='aboutMe'>
      <div className='aboutMe__container'>
        <BlockTitle title='Студент' />
        <div className='aboutMe__profile__container'>
          <div className='aboutMe__profile__container__info'>
            <p className='aboutMe__profile__container__info__name'>Мария</p>
            <p className='aboutMe__profile__container__info__profession'>Фронтенд-разработчик, 19 лет</p>
            <p className='aboutMe__profile__container__info__description'>Я родилась и живу в Москве, закончила Московский приборостроительный техникум при РЭУ по специальности "специалист по информационным системам". Во время учебы познакомилась с фронетнд-разработкой и заинтересовалась. После того, как прошла курс по веб-разработке, начала заниматься фриланс-заказами. </p>
            <a href='https://github.com/alsails' className='aboutMe__profile__container__info__github'>Github</a>
          </div>
          <img src={Avatar} alt="Аватар" className='aboutMe__profile__container__avatar'/>
        </div>
        <p className='aboutMe__portfolio'>Портфолио</p>
        {
          links.map((link) => {
            return (
              <div className='aboutMe__portfolio__link'>
                <a href={link.href} target='_blank' className='aboutMe__portfolio__link__name' >{link.name}</a>
                <img src={arrow} alt='Стрелка' className='aboutMe__portfolio__link__arrow' />
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default AboutMe;