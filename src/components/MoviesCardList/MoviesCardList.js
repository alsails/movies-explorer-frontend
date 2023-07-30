import "./MoviesCardList.css";
import movies from "../../utils/movies";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import More from "../More/More";

function MoviesCardList() {
    return (
        <>
            <section className="moviesCardList">
                {movies.slice(0, 12).map((movie) => {
                    return <MovieCard movie={movie} />;
                })}
            </section>
            <More />
        </>
    );
}

export default MoviesCardList;
