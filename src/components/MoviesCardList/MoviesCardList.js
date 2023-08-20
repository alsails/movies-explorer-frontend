import "./MoviesCardList.css";
import movies from "../../utils/movies";
import MovieCard from "../MovieCard/MovieCard";
import More from "../More/More";

function MoviesCardList({isSaved}) {
    return (
        <>
            <section className={`moviesCardList ${isSaved ? "moviesCardList__saved" : ''}`}>
                {movies.slice(0, 12).map((movie, index) => {
                    return <MovieCard movie={movie} key={index}/>;
                })}
            </section>
            {!isSaved && <More />}
        </>
    );
}

export default MoviesCardList;
