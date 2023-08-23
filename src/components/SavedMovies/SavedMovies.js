import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
    const isSaved = true;
    return (
        <main>
            <SearchForm />
            <MoviesCardList isSaved={isSaved}/>
        </main>
    );
}

export default SavedMovies;
