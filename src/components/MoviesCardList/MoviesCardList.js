import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MovieCard from "../MovieCard/MovieCard";
import More from "../More/More";

function MoviesCardList({ isSaved, filteredMovies, onMovieSave, savedMovies }) {
    const [isWidth, setIsWidth] = useState(window.innerWidth);
    const [isInitialCountMovies, setIsInitialCountMovies] = useState(
        getInitialCountMovies(isWidth)
    );
    const [isAddCountMovies, setAddCountMovies] = useState(
        addCountMovies(isWidth)
    );
    const [isCountMovies, setIsCountMovies] = useState(isInitialCountMovies);

    const [isMore, setIsMore] = useState(true);

    useEffect(() => {
        window.addEventListener("resize", function () {
            setTimeout(() => {
                setIsWidth(window.innerWidth);
            }, 300);
        });

        setIsInitialCountMovies(getInitialCountMovies(isWidth));
        setAddCountMovies(addCountMovies(isWidth));
    }, [isWidth]);

    useEffect(() => {
        setIsCountMovies(isInitialCountMovies);
    }, [isInitialCountMovies, isAddCountMovies]);

    function getInitialCountMovies(width) {
        if (width > 900) {
            return 12;
        } else if (width <= 900 && width > 550) {
            return 8;
        } else if (width <= 550) {
            return 5;
        }
    }

    function addCountMovies(width) {
        if (width > 900) {
            return 3;
        } else return 2;
    }

    function addMoreMovies() {
        setIsCountMovies((prevCount) => prevCount + isAddCountMovies);
    }

    function countMoreMovies() {
        setIsMore(
            isCountMovies <= filteredMovies.length
        );
    }

    useEffect(() => {
        countMoreMovies();
    }, [filteredMovies]);

    console.log(filteredMovies)


    return (
        <>
            <>
            <section
                    className={`moviesCardList ${
                        isSaved ? "moviesCardList__saved" : ""
                    }`}
                >
                    {filteredMovies.length > 0 &&
                        filteredMovies
                            .slice(0, isCountMovies)
                            .map((movie, index) => {
                                return (
                                    <MovieCard
                                        movie={movie}
                                        key={index}
                                        onMovieSave={onMovieSave}
                                        savedMovies = {savedMovies}
                                    />
                                );
                            })}
                </section>
                {filteredMovies.length === 0 && "filteredMovies" in localStorage && (
                    <p className="moviesCardList__answer">Ничего не найдено</p>
                )}
                {!isSaved && isMore && (
                    <More handleaddMoreMovies={addMoreMovies} />
                )}
            </>
        </>
    );
}

export default MoviesCardList;
