import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound">
        <div className='notFound__container'>
            <h2 className='notFound__title'>404</h2>
            <p className='notFound__description'>Страница не найдена</p>
            <button className='notFound__return'>Назад</button>
        </div>
    </div>
  );
}

export default NotFound;