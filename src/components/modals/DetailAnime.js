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
                                preview = { false } 
                            />
                            <h3 style = {{ color: 'white' }}> { animeDetail.title } </h3>    
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