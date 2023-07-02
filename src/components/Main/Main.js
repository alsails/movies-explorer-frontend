import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
}

export default Main;