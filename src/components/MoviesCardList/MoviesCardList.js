import "./MoviesCardList.css";
import movies from "../../utils/movies";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import More from "../More/More";

function MoviesCardList({isSaved}) {
    console.log(isSaved)
    return (
        <>
            <section className="moviesCardList">
                {movies.slice(0, 12).map((movie) => {
                    return <MovieCard movie={movie} />;
                })}
            </section>
            {!isSaved && <More />}
        </>
    );
}

export default MoviesCardList;
