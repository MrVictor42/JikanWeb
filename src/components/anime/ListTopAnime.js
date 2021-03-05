import React, { useState, useEffect } from 'react';
import { List, Image, Spin } from 'antd';

import { getListTopAnime } from '../../api/anime';

const ListTopAnime = () => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        syncList();
    },[]);

    async function syncList() {
        setLoading(true);
        const anime = await getListTopAnime();
        setAnimeList(anime.data);
        setLoading(false);
    }

    return (
        loading ? (
            <Spin tip = 'Loading Manga List, Wait For ...' className = 'loadingSpin'/>
        ) : (
            <>
                <div 
                    style = {{ fontFamily: 'Roboto,sans-serif', WebkitFontSmoothing: 'antialiased', 
                    margin: 0, padding: 0, boxSizing: 'border-box' }}
                >
                    <div style = {{ display: 'flex', alignItems: 'center' }}>
                        <h2 style = {{ color: '#1890ff', textTransform: 'uppercase', fontSize: '18px', fontWeight: 700, letterSpacing: '1.2px', marginLeft: '40px' }}> 
                            Top List Anime  
                        </h2>
                        <div style = {{ flex: 1, borderBottom: '1px solid #9e9e9e', marginLeft: '12px', borderRadius: '8px', marginRight: '35px' }}></div>
                    </div>
                </div>
                <List
                    itemLayout = 'vertical' size = 'small'
                    pagination = {{ 
                        position: 'both', showSizeChanger: false }
                    } 
                    grid = {{ column: 5 }}
                    dataSource = { animeList } 
                    style = {{ 
                        margin: 'auto', width: 'auto', paddingLeft: '30px', 
                        paddingRight: '35px' 
                    }}
                    renderItem = { anime => (
                        <List.Item key = { anime.title }>
                            <List.Item.Meta style = {{ paddingTop: '20px' }} />
                            <List.Item.Meta
                                avatar = { 
                                    <a href = { `/top/${ anime.slug }` }> 
                                    { 
                                        <Image className = 'img_list' src = { anime.image_url } 
                                            preview = { false } 
                                        /> 
                                    } 
                                    </a> 
                                }
                            />
                        </List.Item>
                    )}
                />
            </>
        )
    )
};

export default ListTopAnime;