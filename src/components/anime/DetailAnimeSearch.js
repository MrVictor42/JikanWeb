import React, { useState, useEffect } from 'react';
import { Skeleton, Image, Card, Col, Row } from 'antd';
import ReactPlayer from 'react-player';

import { getAnimeDetailFromJikan } from '../../api/anime';

const { Meta } = Card;

const DetailAnimeSearch = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();
    
    useEffect(() => {
        getSelectedAnime(props);
    }, []);

    async function getSelectedAnime(props) {
        setLoading(true);
        const selectedAnime = await getAnimeDetailFromJikan(props.match.params.mal_id);
        setAnime(selectedAnime);
        setLoading(false);
    }

    return (
        <>
            {
                loading === true ? (
                    <Skeleton />
                ) : (
                    <Row gutter = { 20 } style = {{ width: 'auto', backgroundColor: 'white' }}>
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
                                        <Image className = 'img_list' src = { anime.image_url } />
                                    }
                                    title = { <b> { anime.title } </b> }
                                    description = {
                                        <>
                                            <p> 
                                                <b> Title Synonyms </b> 
                                                { anime.title_synonyms }
                                            </p>
                                            <p> 
                                                <b> Synopsis: </b> 
                                                { anime.synopsis } 
                                            </p>

                                            { anime.episodes === null ? (
                                                <p> <b> Episodes: </b> Undefined </p>
                                            ) : (
                                                <p> 
                                                    <b> Episodes: </b> 
                                                    { anime.episodes } 
                                                </p>
                                            )}

                                            <p> <b> Status: </b> { anime.status } </p>

                                            { anime.score === null ? (
                                                <p> <b> Score: </b> Undefined </p>  
                                            ) : (
                                                <p> <b> Score: </b> { anime.score } </p>
                                            )}

                                            <p>
                                                <b> Producers: </b>
                                                { anime.producers.map(function(producer){
                                                    return (
                                                        <span key = { producer.mal_id }> 
                                                            { ' ' + producer.name } |  
                                                        </span>
                                                    )
                                                })}
                                            </p>

                                            <p> 
                                                <b> Studios: </b> 
                                                { anime.studios.map(function(studio) {
                                                    return (
                                                        <span key = { studio.mal_id }> 
                                                            { ' ' + studio.name } | 
                                                        </span>
                                                    )
                                                })} 
                                            </p>

                                            <p> 
                                                <b>Genders: </b> 
                                                { anime.genres.map(function(genre){
                                                    return (
                                                        <span key = { genre.mal_id }> 
                                                            {' ' + genre.name } | 
                                                        </span>
                                                    )
                                                })} 
                                            </p>
                                            
                                            <p> 
                                                <b> Opening Theme: </b> 
                                                { anime.opening_themes[0] } 
                                            </p>
                                            <p> <b> Ending Theme: </b> 
                                                { anime.ending_themes[0] } 
                                            </p>                                
                                        </>
                                    }
                                />
                            </Card>
                        </Col>
                        <Col span = { 8 }>
                            {
                                anime.trailer_url !== null ? (
                                    <>
                                        
                                        <ReactPlayer 
                                            url = { anime.trailer_url } 
                                            style = {{ marginTop: '40px'}}
                                        />
                                    </>
                                ) : (
                                    null
                                )
                            }
                        </Col>
                    </Row>
                )
            }
        </>
    )
};

export default DetailAnimeSearch;