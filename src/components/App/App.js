import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import PopupMenu from "../PopupMenu/PopupMenu";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import api from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";
import "./App.css";

import { filterMoviesByDuration, filterMovies } from "../../utils/MoviesFilter";

function App() {
    const bodyElement = document.querySelector("body");
    const [isPopupMenu, setIsPopupMenu] = useState(false);
    const [isLogined, setIsLogined] = useState(false);
    const [isPreloader, setIsPreloader] = useState(false);
    const [movies, setMovies] = useState(
        JSON.parse(localStorage.getItem("allMovies"))
    );
    const [savedMovies, setSavedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(
        JSON.parse(localStorage.getItem("filteredMovies"))
    );
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    function openPopupMenu() {
        setIsPopupMenu(true);
        bodyElement.style.overflow = "hidden";
    }

    function closeAllPopup() {
        setIsPopupMenu(false);
        bodyElement.style.overflow = "auto";
    }

    function signOut() {
        localStorage.clear();
        setIsLogined(false);
        setFilteredMovies([]);
        navigate("/", { replace: true });
    }

    function getUserInfo() {
        mainApi.getUserInfo().then((info) => setCurrentUser(info));
    }

    useEffect(() => {
        if (isLogined) {
            Promise.all([mainApi.getSavedMovies(), mainApi.getUserInfo()])
                .then(([savedMovies, userInfo]) => {
                    setCurrentUser(userInfo);
                    setSavedMovies(savedMovies);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [isLogined]);

    useEffect(() => {
        function handleTokenCheck() {
            const token = localStorage.getItem("token");
            if (token) {
                mainApi
                    .checkToken()
                    .then((res) => {
                        if (res) {
                            setIsLogined(true);
                            navigate("/movies", { replace: true });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        }

        handleTokenCheck();
    }, []);

    function handleLogin(formValue) {
        mainApi
            .signin(formValue)
            .then(() => {
                setIsLogined(true);
                getUserInfo();
                navigate("/movies", { replace: true });
            })
            .catch((err) => {
                console.log(err);
                if (err.message === "Failed to fetch") {
                    setError("500 На сервере произошла ошибка.");
                } else setError(err.message);
            });
    }

    function handleRegister(formValue) {
        mainApi
            .signup(formValue)
            .then((res) => {
                handleLogin({
                    email: formValue.email,
                    password: formValue.password,
                });
                setIsLogined(true);
            })
            .catch((err) => {
                if (err.message === "Failed to fetch") {
                    setError("500 На сервере произошла ошибка.");
                } else setError(err.message);
            });
    }

    function handleMovieSave(movie, isSaved) {
        if (!isSaved) {
            const movieData = {
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co/beatfilm-movies${movie.image.url}`,
                trailerLink: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co/beatfilm-movies${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
            };
            mainApi
                .addMovie(movieData)
                .then((newMovie) => {
                    setSavedMovies((prevSavedMovies) => [
                        ...prevSavedMovies,
                        newMovie,
                    ]);
                })
                .catch((err) => console.log(err));
        } else {
            mainApi
                .delMovie(movie._id)
                .then(() => {
                    setSavedMovies((prevSavedMovies) =>
                        prevSavedMovies.filter((c) => { 
                            return c.movieId !== movie.movieId
                        })
                    );
                })
                .catch((err) => console.log(err));
        }
    }

    function searchMovies({ inputValue, isActiveShort }) {
        addMoviesInLocalStoreg({ inputValue, isActiveShort });
    }

    function addMoviesInLocalStoreg({ inputValue, isActiveShort }) {
        localStorage.setItem("searchValue", JSON.stringify(inputValue));
        localStorage.setItem("isActiveShort", isActiveShort);

        if (localStorage.getItem("allMovies")) {
            const filterData = filterMovies(movies, inputValue, isActiveShort);
            setFilteredMovies(filterData);
        } else {
            setIsPreloader(true);
            api.getMovies()
                .then((movies) => {
                    setMovies(movies);
                    localStorage.setItem("allMovies", JSON.stringify(movies));
                    const filterData = filterMovies(
                        movies,
                        inputValue,
                        isActiveShort
                    );
                    setFilteredMovies(filterData);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setIsPreloader(false); // Сброс прелоадера после завершения операций
                });
        }
    }

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Routes>
                    <Route
                        path="/signup"
                        element={
                            <Register
                                errorMessage={error}
                                handleRegister={handleRegister}
                                setError={setError}
                            />
                        }
                    />
                    <Route
                        path="/signin"
                        element={
                            <Login
                                errorMessage={error}
                                handleLogin={handleLogin}
                                setError={setError}
                            />
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header
                                    isLogined={isLogined}
                                    openPopupMenu={openPopupMenu}
                                    closeAllPopup={closeAllPopup}
                                    isOpened={isPopupMenu}
                                />
                                <Main />
                                <Footer />
                            </>
                        }
                    />
                    <Route
                        path="/movies"
                        element={
                            <ProtectedRouteElement isLogined={isLogined}>
                                <Header
                                    isLogined={isLogined}
                                    openPopupMenu={openPopupMenu}
                                    closeAllPopup={closeAllPopup}
                                    isOpened={isPopupMenu}
                                />
                                <Movies
                                    searchMovies={searchMovies}
                                    filteredMovies={filteredMovies}
                                    onMovieSave={handleMovieSave}
                                    isPreloaderActive={isPreloader}
                                    savedMovies = {savedMovies}
                                />
                                <Footer />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="/saved-movies"
                        element={
                            <ProtectedRouteElement isLogined={isLogined}>
                                <Header
                                    isLogined={isLogined}
                                    openPopupMenu={openPopupMenu}
                                    closeAllPopup={closeAllPopup}
                                    isOpened={isPopupMenu}
                                />
                                <SavedMovies
                                    savedMovies={
                                        savedMovies
                                    }
                                    onMovieSave={handleMovieSave}
                                />
                                <Footer />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRouteElement isLogined={isLogined}>
                                <Header
                                    isLogined={isLogined}
                                    openPopupMenu={openPopupMenu}
                                    closeAllPopup={closeAllPopup}
                                    isOpened={isPopupMenu}
                                />
                                <Profile signOut={signOut} />
                            </ProtectedRouteElement>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <PopupMenu isOpened={isPopupMenu} />
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
