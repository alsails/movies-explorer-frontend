import './MovieCard.css';

function MovieCard({movie}) {
  const isLike = movie.likes;
  return (
    <div className="moviesCard">
        <div className='moviesCard__container'>
          <h2 className='moviesCard__title'>{movie.name}</h2>
          <button type='button' className={`moviesCard__like ${isLike ? 'moviesCard__like_active' : ''}`} />
          <p className='moviesCard__duration'>{movie.time}</p>
        </div>
        <img className='moviesCard__img' src={movie.img} alt={`Обложка фильма ${movie.name}`}/>
    </div>
  );
}

export default MovieCard;