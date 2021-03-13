import React from 'react';
import { List, Spin, Divider } from 'antd';

import DetailAnime from '../modals/DetailAnime';

const ListAnime = (props) => {

    return (
        props.animeList === undefined ? (
            null
        ) : (
            props.loading ? (
                <Spin tip = { props.message } className = 'loadingSpin'/>
            ) : (
                <>
                    <div 
                        style = {{ fontFamily: 'Roboto,sans-serif', WebkitFontSmoothing: 'antialiased', 
                        margin: 0, padding: 0, boxSizing: 'border-box' }}
                    >
                        <div style = {{ display: 'flex', alignItems: 'center' }}>
                            <h2 style = {{ color: '#1890ff', textTransform: 'uppercase', fontSize: '18px', fontWeight: 700, letterSpacing: '1.2px', marginLeft: '40px' }}> 
                                { props.messageType }
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
                        dataSource = { props.animeList } 
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
                    <Divider />
                </>
            )
        )
    );
};

export default ListAnime;