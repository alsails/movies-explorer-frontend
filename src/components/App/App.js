// import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
// import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
// import Register from '../Register/Register';

import './App.css';

function App() {
  const isLogined = true
  return (
    <div className="page">
        {/* <Header isLogined={isLogined} /> */}
        {/* <Main/> */}
        {/* <Movies isLogined={isLogined} /> */}
        {/* <Footer /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <NotFound />
    </div>
  );
}

export default App;
