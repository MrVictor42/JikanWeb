import React, { useState, useEffect } from 'react';
import { Skeleton, Image, Card, Col, Row } from 'antd';
import ReactPlayer from 'react-player';

import { getAnime } from '../../api/anime';

const { Meta } = Card;

const DetailAnimeSearch = (props) => {

    const [loading, setLoading] = useState(true);
    const [anime, setAnime] = useState();
    
    useEffect(() => {
        getSelectedAnime();
    }, []);

    async function getSelectedAnime() {
        setLoading(true);
        const selectedAnime = await getAnime(props.match.params.slug);
        setAnime(selectedAnime.data);
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
                                            <p> <b> Synopsis: </b> { anime.synopsis } </p>
                                            <p> <b> Score: </b> { anime.score } </p>
                                            <p> <b> Genders: </b> { anime.genders.map(function(gender){
                                                return (
                                                    <span key = { gender.id }> { gender.name } | </span>
                                                )
                                            }) } </p>
                                            <p> <b> Episodes: </b> { anime.episodes } </p>
                                            <p> <b> Continuous: </b> 
                                                { anime.continuous ? 'Yes' : 'No' } 
                                            </p>
                                            <p> <b> Kids: </b> { anime.kids ? 'Yes' : 'No' } </p>
                                            <p> <b> Airing Start: </b> { anime.airing_start } </p>
                                    
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