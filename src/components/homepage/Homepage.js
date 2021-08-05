import React from 'react';

import AnimeList from '../anime/AnimeList';
import AnimeListDay from '../anime/AnimeListDay';

const Homepage = () => {
    return (
        <>
            <p style = {{ color : "#ff0000" }}>
                <span aria-label="Confira as condições e contrate até R$ 420.000">
                    Confira as condi&ccedil;&otilde;es e contrate até&nbsp; 
                    <span className = "d-inline">
                        R$ 420.000
                    </span>
                </span>
            </p>
            {/* <h1 style = {{ color : "#ff0000" }}>
                <b aria-label="Temos um crédito consignado pré-aprovado com o valor de R$ 42kk"> 
                    Temos um crédito consignado pré-aprovado com o valor de R$ 42kk 
                </b>
            </h1>
            <p aria-label="Confira as condições... com hidden igual a true" aria-hidden = "true">
                <span style = {{ color : "#ff0000" }}>
                    Confira as condições... com hidden igual a true
                </span>
            </p>
            <p aria-label="Confira as condições... com hidden igual a false" aria-hidden = "false">
                <span aria-hidden="false" style = {{ color : "#ff0000" }}>
                Confira as condições... com hidden igual a false
                </span>
            </p>
            <p aria-hidden="true" style = {{ color : "#ff0000" }}>
                Confira as condições ai
            </p>

            <p style = {{ color : "#ff0000" }} aria-label="Temos um crédito consignado pré-aprovado com o valor de R$ 42kk">
                <b aria-label="Temos um crédito consignado pré-aprovado com o valor de R$ 42kk"> 
                    SAMSUNG
                </b>
            </p> */}
            <AnimeListDay />
            
            <AnimeList />
        </>
    );
}

export default Homepage;