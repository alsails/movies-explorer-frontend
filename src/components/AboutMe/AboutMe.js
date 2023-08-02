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
          <ul className='aboutMe__profile__container__info'>
            <li className='aboutMe__profile__container__info__name'>Мария</li>
            <li className='aboutMe__profile__container__info__profession'>Фронтенд-разработчик, 19 лет</li>
            <li className='aboutMe__profile__container__info__description'>Я родилась и живу в Москве, закончила Московский приборостроительный техникум при РЭУ по специальности "специалист по информационным системам". Во время учебы познакомилась с фронетнд-разработкой и заинтересовалась. После того, как прошла курс по веб-разработке, начала заниматься фриланс-заказами. </li>
            <li href='https://github.com/alsails' target='_blank' className='aboutMe__profile__container__info__github'>Github</li>
          </ul>
          <img src={Avatar} alt="Аватар" className='aboutMe__profile__container__avatar'/>
        </div>
        <h2 className='aboutMe__portfolio'>Портфолио</h2>
        {
          links.map((link, index) => {
            return (
              <a href={link.href} target='_blank' className='aboutMe__portfolio__link' key={index}>
                <p className='aboutMe__portfolio__link__name' >{link.name}</p>
                <img src={arrow} alt='Стрелка' className='aboutMe__portfolio__link__arrow' />
              </a>
            )
          })
        }
      </div>
    </section>
  );
}

export default AboutMe;