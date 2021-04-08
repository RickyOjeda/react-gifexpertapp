import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    };
    const handleSubmit=(e)=>{//esto es para que no se refresque toda la pagina
        e.preventDefault();
        if(inputValue.trim().length>2){
            // console.log('Submit hecho');
            setCategories(cats=>[inputValue,...cats]);
            setInputValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
};