import "./MovieCard.css";

function MovieCard({ movie }) {
    const hours = Math.floor(movie.duration / 60);
    const remainingMinutes = movie.duration % 60;

    const formattedDuration = `${
        hours > 0 ? hours + "ч " : ""
    }${remainingMinutes}м`;

    const isLike = movie.likes;
    
    return (
        <div className="moviesCard">
            <div className="moviesCard__container">
                <h2 className="moviesCard__title">{movie.nameRU}</h2>
                <button
                    type="button"
                    className={`moviesCard__like ${
                        isLike ? "moviesCard__like_active" : ""
                    }`}
                />
                <p className="moviesCard__duration">{formattedDuration}</p>
            </div>
            <img
                className="moviesCard__img"
                src={`https://api.nomoreparties.co${movie.image.url}`}
                alt={`Обложка фильма ${movie.nameRU}`}
            />
        </div>
    );
}

export default MovieCard;
