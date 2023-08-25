import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import movies from "../../utils/movies";
import MovieCard from "../MovieCard/MovieCard";
import More from "../More/More";

function MoviesCardList({isSaved}) {
    const [isWidth, setIsWidth] = useState(window.innerWidth);
    const [isAddCountMovies, setAddCountMovies] = useState(addCountMovies(isWidth));
    const [isCountMovies, setIsCountMovies] = useState(getInitialCountMovies(isWidth));
    const [isMore, setIsMore] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', function() {
            setTimeout(() => {
                setIsWidth(window.innerWidth);
            }, 300);
        });

        setAddCountMovies(addCountMovies(isWidth))
        countMoreMovies()
    }, [])


    function getInitialCountMovies(width) {
        if (width > 900) {
            return 12
        } else if (width <= 900 && width > 550) {
            return 8
        } else if (width <= 550) {
            return 5
        }
    }

    function addCountMovies(width) {
        if (width > 900) {
            return 3
        } else return 2
    }

    function addMoreMovies() {
        console.log(isAddCountMovies)
        setIsCountMovies(prevCount => prevCount + isAddCountMovies);
    }

    function countMoreMovies() {
        if (isCountMovies >= movies.length) setIsMore(false)
    }

    useEffect(() => {
        countMoreMovies()
    }, [isCountMovies])


    return (
        <>
            <section className={`moviesCardList ${isSaved ? "moviesCardList__saved" : ''}`}>
                {movies.slice(0, isCountMovies).map((movie, index) => {
                    return <MovieCard movie={movie} key={index}/>;
                })}
            </section>
            {!isSaved && isMore && <More handleaddMoreMovies = {addMoreMovies}/>}
        </>
    );
}

export default MoviesCardList;
