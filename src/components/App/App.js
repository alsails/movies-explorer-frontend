import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  const isLogined = true
  return (
    <div className="page">
      {/* <Main /> */}
      <Movies isLogined={isLogined} />
      <Footer />
    </div>
  );
}

export default App;
