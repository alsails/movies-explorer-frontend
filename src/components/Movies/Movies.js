import Header from "../Header/Header";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SavedMovies from "../SavedMovies/SavedMovies";
import SearchForm from "../SearchForm/SearchForm";

function Movies({isLogined}) {
  return (
    <>
       <Header isLogined={isLogined} />
       <SearchForm />
       {/* <Preloader /> */}
       {/* <MoviesCardList />
       <More /> */}
       <SavedMovies />
    </>
  );
}

export default Movies;