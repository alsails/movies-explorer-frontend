export const filterMoviesByName = (movies, inputValue, isActiveShort) => {
    const isRussianRegex = /[а-яА-ЯЁё]/.test(inputValue);

    return movies.filter((movie) => {
        const movieToCompare = isRussianRegex ? movie.nameRU : movie.nameEN;
        const matchesMovies = movieToCompare
            .toLowerCase()
            .includes(inputValue.toLowerCase());

        return matchesMovies;
    });
};

export const filterMoviesByDuration = (movies, isActiveShort) => {
    if (isActiveShort) {
        return movies.filter((movie) => {
            return movie.duration <= 40;
        });
    }
    else return movies
};

export const filterMovies = (movies, inputValue, isActiveShort) => {
    let filterMovies = [];
    !isActiveShort
        ? (filterMovies = filterMoviesByName(movies, inputValue))
        : (filterMovies = filterMoviesByDuration(
              filterMoviesByName(movies, inputValue), isActiveShort
          ));

    filterMovies.length > 0
        ? localStorage.setItem("filteredMovies", JSON.stringify(filterMovies))
        : localStorage.setItem("filteredMovies", JSON.stringify(filterMovies));

    return filterMovies
};
