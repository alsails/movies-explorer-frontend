import Header from "../Header/Header";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies({isLogined}) {
  return (
    <>
       <Header isLogined={isLogined} />
       <SearchForm />
       {/* <Preloader /> */}
       <MoviesCardList />
       <More />
    </>
  );
}

export default Movies;