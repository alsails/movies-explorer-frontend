import "./MoviesCardList.css";
import movies from "../../utils/movies";
import MovieCard from "../MovieCard/MovieCard";
import More from "../More/More";

function MoviesCardList({isSaved}) {
    return (
        <>
            <ul className="moviesCardList">
                {movies.slice(0, 12).map((movie, index) => {
                    return <li><MovieCard movie={movie} key={index}/></li>;
                })}
            </ul>
            {!isSaved && <More />}
        </>
    );
}

export default MoviesCardList;
