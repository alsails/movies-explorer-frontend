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

function App() {
    const bodyElement = document.querySelector("body");
    const [isPopupMenu, setIsPopupMenu] = useState(false);
    const [isLogined, setIsLogined] = useState(false);
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem("movies")));
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
        setFilteredMovies([])
        navigate("/", { replace: true });
    }

    function getUserInfo() {
        mainApi.getUserInfo().then((info) => setCurrentUser(info));
    }

    useEffect(() => {
        if (isLogined) {
            api.getMovies()
                .then((movies) => {
                    setMovies(movies);
                })
                .catch((err) => {
                    console.log(err);
                });
            getUserInfo();
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

    function handelFilterMovies(inputValue, isActiveShort) {
        const isRussianRegex = /[а-яА-ЯЁё]/.test(inputValue);

        return movies.filter((movie) => {
            const movieToCompare = isRussianRegex ? movie.nameRU : movie.nameEN;
            const matchesMovies = movieToCompare
                .toLowerCase()
                .includes(inputValue.toLowerCase());

            if (isActiveShort) {
                return matchesMovies && movie.duration <= 40; 
            }

            return matchesMovies;
        });
    }

    function addMoviesInLocalStoreg({ inputValue, isActiveShort }) {
        const filterMovies = handelFilterMovies(inputValue, isActiveShort); 

        if (filterMovies.length === 0) {
            const dataToSave = {
                searchValue: inputValue,
                isActiveShort: isActiveShort,
                answer: "Ничего не найдено",
            };

            localStorage.setItem("movies", JSON.stringify(dataToSave));
            setFilteredMovies(dataToSave)
        } else {
            const dataToSave = {
                searchValue: inputValue,
                isActiveShort: isActiveShort,
                filteredMovies: filterMovies,
            };
    
            localStorage.setItem("movies", JSON.stringify(dataToSave));
            setFilteredMovies(dataToSave)
        }
    }

    window.addEventListener('storage', (event) => console.log(event));

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
                                    addMoviesInLocalStoreg={
                                        addMoviesInLocalStoreg
                                    }
                                    filteredMovies = {filteredMovies}
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
                                    addMoviesInLocalStoreg={
                                        addMoviesInLocalStoreg
                                    }
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
