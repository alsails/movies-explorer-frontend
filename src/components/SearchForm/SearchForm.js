import { useState } from 'react';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm({ searchMovies, filteredMovies }) {
    const { values, handleChange, setValues } = useForm({});
    const [isActiveShort, setIsActiveShort] = useState(false); // Добавляем состояние isActive

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFilter()
    };

    function handleFilter(isActiveShort) {
        if (!values.searchValue) {
            return;
        }
        searchMovies({inputValue: values.searchValue, isActiveShort: isActiveShort})
    }

    return (
        <section className="searchForm">
            <div className="searchForm__container">
                <form
                    className="searchForm__form"
                    action="submit"
                    onSubmit={handleSubmit}
                >
                    <SearchBar
                        handleChange={handleChange}
                        filteredMovies = {filteredMovies}
                        values = {values}
                        setValues = {setValues}
                    />
                    <FilterCheckbox handleFilter={handleFilter} isActiveShort={isActiveShort} setIsActiveShort={setIsActiveShort} filteredMovies = {filteredMovies}/>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
