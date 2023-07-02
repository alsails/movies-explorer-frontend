import './SearchBar.css';


function SearchBar() {
  return (
    <section className='searchBar'>
      <input type="text" placeholder='Фильм' className='searchBar__input' />
      <button className='searchBar__button'/>
    </section>
  );
}

export default SearchBar;