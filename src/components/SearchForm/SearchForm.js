import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchBar from '../SearchBar/SearchBar';
import './SearchForm.css';


function SearchForm() {
  return (
    <section className='searchForm'>
      <div className='searchForm__container'>
        <SearchBar />
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;