import './SearchBar.css';
import search from '../../images/icons/search.svg'


function SearchBar() {
  return (
    <section className='searchBar'>
        <img src={search} alt='Графическое изобрадение поисковой строки' className='searchBar__img'/>
        <input type="text" placeholder='Фильм' className='searchBar__input' />
        <button className='searchBar__button'/>
    </section>
  );
}

export default SearchBar;