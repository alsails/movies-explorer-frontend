import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  );
}

export default App;
