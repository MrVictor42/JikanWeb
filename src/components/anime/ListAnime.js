import React, { useState, useEffect } from 'react';
import { List, Image } from 'antd';

import { getListAnime } from '../../api/anime';
import DetailsLists from './DetailsList';

const ListAnime = () => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        async function syncList() {
            setLoading(true);
            const anime = await getListAnime();
            setAnimeList(anime.data);
            console.log(anime.data)
            setLoading(false);
        }

        syncList();
    }, []);
    
    return (
        <List
            itemLayout = 'vertical' size = 'small'
            pagination = {{ position: 'both', showSizeChanger: true, pageSizeOptions: ["4", "10", "100", "1000"] }} grid = {{ column: 2 }}
            dataSource = { animeList } 
            style = {{ 
                margin: 'auto', width: 'auto', paddingLeft: '30px', 
                paddingRight: '30px' 
            }}
            renderItem = { item => (
                <List.Item 
                    key = { item.title }
                >
                    <List.Item.Meta
                        title= { <a href = { item.href }> { <b> { item.title } </b> } </a> }
                    />
                    <List.Item.Meta
                        avatar = { <Image width = { 200 } src = { item.image_url } /> }
                        description = { <DetailsLists item = { item }/> }
                    />
                </List.Item>
            )}
        />
    );
}

export default ListAnime;