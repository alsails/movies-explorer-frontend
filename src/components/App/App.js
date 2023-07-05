// import Main from '../Main/Main';
import Movies from "../Movies/Movies";
// import Footer from '../Footer/Footer';
import Header from "../Header/Header";
// import Login from '../Login/Login';
import NotFound from "../NotFound/NotFound";
// import Register from '../Register/Register';

import "./App.css";
import PopupMenu from "../PopupMenu/PopupMenu";
import { useState } from "react";

function App() {
    const [isPopupMenu, setIsPopupMenu] = useState(false);
    const isLogined = false;

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
            <Header isLogined={isLogined} openPopupMenu={openPopupMenu} closeAllPopup={closeAllPopup} isOpened={isPopupMenu}/>
            {/* <Main/> */}
            {/* <Movies /> */}
            {/* <Footer /> */}
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <NotFound /> */}
            <PopupMenu isOpened={isPopupMenu}/>
        </div>
    );
}

export default App;
