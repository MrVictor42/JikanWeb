import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';

import '../../css/searchbar.css';

const Searchbar = () => {

    const [options, setOptions] = useState([]);
    const handleSearch = (value) => {
        setOptions(value ? searchResult(value) : []);
    };
    
    const onSelect = (value) => {
        console.log('onSelect', value);
    };

    const getRandomInt = (max, min = 0) => {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    const searchResult = (query) => {
        return new Array(getRandomInt(5))
          .join('.')
          .split('.')
          .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                    >
                    <span>
                        Found {query} on{' '}
                        <a
                        href={`https://s.taobao.com/search?q=${query}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {category}
                        </a>
                    </span>
                    <span>{getRandomInt(200, 100)} results</span>
                </div>
                ),
            };
        });
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth = { 252 } className = 'searchbar' options = { options }
            onSelect = { onSelect } onSearch = { handleSearch } >
            <Input.Search  placeholder = 'Search Here' enterButton  />
        </AutoComplete>
    );
}

export default Searchbar;