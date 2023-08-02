import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchForm.css";

function SearchForm() {
    return (
        <section className="searchForm">
            <div className="searchForm__container">
                <form className="searchForm__form">
                    <SearchBar />
                    <FilterCheckbox />
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
