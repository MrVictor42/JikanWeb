import React, { useState, useEffect } from 'react';
import { List, Image } from 'antd';

import { getListAnimeDay } from '../../api/anime';
import { dayOfWeek } from '../../services/auxServices';

const ListAnimeDay = (props) => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
		getAnimeListDay();
    }, []);

    async function getAnimeListDay() {
		setLoading(true);
        const day = dayOfWeek();
		const anime = await getListAnimeDay(day);
        
        switch(day) {
            case 'sunday':
                setAnimeList(anime.data.sunday);
                break;
            case 'monday':
                setAnimeList(anime.data.monday);
                break;
            case 'tuesday':
                setAnimeList(anime.data.tuesday);
                break;
            case 'wednesday':
                setAnimeList(anime.data.wednesday);
                break;
            case 'thursday':
                setAnimeList(anime.data.thursday);
                break;
            case 'friday':
                setAnimeList(anime.data.friday);
                break;
            case 'saturday':
                setAnimeList(anime.data.saturday);
                break;
        }
        setLoading(false);
	}

    return (
        <div>
            {
                props.visible === true && loading === false? (
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
                ) : (
                    null
                )
            }
        </div>
    )
};

export default ListAnimeDay;