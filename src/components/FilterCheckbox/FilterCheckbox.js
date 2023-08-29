import { useEffect, useState } from 'react';
import './FilterCheckbox.css';


function FilterCheckbox({isActiveShort, setIsActiveShort, filteredMovies, handleFilter}) {

    useEffect(() => {
        if (filteredMovies) {
        setIsActiveShort(JSON.parse(localStorage.getItem("isActiveShort"))) }
    }, [])

    function switchOn() {
        setIsActiveShort(!isActiveShort);
        handleFilter(!isActiveShort) 
    }

  return (
    <div className='filterCheckbox'>
        <div className='filterCheckbox__container' >
            <label>
                <input type="checkbox" name="checkboxName" className="checkbox"/>
                <div className={`switch ${isActiveShort ? 'switchOn' : ''}`} onClick={switchOn}></div>
            </label>
            <p className='filterCheckbox__text'>Короткометражки</p>
        </div>
    </div>
  );
}

export default FilterCheckbox;