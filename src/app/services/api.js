// Assuming this is in a file named something like 'api.js'

'use client'; // I assume you meant 'use strict'

// const url = 'https://dummyjson.com';

export const loadData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // const {categories} = data ;
    // console.log(products, 'datasds'); 
    return data;
};
