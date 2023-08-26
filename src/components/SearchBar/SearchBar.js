import { useEffect } from 'react';

import "./SearchBar.css";
import search from "../../images/icons/search.svg";

function SearchBar({ handleChange, values, filteredMovies, setValues }) {
    useEffect(() => {
        setValues({searchValue: filteredMovies.searchValue})
    }, [])
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
