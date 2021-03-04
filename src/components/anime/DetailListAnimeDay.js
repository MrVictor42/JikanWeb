import React, { useState, useEffect } from 'react';
import { Image, Card, Col, Row, Spin } from 'antd';
import ReactPlayer from 'react-player';

import { getAnimeDay } from '../../api/anime';

const { Meta } = Card;

const DetailListAnimeDay = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();

    useEffect(() => {
        getAnimeDayDetail();
    },[]);

    async function getAnimeDayDetail() {
		setLoading(true);
        const anime = await getAnimeDay(props.match.params.mal_id);
        // const animeResult = anime.data.map(function(anime) {
        //     return {
        //         key: anime.id,
        //         image_url: anime.image_url,
        //         title: anime.title,
        //         synopsis: anime.synopsis,
        //         score: anime.score,
        //         episodes: anime.episodes,
        //         status: anime.status,
        //         airing_start: anime.airing_start
        //     }
        // });
        setAnime(anime.data);
        setLoading(false);
    }

    const genres = anime.genres.map(function(gender) {
        if(gender.name === null) {
            return '';
        } else {
            return gender.name + " | ";
        }
    });

    console.log(anime.genres)
    return (
        loading ? (
            <Spin tip = 'Loading Anime, Wait For ...' className = 'loadingSpin'/>
        ) : (
                <Row gutter = { 16 } style = {{ width: 'auto', marginTop: 20, height: 'auto' }}>
                    <Col span = { 12 }>
                        <Card bordered = { true } style = {{ paddingLeft: 20 }}>
                            <Meta
                                avatar = {
                                    <Image className = 'img_list' src = { anime.image_url } />
                                }
                                title = { <b> { anime.title } </b> }
                                description = {
                                    <>
                                        <p align = 'justify' style = {{ fontSize: '16px' }}> 
                                            <b> Synopsis: </b> { anime.synopsis } 
                                        </p>
                                        <p style = {{ fontSize: '16px' }}> 
                                            <b> Score: </b> { anime.score } 
                                        </p>
                                        <p style = {{ fontSize: '16px' }}>
                                            <b> Genres: </b> { genres }
                                        </p>
                                        <p style = {{ fontSize: '16px' }}> 
                                        <b> Episodes: </b> { anime.episodes }
                                        </p>
                                        <p style = {{ fontSize: '16px' }}> 
                                            <b> Status: </b> { anime.status }
                                        </p>
                                        <br/>
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                    <Col span = { 12 }>
                        <Card bordered = { true }>
                            <h1 style = {{ fontSize: '20px', textAlign: 'center' }}> 
                                <b> Trailer: { anime.title } </b> 
                            </h1>
                            {
                                anime.trailer_url.includes('youtube') ? (
                                    <ReactPlayer 
                                        url = { anime.trailer_url }
                                    />
                                ) : (
                                    <h1> { anime.trailer_url } </h1>
                                )
                            } 
                        </Card>
                    </Col>
                </Row>
            )
        )
};

export default DetailListAnimeDay;