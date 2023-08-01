import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
    const isSaved = false;
    return (
        <>
            <SearchForm />
            <MoviesCardList isSaved={isSaved} />
        </>
    );
}

export default Movies;
