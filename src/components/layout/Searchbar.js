import React, { useState, useEffect } from 'react';
import { Input, AutoComplete, Avatar, Image } from 'antd';

import { getListAnime } from '../../api/anime';

import '../../css/searchbar.css';

const Searchbar = () => {

    const[animeList, setAnimeList] = useState([]);
    
    useEffect(() => {
        async function getAnimeList() {
            const anime = await getListAnime();
            const animeForSearch = anime.data.map(function(item) {
                return {
                    key: item.id,
                    value: item.title,
                    label: (
                        <div>
                            <Avatar 
                                shape = 'square' size = { 64 } 
                                icon = { <Image  src = { item.image_url } />}
                            />
                            <a href = { `/anime/${ item.slug }` }> <b> { item.title } </b> </a>

                        </div>
                    )
                };
            });
            setAnimeList(animeForSearch);
        }

        getAnimeList();
    }, []);

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