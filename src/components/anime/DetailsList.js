import React from 'react';

const DetailsLists = ({ item }) => {

    return (
        <>
            <p> Score: { item.score } </p> 
            <p> Gender: { item.genders[0].name  }</p>
        </>
    );
}

export default DetailsLists;