import React, { useState, useEffect } from 'react';
import { Input, AutoComplete, Avatar, Image } from 'antd';

import { getListAnime } from '../../api/anime';
import { currentSeason } from '../../services/consts';

import '../../css/searchbar.css';

const Searchbar = () => {

    const[animeList, setAnimeList] = useState([]);
    
    useEffect(() => {
        getAnimeList();
    }, []);

    async function getAnimeList() {
        const anime = await getListAnime();
        const animeForSearch = anime.map(function(anime) {
            return {
                key: anime.id,
                value: anime.title,
                label: (
                    <>
                        <a href = { `/anime/search/${ anime.mal_id }` }>
                            <Avatar 
                                shape = 'square' size = { 64 } 
                                icon = { <Image  src = { anime.image_url } preview = { false }/> }
                            />
                                <b> { anime.title } </b>
                        </a>
                    </>
                )
            };
        });
        setAnimeList(animeForSearch);
    }

    return (
        <AutoComplete
            dropdownClassName = 'certain-category-search-dropdown'
            dropdownMatchSelectWidth = { 300 } 
            className = 'searchbar'
            options = { animeList }
            filterOption = {(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
        >
            <Input 
                placeholder = { `Search Here Anime From Season ${ currentSeason }...` } 
                style = {{ textTransform: 'capitalize' }}
            />
        </AutoComplete>
    );
}

export default Searchbar;