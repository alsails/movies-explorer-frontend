import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({addMoviesInLocalStoreg}) {
    const isSaved = true;
    return (
        <main>
            <SearchForm addMoviesInLocalStoreg={addMoviesInLocalStoreg} />
            <MoviesCardList isSaved={isSaved}/>
        </main>
    );
}

export default SavedMovies;
