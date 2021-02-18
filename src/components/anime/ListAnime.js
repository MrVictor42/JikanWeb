import React, { useState, useEffect } from 'react';
import { List, Image, Spin } from 'antd';

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
            setLoading(false);
        }

        syncList();
    }, []);
    
    return (
        loading ? (
            <Spin tip = 'Loading Anime, Wait For ...' className = 'loadingSpin'/>
        ) : (
            <List
                itemLayout = 'vertical' size = 'small'
                pagination = {{ 
                    position: 'both', showSizeChanger: false}} grid = {{ column: 2 }}
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
                            style = {{ paddingTop: '20px' }}
                            title= { 
                                <a href = { `/anime/${ item.slug }` }> 
                                    { <b> { item.title } </b> } 
                                </a> 
                            }
                        />
                        <List.Item.Meta
                            avatar = { <Image width = { 'auto' } src = { item.image_url } /> }
                            description = { <DetailsLists item = { item } visible = { false }/> }
                        />
                    </List.Item>
                )}
            />
        )
    );
}

export default ListAnime;