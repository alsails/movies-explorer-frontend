import { useState, useEffect } from 'react';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm({ searchMovies, filteredMovies, isSaved }) {
    const { values, handleChange, setValues } = useForm({});
    const [isActiveShort, setIsActiveShort] = useState(false); 
    const [isSearchSaveValue, setIsSearchSaveValue] = useState();// Добавляем состояние isActive

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFilterMovies(isActiveShort)
    };

    function handleFilterMovies(isActiveShort) {
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
                        isSaved={isSaved}
                        isSearchSaveValue={isSearchSaveValue}
                    />
                    <FilterCheckbox handleFilterMovies={handleFilterMovies}isActiveShort={isActiveShort} setIsActiveShort={setIsActiveShort} filteredMovies = {filteredMovies}/>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
