import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies({searchMovies, filteredMovies, onMovieSave, isPreloaderActive, savedMovies}) {
    const isSaved = false;
    return (
        <main>
            <SearchForm filteredMovies = {filteredMovies} searchMovies={searchMovies} isSaved={isSaved}/>
            <MoviesCardList isSaved={isSaved} filteredMovies = {filteredMovies} onMovieSave={onMovieSave} savedMovies={savedMovies}/>
            <Preloader isPreloaderActive={isPreloaderActive}/>
        </main>
    );
}

export default Movies;
