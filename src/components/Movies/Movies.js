import Header from "../Header/Header";
import More from "../More/More";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import SearchForm from "../SearchForm/SearchForm";

function Movies({isLogined}) {
  return (
    <>
       {/* <Header isLogined={isLogined} /> */}
       {/* <SearchForm /> */}
       {/* <Preloader /> */}
       {/* <MoviesCardList />
       <More /> */}
       {/* <SavedMovies /> */}
       <Profile />
    </>
  );
}

export default Movies;