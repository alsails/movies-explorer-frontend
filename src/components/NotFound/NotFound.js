import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound">
        <h2 className='notFound__title'>404</h2>
        <p className='notFound__description'>Страница не найдена</p>
        <button className='notFound__return'>Назад</button>
    </div>
  );
}

export default NotFound;