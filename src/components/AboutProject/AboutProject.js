import BlockTitle from '../BlockTitle/BlockTitle';
import './AboutProject.css';

function AboutProject() {
  const texts = [
    'Дипломный проект включал 5 этапов',
    'На выполнение диплома ушло 5 недель',
    'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
    'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
  ]

  const timiesInfo = [
    '1 неделя',
    '4 недели',
    'Back-end',
    'Front-end',
  ]

  return (
    <section className="aboutProject" id='aboutProject'>
      <div className="aboutProject__container">
        <BlockTitle title='О проекте' />
        <div className='aboutProject__info'>
          {
            texts.map((text, index) => {
              return (
                <p className={`aboutProject__info-text ${index === 2 ? 'aboutProject__info-text_third' : ''}`} key={index}>{text}</p>
              )
            })
          }
        </div>
        <div className='aboutProject__time'>
        {
          timiesInfo.map((timeInfo, index) => {
            return (
              <p className={`aboutProject__time-text`} key={index}>{timeInfo}</p>
            )
          })
        }
      </div>
      </div>
    </section>
  );
}

export default AboutProject;