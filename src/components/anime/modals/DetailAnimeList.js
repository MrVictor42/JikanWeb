import React, { useState, useEffect } from 'react';
import { Drawer, Image, Col, Row, Card } from 'antd';
import ReactPlayer from 'react-player';

import { getAnimeDetailFromJikan } from '../../../api/anime';

const { Meta } = Card;

const DetailAnimeList = (props) => {

    const [visible, setVisible] = useState(false);
    const [animeDetail, setAnimeDetail] = useState();

    useEffect(() => {
        getDetailAnime(props);
    }, []);

	async function getDetailAnime(props) {
        const detail = await getAnimeDetailFromJikan(props.anime.mal_id);
        setAnimeDetail(detail);
    }

    const day = animeDetail.aired.prop.from.day;
    const month = animeDetail.aired.prop.from.month;
    const year = animeDetail.aired.prop.from.year;

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <a onClick = { showDrawer }>
                <Image 
                    className = 'img_list' src = { animeDetail.image_url } 
                    preview = { false } 
                />    
            </a>
            <Drawer
                title = { <b> { `Anime: ${ animeDetail.title }` } </b> } 
                width = { 1370 } height = { 'auto' }
                placement = 'right' closable = { true } onClose = { onClose } visible = { visible }
            >
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
                                    <Image className = 'img_list' src = { animeDetail.image_url } />
                                }
                                title = { <b> { animeDetail.title } </b> }
                                description = {
                                    <>
                                        <p> <b> Title Synonyms </b> { animeDetail.title_synonyms }</p>
                                        <p> <b> Synopsis: </b> { animeDetail.synopsis } </p>

                                        { animeDetail.episodes === null ? (
                                            <p> <b> Episodes: </b> Undefined </p>
                                        ) : (
                                            <p> Episodes:  </p>
                                        )}

                                        <p> <b> Status: </b> { animeDetail.status } </p>

                                        <p> <b> Airing Start: </b> 
                                            { month + '-' + day + '-' + year } 
                                        </p>

                                        { animeDetail.score === null ? (
                                            <p> <b> Score: </b> Undefined </p>  
                                        ) : (
                                            <p> <b> Score: </b> { animeDetail.score } </p>
                                        )}

                                        <p> 
                                            <b> Studios: </b> 
                                            { animeDetail.studios.map(function(studio) {
                                                <span key = { studio.mal_id }> 
                                                    { studio.name } | 
                                                </span>
                                            }) } </p>

                                        <p> 
                                            <b>Genders: </b> { animeDetail.genres.map(function(genre){
                                            return (
                                                <span key = { genre.mal_id }> { genre.name } | </span>
                                            )
                                        }) } </p>
                                        
                                        <p> 
                                            Opening Theme: { animeDetail.opening_themes[0] } 
                                        </p>
                                        <p> Ending Theme: { animeDetail.ending_themes[0] } </p>                                
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
};

export default DetailAnimeList;