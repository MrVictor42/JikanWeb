import React from 'react';

const DetailsLists = ({ item }) => {

    return (
        <>
            <p align = 'justify'> <b> Synopsis: </b> { item.synopsis } </p>
            <p> Score: { item.score } </p> 
            <p> Gender: { item.genders[0].name  }</p>
        </>
    );
}

export default DetailsLists;