import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import Login from '../Login/Login';
import NotFound from "../NotFound/NotFound";
import Register from '../Register/Register';

import "./App.css";
import PopupMenu from "../PopupMenu/PopupMenu";
import { useState } from "react";

function App() {
    const [isPopupMenu, setIsPopupMenu] = useState(false);
    const isLogined = true;

    function openPopupMenu() {
        setIsPopupMenu(true);
        document.body.style.overflow = 'hidden';
    }

    function closeAllPopup() {
        setIsPopupMenu(false)
        document.body.style.overflow = 'auto';
    }

    return (
        <div className="page">
            <Routes>
                <Route path="/sign-up" element={
                    <Register /> 
                } />
                <Route path="/sign-in" element={
                    <Login /> 
                } />
                {/* <Header isLogined={isLogined} openPopupMenu={openPopupMenu} closeAllPopup={closeAllPopup} isOpened={isPopupMenu}/> */}
                {/* <Main/> */}
                {/* <Movies /> */}
                {/* <Footer /> */}
                {/* <NotFound /> */}
            </Routes>
            <PopupMenu isOpened={isPopupMenu}/>
        </div>
    );
}

export default App;
