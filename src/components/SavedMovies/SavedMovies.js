import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
    const isSaved = true;
    return (
        <>
            <SearchForm />
            <MoviesCardList isSaved={isSaved}/>
        </>
    );
}

export default SavedMovies;
