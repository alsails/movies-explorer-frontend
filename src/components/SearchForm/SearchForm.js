import { useState } from 'react';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm({ addMoviesInLocalStoreg }) {
    const { values, handleChange, setValues } = useForm({});
    const [isActiveShort, setIsActiveShort] = useState(false); // Добавляем состояние isActive

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.searchValue) {
            return;
        }

        addMoviesInLocalStoreg({inputValue: values.searchValue, isActiveShort: isActiveShort})
    };

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
                        onSubmit={handleSubmit}
                        values={values}
                    />
                    <FilterCheckbox isActiveShort={isActiveShort} setIsActiveShort={setIsActiveShort}/>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;
