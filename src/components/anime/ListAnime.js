import React, { useState, useEffect } from 'react';
import { List, Image, Spin } from 'antd';

import DetailsLists from './DetailsList';
import notFound from '../../images/naruto_sad.gif';

const ListAnime = (props) => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        setLoading(props.loading);
        setAnimeList(props.list);
    });

    console.log(props)

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
                        position: 'both', showSizeChanger: false }
                    } 
                    grid = {{ column: 2 }}
                    dataSource = { animeList } 
                    style = {{ 
                        margin: 'auto', width: 'auto', paddingLeft: '30px', 
                        paddingRight: '35px' 
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
        )
    );
}

export default ListAnime;