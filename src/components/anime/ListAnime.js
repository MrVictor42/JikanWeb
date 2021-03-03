import React, { useState, useEffect } from 'react';
import { List, Image, Spin } from 'antd';

import notFound from '../../images/naruto_sad.gif';

const ListAnime = (props) => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        setLoading(props.loading);
        setAnimeList(props.list);
    });

    return (
        animeList === undefined ? (
            <>
                <span className = 'spanNotFound'> 
                    Not Found List Anime With This Gender and Producer Together... Try Another Combination or Click on "Restore" 
                </span>
                <img src = { notFound } alt = { 'Not Found Search' } className = 'sad_gif'/>
            </>
        ) : (
            loading ? (
                <Spin tip = 'Loading Anime List, Wait For ...' className = 'loadingSpin'/>
            ) : (
                <List
                    itemLayout = 'vertical' size = 'small'
                    pagination = {{ 
                        position: 'both', showSizeChanger: false, pageSize: 4 }
                    } 
                    grid = {{ column: 4 }}
                    dataSource = { animeList } 
                    style = {{ 
                        margin: 'auto', width: 'auto', paddingLeft: '30px', 
                        paddingRight: '35px' 
                    }}
                    renderItem = { item => (
                        <List.Item key = { item.title }>
                            <List.Item.Meta style = {{ paddingTop: '20px' }} />
                            <List.Item.Meta
                                avatar = { 
                                    <a href = { `/anime/${ item.slug }` }> 
                                    { 
                                        <Image className = 'img_list' src = { item.image_url } 
                                            preview = { false } 
                                        /> 
                                    } 
                                    </a> 
                                }
                            />
                        </List.Item>
                    )}
                />
            )
        )
    );
}

export default ListAnime;