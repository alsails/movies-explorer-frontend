import { useState, useEffect } from 'react';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm({ searchMovies, filteredMovies, isSaved }) {
    const { values, handleChange, setValues } = useForm({});
    const [isActiveShort, setIsActiveShort] = useState(false); 
    const [isSearchSaveValue, setIsSearchSaveValue] = useState();
    const [isInputValid, setIsInputValid] = useState(true)
    const [isWidth, setIsWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function() {
            setTimeout(() => {
                setIsWidth(window.innerWidth);
            }, 300);
        });
    }, [])

    const handleSubmit = (e) => {
        if (values.searchValue !== "" && values.searchValue !== undefined && values.searchValue !== null) {
            e.preventDefault()
            setIsInputValid(true)
            handleFilterMovies(isActiveShort)
        }
        else {
            e.preventDefault()
            setIsInputValid(false)
        }
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
                    noValidate
                >
                    <SearchBar
                        handleChange={handleChange}
                        filteredMovies = {filteredMovies}
                        values = {values}
                        setValues = {setValues}
                        isSaved = {isSaved}
                        isSearchSaveValue = {isSearchSaveValue}
                        isInputValid = {isInputValid}
                    />
                    {!isInputValid && (isWidth <= 500) && <p className='searchForm__form-error'>Нужно ввести ключевое слово</p>}
                    <FilterCheckbox handleFilterMovies={handleFilterMovies}isActiveShort={isActiveShort} setIsActiveShort={setIsActiveShort} filteredMovies = {filteredMovies}/>
                </form>
                {!isInputValid && (isWidth > 500) && <p className='searchForm__form-error'>Нужно ввести ключевое слово</p>}
            </div>
        </section>
    );
}

export default SearchForm;
