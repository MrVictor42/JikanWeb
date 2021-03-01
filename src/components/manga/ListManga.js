import React, { useState, useEffect } from 'react';
import { List, Image, Spin } from 'antd';

import { getListManga } from '../../api/manga';

const ListManga = () => {

    const [loading, setLoading] = useState(true);
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        syncList();
    },[]);

    async function syncList() {
        setLoading(true);
        const manga = await getListManga();
        setMangaList(manga.data);
        setLoading(false);
    }

    console.log(mangaList)

    return (
        loading ? (
            <Spin tip = 'Loading Manga List, Wait For ...' className = 'loadingSpin'/>
        ) : (
            <List
                itemLayout = 'vertical' size = 'small'
                pagination = {{ 
                    position: 'both', showSizeChanger: false }
                } 
                grid = {{ column: 5 }}
                dataSource = { mangaList } 
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
};

export default ListManga;