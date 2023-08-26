import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({addMoviesInLocalStoreg, filteredMovies}) {
    const isSaved = false;
    return (
        <main>
            <SearchForm filteredMovies = {filteredMovies} addMoviesInLocalStoreg={addMoviesInLocalStoreg} />
            <MoviesCardList isSaved={isSaved} filteredMovies = {filteredMovies}/>
        </main>
    );
}

export default Movies;
