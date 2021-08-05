import React from 'react';

import AnimeList from '../anime/AnimeList';
import AnimeListDay from '../anime/AnimeListDay';

const Homepage = () => {
    return (
        <>
            <h1 style = {{ color : "#ff0000" }}>
                <b aria-label="Temos um crédito consignado pré-aprovado com o valor de R$ 42kk"> 
                    Temos um crédito consignado pré-aprovado com o valor de R$ 42kk 
                </b>
            </h1>
            <p aria-hidden="true" style = {{ color : "#ff0000" }}>
                Confira as condições ai
            </p>
            <AnimeListDay />
            <AnimeList />
        </>
    );
}

export default Homepage;