import { useEffect, useState } from 'react';

import "./SearchBar.css";
import search from "../../images/icons/search.svg";

function SearchBar({ handleChange, values, filteredMovies, setValues, isSaved, isSearchSaveValue }) {
    const [isSearchValue, setIsSearchValue] = useState(() => {
        if (!isSaved) {
          return JSON.parse(localStorage.getItem("searchValue")) 
        } 
    });

    useEffect(() => {
        if (filteredMovies) {
            setValues({ searchValue: isSearchValue });
        }
    }, []);

    return (
        <div className="searchBar">
            <img
                src={search}
                alt="Графическое изобрадение поисковой строки"
                className="searchBar__img"
            />
            <input
                type="text"
                id="searchValue-input"
                className="searchBar__input"
                name="searchValue"
                value={values.searchValue || ''}
                onChange={handleChange}
                placeholder="Фильм"
                required
            />
            <button
                type="submit"
                className="searchBar__button"
            />
        </div>
    );
}

export default SearchBar;
