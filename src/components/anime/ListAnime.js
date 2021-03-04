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
                <>
                    <div 
                        style = {{ fontFamily: 'Roboto,sans-serif', WebkitFontSmoothing: 'antialiased', 
                        margin: 0, padding: 0, boxSizing: 'border-box' }}
                    >
                        <div style = {{ display: 'flex', alignItems: 'center' }}>
                            <h2 style = {{ color: '#1890ff', textTransform: 'uppercase', fontSize: '18px', fontWeight: 700, letterSpacing: '1.2px', marginLeft: '40px' }}> 
                                Anime List  
                            </h2>
                            <div style = {{ flex: 1, borderBottom: '1px solid #9e9e9e', marginLeft: '12px', borderRadius: '8px', marginRight: '35px' }}></div>
                        </div>
                    </div>
                    <List
                        itemLayout = 'vertical' size = 'small'
                        pagination = {{ 
                            position: 'bottom', showSizeChanger: false, pageSize: 4 }
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
                </>
            )
        )
    );
}

export default ListAnime;