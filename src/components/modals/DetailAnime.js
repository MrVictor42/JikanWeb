import React, { useState, useEffect } from 'react';
import { Drawer, Image, Col, Row, Card, Spin } from 'antd';
import ReactPlayer from 'react-player';

import { getAnimeDetailFromJikan } from '../../api/anime';

const { Meta } = Card;

const DetailAnime = (props) => {

    const [visible, setVisible] = useState(false);
    const [animeDetail, setAnimeDetail] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDetailAnime(props);
    }, []);

	async function getDetailAnime(props) {
        setLoading(true);
        const detail = await getAnimeDetailFromJikan(props.anime_id);
        setAnimeDetail(detail);
        setLoading(false);
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            {
                loading ? (
                    <Spin className = 'loadingSpin'/>
                ) : (
                    <>
                        <a onClick = { showDrawer }>
                            <Image 
                                className = 'img_list' src = { animeDetail.image_url }
                                preview = 'false' 
                            />    
                        </a>
                        <Drawer
                            title = { <b> { `Anime: ${ animeDetail.title }` } </b> } 
                            width = { 1370 } height = { 'auto' }
                            placement = 'right' closable = { true } onClose = { onClose } visible = { visible } preview = { false }
                        >
                            <Row 
                                gutter = { 20 } style = {{ width: 'auto', backgroundColor: 'white' }}
                            >
                                <Col span = { 12 }>
                                    <Card 
                                        style = {{ 
                                            width: 'auto', marginTop: 20, paddingLeft: 20, paddingRight: 20,
                                            textAlign: 'justify' 
                                        }}
                                        bordered = { false }
                                    >
                                        <Meta
                                            avatar = {
                                                <Image 
                                                    className = 'img_list' 
                                                    src = { animeDetail.image_url } 
                                                />
                                            }
                                            title = { <b> { animeDetail.title } </b> }
                                            description = {
                                                <>
                                                    <p> 
                                                        <b> Title Synonyms </b> 
                                                        { animeDetail.title_synonyms }
                                                    </p>
                                                    <p> 
                                                        <b> Synopsis: </b> 
                                                        { animeDetail.synopsis } 
                                                    </p>

                                                    { animeDetail.episodes === null ? (
                                                        <p> <b> Episodes: </b> Undefined </p>
                                                    ) : (
                                                        <p> 
                                                            <b> Episodes: </b> 
                                                            { animeDetail.episodes } 
                                                        </p>
                                                    )}

                                                    <p> <b> Status: </b> { animeDetail.status } </p>

                                                    { animeDetail.score === null ? (
                                                        <p> <b> Score: </b> Undefined </p>  
                                                    ) : (
                                                        <p> <b> Score: </b> { animeDetail.score } </p>
                                                    )}

                                                    <p>
                                                        <b> Producers: </b>
                                                        { animeDetail.producers.map(function(producer){
                                                            return (
                                                                <span key = { producer.mal_id }> 
                                                                    { ' ' + producer.name } |  
                                                                </span>
                                                            )
                                                        })}
                                                    </p>

                                                    <p> 
                                                        <b> Studios: </b> 
                                                        { animeDetail.studios.map(function(studio) {
                                                            return (
                                                                <span key = { studio.mal_id }> 
                                                                    { ' ' + studio.name } | 
                                                                </span>
                                                            )
                                                        })} 
                                                    </p>

                                                    <p> 
                                                        <b>Genders: </b> 
                                                        { animeDetail.genres.map(function(genre){
                                                            return (
                                                                <span key = { genre.mal_id }> 
                                                                    {' ' + genre.name } | 
                                                                </span>
                                                            )
                                                        })} 
                                                    </p>
                                                    
                                                    <p> 
                                                        <b> Opening Theme: </b> 
                                                        { animeDetail.opening_themes[0] } 
                                                    </p>
                                                    <p> <b> Ending Theme: </b> 
                                                        { animeDetail.ending_themes[0] } 
                                                    </p>                                
                                                </>
                                            }
                                        />
                                    </Card>
                                </Col>
                                <Col span = { 8 }>
                                    {
                                        animeDetail.trailer_url !== null ? (
                                            <>
                                                
                                                <ReactPlayer 
                                                    url = { animeDetail.trailer_url } 
                                                    style = {{ marginTop: '40px'}}
                                                />
                                            </>
                                        ) : (
                                            null
                                        )
                                    }
                                </Col>
                            </Row>
                        </Drawer> 
                    </>
                )
            }
            
        </>
    )
};

export default DetailAnime;