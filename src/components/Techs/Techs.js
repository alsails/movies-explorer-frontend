import BlockTitle from '../BlockTitle/BlockTitle';
import './Techs.css';

function Techs() {
    const technologies = [
        'HTML',
        'CSS',
        'JS',
        'React',
        'Git',
        'Express.js',
        'mongoDB',
    ]

  return (
    <section className="techs">
       <div className="techs__container">
            <BlockTitle title='Технологии' />
            <h3 className='techs__container__title'>7 технологий</h3>
            <p className='techs__container__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__container__technologies'>
                {
                technologies.map((technology) => {
                    return (
                        <li className='techs__container__technology'>
                            <p className='techs__container__technology__text'>{technology}</p>
                        </li>
                    )
                })
                }
            </ul>
       </div>
    </section>
  );
}

export default Techs;