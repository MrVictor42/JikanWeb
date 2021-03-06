import React, { useState } from 'react';
import { Drawer, Image, Col, Row, Card } from 'antd';
import ReactPlayer from 'react-player';

const { Meta } = Card;

const DetailAnimeList = (props) => {

    const [visible, setVisible] = useState(false);

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
                    className = 'img_list' src = { props.anime.image_url } 
                    preview = { false } 
                />    
            </a>
            <Drawer
                title = { <b> { `Anime: ${ props.anime.title }` } </b> } 
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
                                    <Image className = 'img_list' src = { props.anime.image_url } />
                                }
                                title = { <b> { props.anime.title } </b> }
                                description = {
                                    <>
                                        <p> <b> Synopsis: </b> { props.anime.synopsis } </p>
                                        <p> <b> Score: </b> { props.anime.score } </p>
                                        <p> <b> Genders: </b> { props.anime.genders.map(function(gender){
                                            return (
                                                <span key = { gender.id }> { gender.name } | </span>
                                            )
                                        }) } </p>
                                        <p> <b> Episodes: </b> { props.anime.episodes } </p>
                                        <p> <b> Continuous: </b> 
                                            { props.anime.continuous ? 'Yes' : 'No' } 
                                        </p>
                                        <p> <b> Kids: </b> { props.anime.kids ? 'Yes' : 'No' } </p>
                                        <p> <b> Airing Start: </b> { props.anime.airing_start } </p>
                                
                                    </>
                                }
                            />
                        </Card>
                    </Col>
                    <Col span = { 8 }>
                        {
                            props.anime.trailer_url !== null ? (
                                <>
                                    
                                    <ReactPlayer 
                                        url = { props.anime.trailer_url } 
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