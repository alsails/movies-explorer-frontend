import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./MovieCard.css";

function MovieCard({ movie, onMovieSave, savedMovies }) {
    const hours = Math.floor(movie.duration / 60);
    const remainingMinutes = movie.duration % 60;
    const formattedDuration = `${
        hours > 0 ? hours + "ч " : ""
    }${remainingMinutes}м`;

    const currentUser = useContext(CurrentUserContext);
    const [isOwn, setIsOwn] = useState(false);
    const [matchMovie, setMatchMovie] = useState({});

    function handleSaveClick() {
        !isOwn ? onMovieSave(movie, isOwn) : onMovieSave(matchMovie, isOwn)
    }


    useEffect(() => {
        const userSavedMovies = savedMovies.filter((movie) => movie.owner._id === currentUser._id);
        const isMatchMovie = userSavedMovies.some((saveMovie) => saveMovie.nameRU === movie.nameRU);
        const matchData = userSavedMovies.find((saveMovie) => saveMovie.nameRU === movie.nameRU);
        setMatchMovie(matchData)
        setIsOwn(isMatchMovie);
    }, [currentUser, savedMovies, movie]);

    return (
        <div className="moviesCard">
            <div className="moviesCard__container">
                <h2 className="moviesCard__title">{movie.nameRU}</h2>
                <button
                    type="button"
                    className={`moviesCard__like
                     ${isOwn ? "moviesCard__like_active" : ""}`}
                    onClick={handleSaveClick}
                />
                <p className="moviesCard__duration">{formattedDuration}</p>
            </div>
            <a
                href={movie.trailerLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    className="moviesCard__img"
                    src={`https://api.nomoreparties.co${movie.image.url}`}
                    alt={`Обложка фильма ${movie.nameRU}`}
                />
            </a>
        </div>
    );
}

export default MovieCard;
