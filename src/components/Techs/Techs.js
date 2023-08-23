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
    <section className="techs" id='techs'>
       <div className="techs__container">
            <BlockTitle title='Технологии' />
            <h3 className='techs__container-title'>7 технологий</h3>
            <p className='techs__container-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__technologies'>
                {
                technologies.map((technology, index) => {
                    return (
                        <li className='techs__technology' key={index}>
                            <p className='techs__technology-text'>{technology}</p>
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