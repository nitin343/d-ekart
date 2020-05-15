import React from 'react';

export const SearchBox = ({onChange}) => {
    return(
    <input type='search' 
    placeholder='search products' 
    onChange={onChange}
    />
    )
    }