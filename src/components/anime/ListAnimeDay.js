import React, { useState, useEffect } from 'react';
import { List } from 'antd';

import { getListAnimeDay } from '../../api/anime';
import { dayOfWeek } from '../../services/auxServices';

import DetailAnime from './modals/DetailAnime';

const ListAnimeDay = (props) => {

    const [loading, setLoading] = useState(true);
    const [animeList, setAnimeList] = useState([]);
    const [day, setDay] = useState();

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
        setDay(day);
        setLoading(false);
	}

    return (
        <>
            {
                props.visible === true && loading === false ? (
                    <>
                        <div 
                            style = {{ fontFamily: 'Roboto,sans-serif', WebkitFontSmoothing: 'antialiased', 
                            margin: 0, padding: 0, boxSizing: 'border-box' }}
                        >
                            <div style = {{ display: 'flex', alignItems: 'center' }}>
                                <h2 style = {{ color: '#1890ff', textTransform: 'uppercase', fontSize: '18px', fontWeight: 700, letterSpacing: '1.2px', marginLeft: '40px' }}> 
                                    Anime List of { day } 
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
                            renderItem = { anime => (
                                <List.Item 
                                    key = { anime.mal_id } 
                                    actions = {[ <DetailAnime anime_id = { anime.mal_id }/> ]}
                                >
                                </List.Item>
                            )}
                        />
                    </>
                ) : (
                    null
                )
            }
        </>
    )
};

export default ListAnimeDay;