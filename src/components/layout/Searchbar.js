import React, { useState, useEffect } from 'react';
import { Input, AutoComplete } from 'antd';

import { getListAnime } from '../../api/anime';
import '../../css/searchbar.css';

const Searchbar = () => {

    const[animeList, setAnimeList] = useState([]);
    const[slug, setSlug] = useState();
    
    useEffect(() => {
        async function getAnimeList() {
            const anime = await getListAnime();
            const animeData = anime.data;
            const animeInSearch = animeData.map(function(item) {
                return {
                    key: item.id,
                    slug: item.slug,
                    value: item.title
                }
            });
            setAnimeList(animeInSearch);
        }

        getAnimeList();
    }, []);

    const onSelect = (data, anime) => {
        console.log(data);
        setSlug(anime.slug);
    };

    const onSearch = (value) => {
        console.log(value)
        
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth = { 252 } className = 'searchbar' options = { animeList } 
            filterOption = {(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            } onSelect = { onSelect }
        >
            <Input.Search 
                allowClear placeholder = 'Search Here' 
                enterButton 
            />
        </AutoComplete>
    );
}

export default Searchbar;