import React from 'react';
import { Image, Card, Col, Row } from 'antd';
import ReactPlayer from 'react-player';

const { Meta } = Card;

const DetailListAnime = (props) => {

    const genders = props.anime.genders.map(function(item) {
        if(item.name === null) {
            return '';
        } else {
            return item.name + " | ";
        }
    });
    const continuing = props.anime.continuing ? 'Yes' : 'No';
    const kids = props.anime.kids ? 'Yes' : 'No';

    return (
        <Row gutter = { 16 } style = {{ width: 'auto', marginTop: 20, height: 'auto' }}>
            <Col span = { 12 }>
                <Card bordered = { true } style = {{ paddingLeft: 20 }}>
                    <Meta
                        avatar = {
                            <Image className = 'img_list' src = { props.anime.image_url } />
                        }
                        title = { <b> { props.anime.title } </b> }
                        description = {
                            <>
                                <p align = 'justify' style = {{ fontSize: '16px' }}> 
                                    <b> Synopsis: </b> { props.anime.synopsis } 
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Score: </b> { props.anime.score } 
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Genres: </b> { genders }
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Episodes: </b> { props.anime.episodes }
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Continuous: </b> { continuing }
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Status: </b> { props.anime.status }
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Kids: </b> { kids }
                                </p>
                                <p style = {{ fontSize: '16px' }}> 
                                    <b> Airing Start: </b> { props.anime.airing_start }
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
                        <b> Trailer: { props.anime.title } </b> 
                    </h1>
                    {
                        props.anime.trailer_url.includes('youtube') ? (
                            <ReactPlayer 
                                url = { props.anime.trailer_url }
                            />
                        ) : (
                            <h1> { props.anime.trailer_url } </h1>
                        )
                    } 
                </Card>
            </Col>
        </Row>
    );
}

export default DetailListAnime;