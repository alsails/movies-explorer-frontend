import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox() {
    const [isActive, setIsActive] = React.useState(false);
    function switchOn() {
        if (isActive === true) {
            setIsActive(false)
        }
        else setIsActive(true)
    }

  return (
    <section className='filterCheckbox'>
        <p className='filterCheckbox__text'>Короткометражки</p>
        <label>
            <input type="checkbox" name="checkboxName" className="checkbox"/>
            <div className={`switch ${isActive ? 'switchOn' : ''}`} onClick={switchOn}></div>
        </label>
    </section>
  );
}

export default FilterCheckbox;