import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({addMoviesInLocalStoreg}) {
    const isSaved = false;
    return (
        <main>
            <SearchForm addMoviesInLocalStoreg={addMoviesInLocalStoreg} />
            <MoviesCardList isSaved={isSaved} />
        </main>
    );
}

export default Movies;
