import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";

import "./App.css";
import PopupMenu from "../PopupMenu/PopupMenu";
import { useState } from "react";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {
    const [isPopupMenu, setIsPopupMenu] = useState(false);
    const isLogined = false;

    function openPopupMenu() {
        setIsPopupMenu(true);
    }

    function closeAllPopup() {
        setIsPopupMenu(false);
    }

    return (
        <div className="page">
            <Routes>
                <Route path="/sign-up" element={<Register />} />
                <Route path="/sign-in" element={<Login />} />
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
                        <>
                            <Header
                                isLogined={isLogined}
                                openPopupMenu={openPopupMenu}
                                closeAllPopup={closeAllPopup}
                                isOpened={isPopupMenu}
                            />
                            <Movies />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/saved-movies"
                    element={
                        <>
                            <Header
                                isLogined={isLogined}
                                openPopupMenu={openPopupMenu}
                                closeAllPopup={closeAllPopup}
                                isOpened={isPopupMenu}
                            />
                            <SavedMovies />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <>
                            <Header
                                isLogined={isLogined}
                                openPopupMenu={openPopupMenu}
                                closeAllPopup={closeAllPopup}
                                isOpened={isPopupMenu}
                            />
                            <Profile />
                            <Footer />
                        </>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <PopupMenu isOpened={isPopupMenu} />
        </div>
    );
}

export default App;
