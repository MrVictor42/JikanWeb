import React, { useState, useEffect } from 'react';
import { Input, AutoComplete, Avatar, Image } from 'antd';

import { getListAnime } from '../../api/anime';

import '../../css/searchbar.css';

const Searchbar = () => {

    const[animeList, setAnimeList] = useState([]);
    
    useEffect(() => {
        getAnimeList();
    }, []);

    async function getAnimeList() {
        const anime = await getListAnime();
        const animeForSearch = anime.data.map(function(anime) {
            return {
                key: anime.id,
                value: anime.title,
                label: (
                    <>
                        <Avatar 
                            shape = 'square' size = { 64 } 
                            icon = { <Image  src = { anime.image_url } />}
                        />
                        <a href = { `/anime/${ anime.slug }` }> <b> { anime.title } </b> </a>
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
            <Input placeholder = 'Search Here...' />
        </AutoComplete>
    );
}

export default Searchbar;