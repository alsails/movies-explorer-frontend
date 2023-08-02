import "./SearchBar.css";
import search from "../../images/icons/search.svg";

function SearchBar() {
    return (
        <div className="searchBar">
            <img
                src={search}
                alt="Графическое изобрадение поисковой строки"
                className="searchBar__img"
            />
            <input
                type="text"
                placeholder="Фильм"
                className="searchBar__input"
                required
            />
            <button type="submit" className="searchBar__button" />
        </div>
    );
}

export default SearchBar;
