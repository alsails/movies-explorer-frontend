import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({searchMovies, filteredMovies, onMovieSave, savedMovies, filterSaveMovies, setSavedFilterMovies}) {
    const isSaved = true;
    return (
        <main>
            <SearchForm filteredMovies = {filteredMovies} searchMovies={searchMovies} isSaved={isSaved} filterSaveMovies={filterSaveMovies}/>
            <MoviesCardList setSavedFilterMovies={setSavedFilterMovies} isSaved={isSaved} filteredMovies = {filteredMovies} onMovieSave={onMovieSave} savedMovies={savedMovies}/>
        </main>
    );
}

export default SavedMovies;
